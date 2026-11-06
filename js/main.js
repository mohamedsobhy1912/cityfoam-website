// City Foam — language toggle, mobile menu, product filter, contact form
(function () {
  var root = document.documentElement;
  var KEY = 'cityfoam-lang';

  function readLang() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function saveLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) { /* ignore */ }
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

  applyLang(readLang() === 'en' ? 'en' : 'ar');

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(root.lang);

    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = root.lang === 'ar' ? 'en' : 'ar';
        applyLang(next);
        saveLang(next);
      });
    });

    // Mobile menu
    var menuBtn = document.querySelector('.menu-btn');
    var links = document.querySelector('.nav-links');
    if (menuBtn && links) {
      menuBtn.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Product filter
    var chips = document.querySelectorAll('.chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var f = chip.getAttribute('data-filter');
        document.querySelectorAll('[data-cat]').forEach(function (card) {
          card.style.display = (f === 'all' || card.getAttribute('data-cat') === f) ? '' : 'none';
        });
      });
    });

    // Contact form -> opens the visitor's email app (static hosting, no backend)
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
