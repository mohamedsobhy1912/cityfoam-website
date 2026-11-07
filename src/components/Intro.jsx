import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { asset, prefersReducedMotion } from '../lib/motion.js';

const KEY = 'cityfoam-intro-seen';
const TEXTURES = ['pink', 'red', 'magenta', 'blue', 'orange', 'green', 'pink', 'red'];
const rand = (a, b) => a + Math.random() * (b - a);

function shouldShow() {
  if (prefersReducedMotion() || !Element.prototype.animate) return false;
  if (/[?&]intro\b/.test(window.location.search)) return true;
  try {
    return localStorage.getItem(KEY) !== '1';
  } catch {
    return true;
  }
}

// First-visit intro: real foam-texture blocks fly in from every side; tap to scatter them.
export default function Intro({ onReveal, onFinish }) {
  const { c } = useLang();
  const [show] = useState(shouldShow);
  const [ready, setReady] = useState(false);
  const wall = useRef(null);
  const root = useRef(null);
  const blocks = useRef([]);
  const done = useRef(false);

  useEffect(() => {
    if (!show) {
      onReveal();
      onFinish();
      return undefined;
    }
    document.body.classList.add('no-scroll');
    const W = window.innerWidth;
    const H = window.innerHeight;
    const cols = Math.max(3, Math.round(W / 160));
    const rows = Math.max(5, Math.round(H / 120));
    const el = wall.current;
    el.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    el.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    let maxEnd = 0;
    for (let r = 0; r < rows; r++) {
      for (let col = 0; col < cols; col++) {
        const b = document.createElement('div');
        b.className = 'intro__block';
        b.style.backgroundImage = `url(${asset(`img/foam/${TEXTURES[Math.floor(Math.random() * TEXTURES.length)]}.jpg`)})`;
        const cx = (col + 0.5) / cols - 0.5;
        const cy = (r + 0.5) / rows - 0.5;
        const horizontal = Math.abs(cx) * W > Math.abs(cy) * H;
        const dx = horizontal ? Math.sign(cx || 1) * W * rand(0.8, 1.1) : rand(-80, 80);
        const dy = horizontal ? rand(-80, 80) : Math.sign(cy || 1) * H * rand(0.8, 1.1);
        let delay = (0.75 - Math.hypot(cx, cy)) * 650 + rand(0, 180);
        if (delay < 0) delay = rand(0, 120);
        const dur = rand(750, 1050);
        maxEnd = Math.max(maxEnd, delay + dur);
        b.dataset.cx = cx;
        b.dataset.cy = cy;
        b.animate(
          [{ transform: `translate(${dx}px, ${dy}px) rotate(${rand(-120, 120)}deg) scale(.8)` }, { transform: 'none' }],
          { duration: dur, delay, easing: 'cubic-bezier(.22,1.4,.42,1)', fill: 'backwards' }
        );
        el.appendChild(b);
        blocks.current.push(b);
      }
    }
    const readyTimer = setTimeout(() => setReady(true), Math.min(maxEnd, 1700));
    const autoTimer = setTimeout(() => leave(), 8000);
    return () => {
      clearTimeout(readyTimer);
      clearTimeout(autoTimer);
      document.body.classList.remove('no-scroll');
      blocks.current.forEach(node => node.remove());
      blocks.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function leave() {
    if (done.current || !root.current) return;
    done.current = true;
    try {
      localStorage.setItem(KEY, '1');
    } catch {
      /* ignore */
    }
    const W = window.innerWidth;
    const H = window.innerHeight;
    root.current.classList.add('is-leaving');
    blocks.current.forEach(b => {
      let cx = +b.dataset.cx;
      let cy = +b.dataset.cy;
      if (Math.abs(cx) < 0.08 && Math.abs(cy) < 0.08) {
        cx = rand(-0.5, 0.5);
        cy = rand(-0.5, 0.5);
      }
      const k = 1.5 / (Math.hypot(cx, cy) + 0.15);
      b.animate(
        [
          { transform: 'none', opacity: 1 },
          { transform: `translate(${cx * W * k}px, ${cy * H * k}px) rotate(${rand(-200, 200)}deg) scale(.6)`, opacity: 0.9 }
        ],
        { duration: rand(650, 900), delay: rand(0, 160), easing: 'cubic-bezier(.55,0,.8,.3)', fill: 'forwards' }
      );
    });
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      onReveal();
    }, 380);
    setTimeout(onFinish, 1200);
  }

  useEffect(() => {
    if (!show) return undefined;
    const onKey = e => (e.key === 'Escape' || e.key === 'Enter') && leave();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!show) return null;
  return (
    <div className={`intro${ready ? ' is-ready' : ''}`} ref={root} role="dialog" aria-label="City Foam" onClick={() => leave()}>
      <div className="intro__wall" ref={wall} />
      <div className="intro__card">
        <img src={asset('img/logo.png')} alt="City Foam" />
        <p className="intro__tag">{c.intro.tagline}</p>
        <p className="intro__hint">{c.intro.enter}</p>
      </div>
      <button
        type="button"
        className="intro__skip"
        onClick={e => {
          e.stopPropagation();
          leave();
        }}
      >
        {c.intro.skip}
      </button>
    </div>
  );
}
