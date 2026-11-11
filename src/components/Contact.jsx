import { useEffect, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { useInquiry } from '../lib/inquiry.jsx';
import { EMAIL, PHONE, MAP_URL } from '../content.js';
import { PhoneIcon, MailIcon, PinIcon } from './Icons.jsx';

export default function Contact() {
  const { c } = useLang();
  const k = c.contact;
  const f = k.form;
  const { type } = useInquiry();
  const [topic, setTopic] = useState(0);
  const [sent, setSent] = useState(false);
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
    setSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${f.subject} — ${f.types[topic]}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section--mist" aria-labelledby="contact-title">
      <div className="wrap contact">
        <div className="contact__info">
          <h2 id="contact-title">{k.title}</h2>
          <p className="contact__lead">{k.lead}</p>

          <a href={`tel:${PHONE}`} className="hotline">
            <span className="hotline__label">{k.phoneLabel}</span>
            <span className="hotline__num" dir="ltr">
              {PHONE}
            </span>
          </a>

          <ul className="contact__list">
            <li>
              <MailIcon />
              <div>
                <span className="contact__label">{k.emailLabel}</span>
                <a href={`mailto:${EMAIL}`} dir="ltr">
                  {EMAIL}
                </a>
              </div>
            </li>
            <li>
              <PinIcon />
              <div>
                <span className="contact__label">{k.locationLabel}</span>
                <span>{k.location}</span>
                <a href={MAP_URL} className="contact__map" target="_blank" rel="noopener noreferrer">
                  {k.map}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={submit}>
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
              <input name="phone" type="tel" autoComplete="tel" inputMode="tel" dir="ltr" />
            </label>
            <label className="field">
              <span>{f.email}</span>
              <input name="email" type="email" autoComplete="email" inputMode="email" spellCheck={false} dir="ltr" />
            </label>
          </div>
          <fieldset className="field">
            <legend>{f.type}</legend>
            <div className="choices">
              {f.types.map((t, i) => (
                <label key={t} className="choice">
                  <input type="radio" name="type" value={i} checked={topic === i} onChange={() => setTopic(i)} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            <span>{f.message}</span>
            <textarea name="message" rows="5" required placeholder={f.messagePh} />
          </label>
          <button type="submit" className="btn btn--red">
            {f.send}
          </button>
          <p className="form__note" aria-live="polite">
            {sent ? (
              <>
                {f.sent}{' '}
                <a href={`mailto:${EMAIL}`} dir="ltr">
                  {EMAIL}
                </a>
              </>
            ) : (
              f.note
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
