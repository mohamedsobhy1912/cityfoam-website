import { useRef, useState } from 'react';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { gsap, ScrollTrigger, useGSAP } from '../lib/motion.js';
import defs from '../scenes/defs.svg?raw';
import base from '../scenes/base.svg?raw';
import s1 from '../scenes/s1.svg?raw';
import s2 from '../scenes/s2.svg?raw';
import s3 from '../scenes/s3.svg?raw';
import s4 from '../scenes/s4.svg?raw';

const SCENES = [s1, s2, s3, s4];
const svg = body => `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${base}${body}</svg>`;

function Scene({ i, badge }) {
  return (
    <div className="scene">
      <div className="scene__svg" dangerouslySetInnerHTML={{ __html: svg(SCENES[i]) }} />
      {i === 1 && <span className="scene__badge">{badge}</span>}
    </div>
  );
}

export default function Manufacturing() {
  const { c, lang } = useLang();
  const m = c.manufacturing;
  const root = useRef(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Desktop: pin the stage and step through the four scenes with scroll.
      mm.add('(min-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
        const steps = m.steps.length;
        const st = ScrollTrigger.create({
          trigger: '.mfg__stage',
          start: 'top top',
          end: () => `+=${window.innerHeight * steps}`,
          pin: true,
          scrub: true,
          onUpdate: self => {
            setActive(Math.min(steps - 1, Math.floor(self.progress * steps)));
            gsap.set('.mfg__progress i', { scaleX: self.progress });
          }
        });
        return () => st.kill();
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [lang] }
  );

  return (
    <section id="manufacturing" className="section section--graphite mfg" ref={root} aria-labelledby="mfg-title">
      <svg className="scene-defs" aria-hidden="true" focusable="false">
        <defs dangerouslySetInnerHTML={{ __html: defs }} />
      </svg>
      <div className="container">
        <SectionHead id="mfg-title" eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
      </div>

      {/* Desktop: pinned stage */}
      <div className="mfg__stage">
        <div className="container mfg__grid">
          <ol className="mfg__steps">
            {m.steps.map((s, i) => (
              <li key={s.n} className={`mfg__step${i === active ? ' is-active' : ''}`}>
                <span className="mfg__num">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
            <li className="mfg__progress" aria-hidden="true">
              <i />
            </li>
          </ol>
          <div className="mfg__visual">
            {m.steps.map((s, i) => (
              <div key={s.n} className={`mfg__scene${i === active ? ' is-active' : ''}`}>
                <Scene i={i} badge={m.badge} />
              </div>
            ))}
            <span className="mfg__note">{m.note}</span>
          </div>
        </div>
      </div>

      {/* Mobile / reduced motion: stacked */}
      <div className="container mfg__stack">
        {m.steps.map((s, i) => (
          <article key={s.n} className="mfg__card" data-reveal>
            <Scene i={i} badge={m.badge} />
            <span className="mfg__num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
        <p className="mfg__note mfg__note--stack">{m.note}</p>
      </div>

      <div className="container">
        <aside className="hennecke" data-reveal>
          <span className="hennecke__mark" aria-hidden="true">
            DE
          </span>
          <div>
            <h3>{m.hennecke.title}</h3>
            <p>{m.hennecke.text}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
