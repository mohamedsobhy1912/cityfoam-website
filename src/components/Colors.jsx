import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/util.js';
import { SWATCHES } from '../content.js';

// The signature element: a giant word filled with the real foam textures from the yard.
// Scrolling slides the colours through the letters (CSS scroll-driven animation).
export default function Colors() {
  const { c } = useLang();
  return (
    <section className="colors" aria-labelledby="colors-title">
      <p className="colors__word" aria-hidden="true" style={{ backgroundImage: `url(${asset('img/foam/strip.jpg')})` }}>
        {c.colors.word}
      </p>
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
