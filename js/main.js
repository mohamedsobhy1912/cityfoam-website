// City Foam — language, menu, filter, contact form, intro & motion
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var KEY = 'cityfoam-lang';
  var INTRO_KEY = 'cityfoam-intro-seen';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  function applyLang(lang) {
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    var t = root.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    document.querySelectorAll('[data-ph-' + lang + ']').forEach(function (el) {
      el.placeholder = el.getAttribute('data-ph-' + lang);
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.textContent = lang === 'ar' ? 'English' : 'عربي';
      b.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية');
    });
  }
  applyLang(store(KEY) === 'en' ? 'en' : 'ar');

  function rand(a, b) { return a + Math.random() * (b - a); }
  var FOAM = ['#f5c842', '#4a90d9', '#6cbf6c', '#f28db2', '#f39c4a', '#c9cdd2', '#d71920', '#f5c842', '#4a90d9'];

  /* ---------- Intro: foam flies in from every side, click to pass ---------- */
  function intro() {
    var el = document.getElementById('intro');
    if (!el) return;
    var forced = /[?&]intro\b/.test(location.search);
    if ((!forced && store(INTRO_KEY) === '1') || reduceMotion || !el.animate) { el.remove(); return; }

    el.hidden = false;
    document.body.classList.add('intro-on');
    var wall = el.querySelector('.intro-wall');
    var W = window.innerWidth, H = window.innerHeight;
    var cols = Math.max(3, Math.round(W / 150)), rows = Math.max(5, Math.round(H / 115));
    wall.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    wall.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';

    var blocks = [], maxEnd = 0;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var b = document.createElement('div');
        b.className = 'foam-block';
        b.style.setProperty('--c', FOAM[Math.floor(Math.random() * FOAM.length)]);
        var cx = (c + .5) / cols - .5, cy = (r + .5) / rows - .5;
        var dx, dy;
        if (Math.abs(cx) * W > Math.abs(cy) * H) { dx = Math.sign(cx || 1) * W * rand(.8, 1.1); dy = rand(-80, 80); }
        else { dy = Math.sign(cy || 1) * H * rand(.8, 1.1); dx = rand(-80, 80); }
        var dist = Math.hypot(cx, cy);
        var delay = (0.75 - dist) * 700 + rand(0, 200);
        if (delay < 0) delay = rand(0, 120);
        var dur = rand(800, 1100);
        maxEnd = Math.max(maxEnd, delay + dur);
        b._cx = cx; b._cy = cy;
        b.animate([
          { transform: 'translate(' + dx + 'px,' + dy + 'px) rotate(' + rand(-120, 120) + 'deg) scale(.8)' },
          { transform: 'none' }
        ], { duration: dur, delay: delay, easing: 'cubic-bezier(.22,1.4,.42,1)', fill: 'backwards' });
        wall.appendChild(b);
        blocks.push(b);
      }
    }

    var done = false, autoTimer;
    var readyTimer = setTimeout(function () {
      el.classList.add('ready');
      autoTimer = setTimeout(leave, 9000);
    }, Math.min(maxEnd, 1800));

    function leave(e) {
      if (done) return;
      done = true;
      clearTimeout(readyTimer); clearTimeout(autoTimer);
      el.classList.add('leaving');
      store(INTRO_KEY, '1');
      var hit = e && e.target && e.target.classList && e.target.classList.contains('foam-block') ? e.target : null;
      if (hit) hit.animate([{ transform: 'none' }, { transform: 'scale(1.25,.6)' }, { transform: 'scale(.9,1.15)' }, { transform: 'none' }], { duration: 300 });
      blocks.forEach(function (b) {
        var cx = b._cx, cy = b._cy;
        if (Math.abs(cx) < .08 && Math.abs(cy) < .08) { cx = rand(-.5, .5); cy = rand(-.5, .5); }
        var k = 2.4 / (Math.hypot(cx, cy) + .15);
        b.animate([
          { transform: 'none', opacity: 1 },
          { transform: 'translate(' + (cx * W * k * .6) + 'px,' + (cy * H * k * .6) + 'px) rotate(' + rand(-200, 200) + 'deg) scale(.6)', opacity: .9 }
        ], { duration: rand(650, 900), delay: (hit ? 220 : 0) + rand(0, 160), easing: 'cubic-bezier(.55,0,.8,.3)', fill: 'forwards' });
      });
      var card = el.querySelector('.intro-card');
      card.animate([{ opacity: 1 }, { opacity: 0, transform: 'translate(-50%,-50%) scale(1.25)' }], { duration: 400, fill: 'forwards', easing: 'ease-in' });
      setTimeout(function () { el.remove(); document.body.classList.remove('intro-on'); }, 1250);
    }
    el.addEventListener('click', leave);
    el.querySelector('.intro-skip').addEventListener('click', function (e) { e.stopPropagation(); leave(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' || e.key === 'Enter') leave(); });
  }

  /* ---------- Hero: bouncing figure + floating foam cubes ---------- */
  function hero() {
    var scene = document.querySelector('.scene');
    if (scene) {
      var bigJump = function () {
        if (scene.classList.contains('big')) return;
        scene.classList.add('big');
      };
      scene.addEventListener('click', bigJump);
      scene.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); bigJump(); } });
      var j = scene.querySelector('.jumper');
      j.addEventListener('animationend', function (e) {
        if (e.animationName === 'jump-b') scene.classList.remove('big');
      });
    }
    document.querySelectorAll('.cube').forEach(function (cube) {
      cube.addEventListener('click', function () {
        if (cube.classList.contains('pop')) return;
        cube.classList.remove('respawn');
        cube.classList.add('pop');
        setTimeout(function () {
          cube.classList.remove('pop');
          cube.classList.add('respawn');
          setTimeout(function () { cube.classList.remove('respawn'); }, 800);
        }, 2600);
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  function reveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      items.forEach(function (i) { i.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var t = en.target;
        var sibs = Array.prototype.filter.call(t.parentNode.children, function (s) { return s.classList.contains('reveal'); });
        t.style.transitionDelay = (sibs.indexOf(t) % 4) * 90 + 'ms';
        t.classList.add('in');
        setTimeout(function () { t.style.transitionDelay = ''; }, 1200);
        io.unobserve(t);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (i) { io.observe(i); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(root.lang);
    intro();
    hero();
    reveal();

    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = root.lang === 'ar' ? 'en' : 'ar';
        applyLang(next);
        store(KEY, next);
      });
    });

    var header = document.querySelector('.site-header');
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var menuBtn = document.querySelector('.menu-btn');
    var links = document.querySelector('.nav-links');
    if (menuBtn && links) {
      menuBtn.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    var chips = document.querySelectorAll('.chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var f = chip.getAttribute('data-filter');
        document.querySelectorAll('[data-cat]').forEach(function (card) {
          var show = f === 'all' || card.getAttribute('data-cat') === f;
          card.style.display = show ? '' : 'none';
          if (show) card.classList.add('in');
        });
      });
    });

    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var d = new FormData(form);
        var en = root.lang === 'en';
        var subject = (en ? 'Inquiry from website: ' : 'استفسار من الموقع: ') + (d.get('topic') || '');
        var body = [
          (en ? 'Name: ' : 'الاسم: ') + (d.get('name') || ''),
          (en ? 'Phone: ' : 'الهاتف: ') + (d.get('phone') || ''),
          (en ? 'Email: ' : 'البريد: ') + (d.get('email') || ''),
          '',
          d.get('message') || ''
        ].join('\n');
        window.location.href = 'mailto:mohamed.sobhy@cityfoameg.com?subject=' +
          encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      });
    }

    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
