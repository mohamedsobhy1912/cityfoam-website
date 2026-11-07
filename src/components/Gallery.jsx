import { useRef } from 'react';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { gsap, useGSAP, asset } from '../lib/motion.js';

export default function Gallery() {
  const { c, lang, isAr } = useLang();
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Desktop: vertical scroll drives a horizontal filmstrip.
      mm.add('(min-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
        const el = track.current;
        const distance = () => Math.max(0, el.scrollWidth - window.innerWidth + 80);
        gsap.to(el, {
          x: () => (isAr ? distance() : -distance()),
          ease: 'none',
          scrollTrigger: { trigger: '.gallery__pin', start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 1, invalidateOnRefresh: true }
        });
        gsap.utils.toArray('.gallery__item img').forEach(img => {
          gsap.fromTo(img, { scale: 1.2 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.gallery__pin', start: 'top top', end: () => `+=${distance()}`, scrub: true } });
        });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [lang] }
  );

  return (
    <section id="gallery" className="section section--graphite gallery" ref={root} aria-labelledby="gallery-title">
      <div className="gallery__pin">
        <div className="container">
          <SectionHead id="gallery-title" eyebrow={c.gallery.eyebrow} title={c.gallery.title} />
        </div>
        <div className="gallery__viewport">
          <ul className="gallery__track" ref={track}>
            {c.gallery.items.map(([src, cap], i) => (
              <li key={src} className={`gallery__item gallery__item--${i % 3}`}>
                <figure>
                  <div className="gallery__img">
                    <img src={asset(src)} alt={cap} loading="lazy" />
                  </div>
                  <figcaption>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {cap}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
