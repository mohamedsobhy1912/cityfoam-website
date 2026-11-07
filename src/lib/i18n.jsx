import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CONTENT } from '../content.js';

const KEY = 'cityfoam-lang';
const LangContext = createContext(null);

function readLang() {
  try {
    return localStorage.getItem(KEY) === 'en' ? 'en' : 'ar';
  } catch {
    return 'ar';
  }
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readLang);
  const c = CONTENT[lang];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = c.dir;
    document.title = c.title;
    const skip = document.querySelector('.skip-link');
    if (skip) skip.textContent = c.skip;
  }, [lang, c]);

  const setLang = useCallback(next => {
    setLangState(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(() => ({ lang, c, setLang, isAr: lang === 'ar' }), [lang, c, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
