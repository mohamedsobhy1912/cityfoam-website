import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { asset, prefersReducedMotion } from '../lib/util.js';
import { PHONE } from '../content.js';
import { PhoneIcon } from './Icons.jsx';

const PORTRAIT = '(max-aspect-ratio: 4/5)';
const pick = () =>
  window.matchMedia(PORTRAIT).matches
    ? { src: 'media/hero-yard-portrait.mp4', poster: 'media/hero-yard-portrait.jpg' }
    : { src: 'media/hero-yard.mp4', poster: 'media/hero-yard.jpg' };

export default function Hero() {
  const { c } = useLang();
  const h = c.hero;
  const video = useRef(null);
  const [source, setSource] = useState(pick);
  // Looping video runs past 5s, so it gets a pause control (WCAG 2.2.2); off by default for reduced motion.
  const [paused, setPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia(PORTRAIT);
    const onChange = () => setSource(pick());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (paused) v.pause();
    else v.play().catch(() => setPaused(true));
  }, [paused, source]);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <video ref={video} key={source.src} className="hero__video" src={asset(source.src)} poster={asset(source.poster)} muted loop playsInline autoPlay={!paused} preload="metadata" aria-label={h.alt} />
      <div className="hero__shade" aria-hidden="true" />

      <div className="wrap hero__content">
        <h1 id="hero-title">{h.title}</h1>
        <div className="hero__row">
          <p className="hero__sub">{h.sub}</p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--red">
              {h.quote}
            </a>
            <a href={`tel:${PHONE}`} className="btn btn--light">
              <PhoneIcon />
              {h.call}
            </a>
          </div>
        </div>
        <div className="hero__foot">
          <dl className="hero__facts">
            {h.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <button type="button" className="hero__toggle" onClick={() => setPaused(p => !p)} aria-label={paused ? h.play : h.pause} aria-pressed={paused}>
            <span className={paused ? 'icon-play' : 'icon-pause'} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
