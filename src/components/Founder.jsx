import CountUp from '../vendor/reactbits/CountUp.jsx';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { WONDERLAND_URL } from '../content.js';

export default function Founder() {
  const { c } = useLang();
  const f = c.founder;
  const g = c.group;
  return (
    <section id="founder" className="section section--paper founder" aria-labelledby="founder-title">
      <div className="container founder__grid">
        <div className="founder__card" data-reveal aria-hidden="true">
          <span className="founder__mono">SB</span>
          <div className="founder__stat">
            <span className="founder__num">
              <CountUp to={f.statValue} duration={2} />
              <i>+</i>
            </span>
            <span>{f.stat}</span>
          </div>
        </div>
        <div>
          <SectionHead id="founder-title" eyebrow={f.eyebrow} title={[f.name]} tone="light" />
          <p className="founder__role" data-reveal>
            {f.role}
          </p>
          {f.body.map(p => (
            <p key={p} className="founder__body" data-reveal>
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="container">
        <a className="group-card" href={WONDERLAND_URL} target="_blank" rel="noopener noreferrer" data-reveal>
          <span className="group-card__eyebrow">{g.eyebrow}</span>
          <span className="group-card__name">{g.name}</span>
          <span className="group-card__text">{g.text}</span>
          <span className="group-card__cta">
            {g.cta}
            <span className="btn__arrow" aria-hidden="true">
              ↗
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
