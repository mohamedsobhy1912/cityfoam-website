import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/util.js';
import { FOUNDED } from '../content.js';

export default function About() {
  const { c } = useLang();
  const a = c.about;
  const years = new Date().getFullYear() - FOUNDED;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap about">
        <div className="about__text">
          <h2 id="about-title">{a.title}</h2>
          {a.body.map(p => (
            <p key={p}>{p}</p>
          ))}
          <dl className="stats">
            {a.stats.map(s => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>
                  <bdi dir="ltr">{s.value === 'years' ? `${years}+` : s.value}</bdi>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <img className="about__img" src={asset(a.img)} alt={a.alt} loading="lazy" />
      </div>

      <div className="wrap">
        <h3 className="why__title">{a.whyTitle}</h3>
        <ul className="why">
          {a.why.map(w => (
            <li key={w.title}>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
