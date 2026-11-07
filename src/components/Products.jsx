import { useRef } from 'react';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { useInquiry } from '../lib/inquiry.jsx';
import { useSmoothScroll } from '../lib/SmoothScroll.jsx';
import { gsap, useGSAP, asset, prefersReducedMotion } from '../lib/motion.js';

export default function Products() {
  const { c } = useLang();
  const { setType } = useInquiry();
  const { scrollTo } = useSmoothScroll();
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray('.product').forEach(row => {
        const media = row.querySelector('.product__media');
        gsap.fromTo(media, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: row, start: 'top 75%' } });
        gsap.fromTo(media.querySelector('img'), { yPercent: -8, scale: 1.15 }, { yPercent: 8, scale: 1.05, ease: 'none', scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    },
    { scope: root }
  );

  return (
    <section id="products" className="section section--ink products" ref={root} aria-labelledby="products-title">
      <div className="container">
        <SectionHead id="products-title" eyebrow={c.products.eyebrow} title={c.products.title} lead={c.products.lead} />
        <div className="products__list">
          {c.products.items.map((p, i) => (
            <article className={`product${i % 2 ? ' product--flip' : ''}`} key={p.key}>
              <div className="product__media">
                <img src={asset(p.img)} alt={p.name} loading="lazy" />
                <span className="product__index">0{i + 1}</span>
              </div>
              <div className="product__body">
                <h3 className="product__name" data-reveal>
                  {p.name}
                </h3>
                <p className="product__desc" data-reveal>
                  {p.desc}
                </p>
                <div className="product__meta" data-reveal>
                  <div>
                    <h4 className="meta-title">{c.products.specLabel}</h4>
                    <table className="spec">
                      <tbody>
                        {p.specs.map(([k, v]) => (
                          <tr key={k}>
                            <th scope="row">{k}</th>
                            <td>{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 className="meta-title">{c.products.appsLabel}</h4>
                    <ul className="chips">
                      {p.apps.map(a => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="btn btn--line"
                  data-reveal
                  onClick={e => {
                    e.preventDefault();
                    setType(i);
                    scrollTo('contact');
                  }}
                >
                  {c.products.cta}
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
