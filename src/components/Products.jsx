import { useLang } from '../lib/i18n.jsx';
import { useInquiry } from '../lib/inquiry.jsx';
import { asset } from '../lib/util.js';

export default function Products() {
  const { c } = useLang();
  const { setType } = useInquiry();
  const p = c.products;
  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="products-title">{p.title}</h2>
          <p>{p.lead}</p>
        </header>

        <div className="products">
          {p.items.map((item, i) => (
            <article key={item.key} className="product">
              <img className="product__img" src={asset(item.img)} alt={item.alt} loading="lazy" />
              <div className="product__body">
                <h3>{item.name}</h3>
                <p className="product__desc">{item.desc}</p>
                <h4 className="product__label">{p.specLabel}</h4>
                <table className="specs">
                  <tbody>
                    {item.specs.map(([k, v]) => (
                      <tr key={k}>
                        <th scope="row">{k}</th>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h4 className="product__label">{p.usesLabel}</h4>
                <ul className="tags">
                  {item.uses.map(u => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn--ghost" onClick={() => setType(i)}>
                  {p.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
