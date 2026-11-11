import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/util.js';
import { EMAIL, PHONE, MAP_URL } from '../content.js';

export default function Footer() {
  const { c } = useLang();
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <img className="footer__logo" src={asset('img/logo-white.png')} alt="City Foam" width="160" height="66" loading="lazy" />
          <p>{c.footer.desc}</p>
        </div>
        <nav aria-label={c.menu}>
          <ul>
            {c.nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>{c.footer.productsTitle}</h2>
          <ul>
            {c.products.items.map(p => (
              <li key={p.key}>
                <a href="#products">{p.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{c.footer.contactTitle}</h2>
          <ul>
            <li>
              <a href={`tel:${PHONE}`}>
                {c.contact.phoneLabel} <span dir="ltr">{PHONE}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} dir="ltr">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                {c.contact.location}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__bottom">
        © {new Date().getFullYear()} City Foam. {c.footer.rights}
      </div>
    </footer>
  );
}
