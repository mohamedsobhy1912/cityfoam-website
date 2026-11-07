import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, prefersReducedMotion } from './motion.js';

const ScrollContext = createContext({ lenis: null, scrollTo: () => {} });

const HEADER_OFFSET = -72;

export function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    // Lenis drives the scroll; GSAP's ticker drives Lenis so ScrollTrigger stays in sync.
    const instance = new Lenis({ autoRaf: false, lerp: 0.1, smoothWheel: true });
    lenisRef.current = instance;
    setLenis(instance);
    instance.on('scroll', ScrollTrigger.update);
    const tick = time => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  const scrollTo = target => {
    const el = typeof target === 'string' ? document.getElementById(target) : target;
    if (!el) return;
    if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: HEADER_OFFSET, duration: 1.4 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET, behavior: 'auto' });
  };

  return <ScrollContext.Provider value={{ lenis, scrollTo }}>{children}</ScrollContext.Provider>;
}

export const useSmoothScroll = () => useContext(ScrollContext);
