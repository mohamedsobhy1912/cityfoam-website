import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/util.js';

export default function Factory() {
  const { c } = useLang();
  const f = c.factory;
  return (
    <section id="factory" className="section section--navy" aria-labelledby="factory-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="factory-title">{f.title}</h2>
          <p>{f.lead}</p>
        </header>

        {/* A real sequence, so the steps are numbered. */}
        <ol className="steps">
          {f.steps.map((s, i) => (
            <li key={s.title} className="step">
              <img src={asset(s.img)} alt={s.alt} loading="lazy" />
              <span className="step__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <aside className="callout">
          <h3>{f.hennecke.title}</h3>
          <p>{f.hennecke.text}</p>
        </aside>
      </div>
    </section>
  );
}
