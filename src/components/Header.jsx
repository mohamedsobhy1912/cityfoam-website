import { useEffect, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { asset } from '../lib/util.js';
import { PHONE } from '../content.js';
import { PhoneIcon } from './Icons.jsx';

export default function Header() {
  const { c, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header${raised ? ' is-raised' : ''}`}>
      <div className="wrap header__bar">
        <a href="#top" className="header__logo" onClick={() => setOpen(false)}>
          <img src={asset('img/logo.png')} alt="City Foam" width="509" height="211" />
        </a>

        <nav id="site-nav" className={`header__nav${open ? ' is-open' : ''}`} aria-label={c.menu}>
          {c.nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label={c.langLabel} lang={lang === 'ar' ? 'en' : 'ar'}>
            {c.langSwitch}
          </button>
          <a href={`tel:${PHONE}`} className="btn btn--red btn--small" aria-label={`${c.callShort} ${PHONE}`}>
            <PhoneIcon />
            <span dir="ltr">{PHONE}</span>
          </a>
          <button type="button" className="header__menu" aria-expanded={open} aria-controls="site-nav" aria-label={open ? c.close : c.menu} onClick={() => setOpen(o => !o)}>
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
