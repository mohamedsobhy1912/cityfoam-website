import { useEffect, useRef, useState } from 'react';
import SplitText from '../vendor/reactbits/SplitText.jsx';
import { prefersReducedMotion } from '../lib/motion.js';

// Mounts React Bits <SplitText trigger="load"> only once the line is on screen.
// This keeps SplitText from creating its own once-only ScrollTriggers, which can
// collide with ScrollTrigger.refresh() when many headings re-render at once
// (e.g. after switching language mid-page).
export default function RevealSplit({ text, className = '', ...props }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(false);
    const el = ref.current;
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text]);

  if (prefersReducedMotion()) {
    return <span className={`split-parent ${className}`}>{text}</span>;
  }
  return (
    <span ref={ref} className="reveal-split">
      {inView ? (
        <SplitText key={text} text={text} tag="span" className={className} trigger="load" {...props} />
      ) : (
        <span className={`split-parent ${className}`} style={{ visibility: 'hidden' }}>
          {text}
        </span>
      )}
    </span>
  );
}
