import { useEffect, useState } from 'react';
import Magnet from '../vendor/reactbits/Magnet.jsx';
import SectionHead from './SectionHead.jsx';
import { useLang } from '../lib/i18n.jsx';
import { useInquiry } from '../lib/inquiry.jsx';
import { EMAIL } from '../content.js';
import { prefersReducedMotion } from '../lib/motion.js';

export default function Contact() {
  const { c } = useLang();
  const f = c.contact.form;
  const { type } = useInquiry();
  const [topic, setTopic] = useState(0);
  useEffect(() => setTopic(type), [type]);

  // Static hosting has no backend: build a mailto with the filled-in fields.
  const submit = e => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `${f.name}: ${d.get('name') || ''}`,
      `${f.company}: ${d.get('company') || ''}`,
      `${f.phone}: ${d.get('phone') || ''}`,
      `${f.email}: ${d.get('email') || ''}`,
      `${f.type}: ${f.types[topic]}`,
      '',
      d.get('message') || ''
    ].join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${f.subject} — ${f.types[topic]}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section--ink contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div>
          <SectionHead id="contact-title" eyebrow={c.contact.eyebrow} title={c.contact.title} lead={c.contact.lead} />
          <dl className="contact__info">
            <div data-reveal>
              <dt>{c.contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} dir="ltr">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div data-reveal>
              <dt>{c.contact.businessLabel}</dt>
              <dd>{c.contact.business}</dd>
            </div>
            <div data-reveal>
              <dt>{c.contact.locationLabel}</dt>
              <dd>{c.contact.location}</dd>
            </div>
          </dl>
        </div>
        <form className="form" onSubmit={submit} data-reveal>
          <div className="form__row">
            <label className="field">
              <span>{f.name}</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label className="field">
              <span>{f.company}</span>
              <input name="company" autoComplete="organization" />
            </label>
          </div>
          <div className="form__row">
            <label className="field">
              <span>{f.phone}</span>
              <input name="phone" type="tel" autoComplete="tel" dir="ltr" />
            </label>
            <label className="field">
              <span>{f.email}</span>
              <input name="email" type="email" autoComplete="email" dir="ltr" />
            </label>
          </div>
          <fieldset className="field field--types">
            <legend>{f.type}</legend>
            <div className="type-pills">
              {f.types.map((t, i) => (
                <label key={t} className={`type-pill${topic === i ? ' is-on' : ''}`}>
                  <input type="radio" name="type" value={i} checked={topic === i} onChange={() => setTopic(i)} />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            <span>{f.message}</span>
            <textarea name="message" rows="5" required placeholder={f.messagePh} />
          </label>
          <div className="form__foot">
            <Magnet padding={50} magnetStrength={5} disabled={prefersReducedMotion()}>
              <button type="submit" className="btn btn--primary">
                {f.send}
                <span className="btn__arrow" aria-hidden="true">→</span>
              </button>
            </Magnet>
            <p className="form__note">{f.note}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
