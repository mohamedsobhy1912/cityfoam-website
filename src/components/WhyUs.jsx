import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';

export default function WhyUs() {
  const { c } = useLang();
  return (
    <section id="why" className="section section--paper why" aria-labelledby="why-title">
      <div className="container">
        <SectionHead id="why-title" eyebrow={c.why.eyebrow} title={c.why.title} tone="light" />
        <ol className="why__grid">
          {c.why.items.map((it, i) => (
            <li key={it.title} className="why__item" data-reveal>
              <span className="why__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
