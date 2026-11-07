import ScrollVelocity from '../vendor/reactbits/ScrollVelocity.jsx';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { asset, prefersReducedMotion } from '../lib/motion.js';
import { useInViewVideo } from '../lib/useInViewVideo.js';

function Tile({ item }) {
  const ref = useInViewVideo();
  return (
    <article className="app-tile" data-reveal>
      {item.type === 'video' ? (
        <video ref={ref} src={asset(`${item.media}.mp4`)} poster={asset(`${item.media}.jpg`)} muted loop playsInline preload="none" aria-hidden="true" />
      ) : (
        <img src={asset(item.media)} alt="" loading="lazy" />
      )}
      <div className="app-tile__text">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

export default function Applications() {
  const { c } = useLang();
  const a = c.applications;
  const line = `${a.ticker.join('  ·  ')}  ·  `;
  return (
    <section id="applications" className="section section--ink applications" aria-labelledby="apps-title">
      <div className="container">
        <SectionHead id="apps-title" eyebrow={a.eyebrow} title={a.title} />
      </div>
      <div className="ticker" dir="ltr" aria-hidden="true">
        {prefersReducedMotion() ? (
          <p className="ticker__static">{line}</p>
        ) : (
          <ScrollVelocity texts={[line, line]} velocity={40} numCopies={4} className="ticker__text" parallaxClassName="ticker__row" scrollerClassName="ticker__scroller" outlineAlternate />
        )}
      </div>
      <div className="container app-grid">
        {a.items.map(item => (
          <Tile key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
