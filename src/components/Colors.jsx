import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/util.js';
import { SWATCHES } from '../content.js';

// The signature element: the real foam colours from the yard, as soft blocks.
export default function Colors() {
  const { c } = useLang();
  return (
    <section className="colors" aria-labelledby="colors-title">
      <div className="wrap colors__grid">
        <div>
          <h2 id="colors-title" className="colors__title">
            {c.colors.title}
          </h2>
          <p className="colors__text">{c.colors.text}</p>
        </div>
        <ul className="swatches">
          {SWATCHES.map(name => (
            <li key={name} className="swatch">
              <span className="swatch__block" style={{ backgroundImage: `url(${asset(`img/foam/${name}.jpg`)})` }} />
              <span className="swatch__name">{c.colors.names[name]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
