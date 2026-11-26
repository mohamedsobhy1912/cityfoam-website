import { useRef } from 'react';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/motion.js';

// Company timeline: a ruler-style rail that fills as you scroll, with five milestones.
export default function History() {
  const { c, lang } = useLang();
  const h = c.history;
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.history__fill',
        { scaleX: 0, scaleY: 0 },
        { scaleX: 1, scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.history__list', start: 'top 80%', end: 'bottom 55%', scrub: true } }
      );
    },
    { scope: root, dependencies: [lang] }
  );

  return (
    <section id="history" className="section section--graphite history" ref={root} aria-labelledby="history-title">
      <div className="container">
        <SectionHead id="history-title" eyebrow={h.eyebrow} title={h.title} />
        <div className="history__track">
          <div className="history__rail" aria-hidden="true">
            <span className="history__fill" />
          </div>
          <ol className="history__list">
            {h.items.map(item => (
              <li key={item.year} className="history__item" data-reveal>
                <span className="history__dot" aria-hidden="true" />
                <span className="history__year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
