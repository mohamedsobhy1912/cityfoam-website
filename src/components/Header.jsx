import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { useSmoothScroll } from '../lib/SmoothScroll.jsx';
import { gsap, ScrollTrigger, useGSAP, asset, prefersReducedMotion } from '../lib/motion.js';

export default function Header() {
  const { c, lang, setLang } = useLang();
  const { scrollTo } = useSmoothScroll();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('top');
  const overlayRef = useRef(null);

  // Solid background after the hero edge; hide on scroll down, show on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 400 && y > last && !open);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  // Highlight the section currently in view.
  useGSAP(
    () => {
      const triggers = c.nav.map(([id]) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: self => self.isActive && setActive(id)
        });
      });
      return () => triggers.forEach(t => t && t.kill());
    },
    { dependencies: [lang] }
  );

  // Mobile menu entrance.
  useGSAP(
    () => {
      if (!open || prefersReducedMotion()) return;
      gsap.fromTo(
        overlayRef.current.querySelectorAll('.menu-overlay__link'),
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, ease: 'expo.out', stagger: 0.05 }
      );
    },
    { dependencies: [open], scope: overlayRef }
  );

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = e => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <header className={`site-header${solid ? ' is-solid' : ''}${hidden ? ' is-hidden' : ''}`}>
        <div className="container site-header__inner">
          <a href="#top" className="brand" onClick={e => go(e, 'top')} aria-label="City Foam">
            <img src={asset('img/logo-white.png')} alt="City Foam" width="140" height="58" />
          </a>
          <nav className="main-nav" aria-label="Main">
            {c.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={e => go(e, id)} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <div className="site-header__actions">
            <button type="button" className="lang-toggle" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label={c.langLabel}>
              {c.langSwitch}
            </button>
            <button type="button" className={`burger${open ? ' is-open' : ''}`} aria-expanded={open} aria-controls="menu-overlay" aria-label={open ? c.close : c.menu} onClick={() => setOpen(o => !o)}>
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div id="menu-overlay" ref={overlayRef} className={`menu-overlay${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="container menu-overlay__nav" aria-label="Mobile">
          {c.nav.map(([id, label], i) => (
            <div className="menu-overlay__row" key={id}>
              <a href={`#${id}`} className="menu-overlay__link" tabIndex={open ? 0 : -1} onClick={e => go(e, id)}>
                <span className="menu-overlay__num">0{i + 1}</span>
                {label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
