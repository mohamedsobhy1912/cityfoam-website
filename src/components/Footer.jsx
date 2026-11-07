import { useLang } from '../lib/i18n.jsx';
import { useSmoothScroll } from '../lib/SmoothScroll.jsx';
import { EMAIL } from '../content.js';
import { asset } from '../lib/motion.js';

export default function Footer() {
  const { c } = useLang();
  const { scrollTo } = useSmoothScroll();
  const go = (e, id) => {
    e.preventDefault();
    scrollTo(id);
  };
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={asset('img/logo-white.png')} alt="City Foam" width="160" height="66" loading="lazy" />
          <p>{c.footer.desc}</p>
        </div>
        <nav aria-label={c.footer.navTitle}>
          <h2 className="footer__title">{c.footer.navTitle}</h2>
          <ul>
            {c.nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={e => go(e, id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer__title">{c.footer.productsTitle}</h2>
          <ul>
            {c.products.items.map(p => (
              <li key={p.key}>
                <a href="#products" onClick={e => go(e, 'products')}>
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer__title">{c.footer.contactTitle}</h2>
          <ul>
            <li>
              <a href={`mailto:${EMAIL}`} dir="ltr">
                {EMAIL}
              </a>
            </li>
            <li>{c.contact.location}</li>
            <li>
              <a href="?intro">{c.footer.replay}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} City Foam — سيتي فوم. {c.footer.rights}
        </span>
        <span className="footer__word" aria-hidden="true">
          CITY FOAM
        </span>
      </div>
    </footer>
  );
}
