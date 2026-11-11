import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/util.js';
import { useInViewVideo } from '../lib/useInViewVideo.js';

function Use({ item }) {
  const ref = useInViewVideo();
  return (
    <li className="use">
      {item.type === 'video' ? (
        <video ref={ref} src={asset(`${item.media}.mp4`)} poster={asset(`${item.media}.jpg`)} muted loop playsInline preload="none" aria-hidden="true" />
      ) : (
        <img src={asset(item.media)} alt="" loading="lazy" />
      )}
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </li>
  );
}

export default function Uses() {
  const { c } = useLang();
  return (
    <section id="uses" className="section section--mist" aria-labelledby="uses-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="uses-title">{c.uses.title}</h2>
        </header>
        <ul className="uses">
          {c.uses.items.map(item => (
            <Use key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
