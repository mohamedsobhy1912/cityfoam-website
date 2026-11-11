import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { asset, prefersReducedMotion } from '../lib/util.js';
import { PHONE } from '../content.js';
import { PhoneIcon } from './Icons.jsx';

export default function Hero() {
  const { c } = useLang();
  const h = c.hero;
  const video = useRef(null);
  // Looping video runs past 5s, so it gets a pause control (WCAG 2.2.2); off by default for reduced motion.
  const [paused, setPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (paused) v.pause();
    else v.play().catch(() => setPaused(true));
  }, [paused]);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <h1 id="hero-title">{h.title}</h1>
          <p className="hero__sub">{h.sub}</p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--red">
              {h.quote}
            </a>
            <a href={`tel:${PHONE}`} className="btn btn--ghost">
              <PhoneIcon />
              {h.call}
            </a>
          </div>
          <dl className="hero__facts">
            {h.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media">
          <video ref={video} src={asset('media/hero-yard-portrait.mp4')} poster={asset('media/hero-yard-portrait.jpg')} muted loop playsInline autoPlay={!paused} preload="metadata" aria-label={h.alt} />
          <button type="button" className="hero__toggle" onClick={() => setPaused(p => !p)} aria-label={paused ? h.play : h.pause} aria-pressed={paused}>
            <span className={paused ? 'icon-play' : 'icon-pause'} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
