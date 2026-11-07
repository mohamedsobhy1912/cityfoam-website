import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/motion.js';

// Technical layout: four pillars + a real foam texture under an animated inspection scan.
export default function Quality() {
  const { c } = useLang();
  const q = c.quality;
  return (
    <section id="quality" className="section section--paper quality" aria-labelledby="quality-title">
      <div className="container quality__grid">
        <div>
          <SectionHead id="quality-title" eyebrow={q.eyebrow} title={q.title} lead={q.lead} tone="light" />
          <ol className="pillars">
            {q.pillars.map((p, i) => (
              <li key={p.title} className="pillar" data-reveal>
                <span className="pillar__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <figure className="inspect" data-reveal>
          <div className="inspect__frame">
            <img src={asset('media/gallery/tex-magenta.jpg')} alt={q.scan} loading="lazy" width="500" height="500" />
            <span className="inspect__scan" aria-hidden="true" />
            <svg className="inspect__marks" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M6 2 H2 V6 M94 2 H98 V6 M6 98 H2 V94 M94 98 H98 V94" fill="none" stroke="#fff" strokeWidth=".6" />
              {Array.from({ length: 21 }, (_, i) => (
                <line key={i} x1={5 + i * 4.5} y1="100" x2={5 + i * 4.5} y2={i % 5 === 0 ? 95 : 97.5} stroke="#fff" strokeWidth=".35" />
              ))}
              <line x1="50" y1="44" x2="50" y2="56" stroke="#fff" strokeWidth=".35" />
              <line x1="44" y1="50" x2="56" y2="50" stroke="#fff" strokeWidth=".35" />
              <circle cx="50" cy="50" r="7" fill="none" stroke="#fff" strokeWidth=".35" />
            </svg>
          </div>
          <figcaption>{q.scan}</figcaption>
        </figure>
      </div>
    </section>
  );
}
