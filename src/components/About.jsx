import { useRef } from 'react';
import CountUp from '../vendor/reactbits/CountUp.jsx';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { FOUNDED } from '../content.js';
import { gsap, useGSAP, asset, prefersReducedMotion } from '../lib/motion.js';

export default function About() {
  const { c } = useLang();
  const root = useRef(null);
  const years = new Date().getFullYear() - FOUNDED;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.about__figure',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', ease: 'expo.inOut', duration: 1.6, scrollTrigger: { trigger: '.about__figure', start: 'top 80%' } }
      );
      gsap.fromTo('.about__figure img', { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.about__figure', start: 'top bottom', end: 'bottom top', scrub: true } });
    },
    { scope: root }
  );

  return (
    <section id="about" className="section section--paper about" ref={root} aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__text">
          <SectionHead id="about-title" eyebrow={c.about.eyebrow} title={c.about.title} tone="light" />
          <p className="about__lead" data-reveal>
            {c.about.lead}
          </p>
          {c.about.body.map(p => (
            <p key={p} className="about__body" data-reveal>
              {p}
            </p>
          ))}
          <dl className="stats">
            {c.about.stats.map(s => (
              <div className="stats__item" key={s.label} data-reveal>
                <dt className="stats__label">{s.label}</dt>
                <dd className="stats__value">
                  <CountUp to={s.value === 'years' ? years : s.value} from={s.from ?? 0} duration={2.2} separator="" />
                  {s.suffix && <span className="stats__suffix">{s.suffix}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="about__figure">
          <img src={asset('media/gallery/yard-red.jpg')} alt={c.about.caption} loading="lazy" width="1000" height="1250" />
          <figcaption>{c.about.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
