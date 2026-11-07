import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './motion.js';

// Plays a muted video only while it is on screen; never autoplays for reduced-motion users.
export function useInViewVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return ref;
}
