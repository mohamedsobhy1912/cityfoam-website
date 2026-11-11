import { useEffect, useRef, useState } from 'react';
import SplitText from '../vendor/reactbits/SplitText.jsx';
import Magnet from '../vendor/reactbits/Magnet.jsx';
import Noise from '../vendor/reactbits/Noise.jsx';
import { useLang } from '../lib/i18n.jsx';
import { useSmoothScroll } from '../lib/SmoothScroll.jsx';
import { gsap, useGSAP, asset, prefersReducedMotion } from '../lib/motion.js';

const pickSource = () =>
  window.matchMedia('(max-aspect-ratio: 4/5)').matches
    ? { src: 'media/hero-yard-portrait.mp4', poster: 'media/hero-yard-portrait.jpg' }
    : { src: 'media/hero-yard.mp4', poster: 'media/hero-yard.jpg' };

export default function Hero({ ready }) {
  const { c, isAr } = useLang();
  const { scrollTo } = useSmoothScroll();
  const root = useRef(null);
  const video = useRef(null);
  const [source, setSource] = useState(pickSource);
  const reduce = prefersReducedMotion();
  // Looping background video runs well past 5s, so it needs a pause control (WCAG 2.2.2).
  const [paused, setPaused] = useState(reduce);

  useEffect(() => {
    const mq = window.matchMedia('(max-aspect-ratio: 4/5)');
    const onChange = () => setSource(pickSource());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (paused) v.pause();
    else v.play().catch(() => setPaused(true));
  }, [source, paused]);

  // Cinematic entrance once the intro has finished, then a slow parallax on scroll.
  useGSAP(
    () => {
      if (!ready || reduce) return;
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.fromTo('.hero__media', { clipPath: 'inset(12% 12% 12% 12%)', scale: 1.18 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.8 })
        .fromTo('.hero__eyebrow, .hero__sub, .hero__ctas, .hero__facts li', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.08 }, 0.7);
      gsap.to('.hero__media video', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      });
      gsap.to('.hero__content', {
        yPercent: -18,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      });
    },
    { scope: root, dependencies: [ready] }
  );

  const go = (e, id) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section id="top" className="hero" ref={root} aria-label="City Foam">
      <div className="hero__media">
        <video
          ref={video}
          key={source.src}
          src={asset(source.src)}
          poster={asset(source.poster)}
          muted
          loop
          playsInline
          autoPlay={!paused}
          preload="auto"
          aria-hidden="true"
        />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <Noise opacity={0.07} fps={18} blendMode="overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow eyebrow eyebrow--light">
          <span className="eyebrow__bar" aria-hidden="true" />
          {c.hero.eyebrow}
        </p>
        <h1 className="hero__title">
          {ready &&
            c.hero.lines.map((line, i) => (
              <SplitText
                key={line}
                text={line}
                tag="span"
                className={`hero__line${i === 1 ? ' hero__line--accent' : ''}`}
                splitType={isAr ? 'words' : 'chars'}
                textAlign="start"
                delay={isAr ? 90 : 28}
                duration={1.3}
                mask
                trigger="load"
              />
            ))}
          {!ready && <span className="sr-only">{c.hero.lines.join(' ')}</span>}
        </h1>
        <p className="hero__sub">{c.hero.sub}</p>
        <div className="hero__ctas">
          <Magnet padding={60} magnetStrength={4} disabled={reduce}>
            <a href="#products" className="btn btn--primary" onClick={e => go(e, 'products')}>
              {c.hero.cta1}
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </Magnet>
          <Magnet padding={60} magnetStrength={4} disabled={reduce}>
            <a href="#about" className="btn btn--ghost" onClick={e => go(e, 'about')}>
              {c.hero.cta2}
            </a>
          </Magnet>
        </div>
      </div>
      <div className="hero__bar">
        <ul className="container hero__facts">
          {c.hero.facts.map(f => (
            <li key={f}>{f}</li>
          ))}
          <li className="hero__toggle">
            <button type="button" className="video-toggle" onClick={() => setPaused(p => !p)} aria-label={paused ? c.hero.play : c.hero.pause} aria-pressed={paused}>
              <span className={`video-toggle__icon${paused ? ' is-paused' : ''}`} aria-hidden="true" />
            </button>
          </li>
          <li className="hero__scroll" aria-hidden="true">
            <span>{c.hero.scroll}</span>
            <i />
          </li>
        </ul>
      </div>
    </section>
  );
}
