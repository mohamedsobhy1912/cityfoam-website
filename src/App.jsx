import { useEffect, useState } from 'react';
import Intro from './components/Intro.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Manufacturing from './components/Manufacturing.jsx';
import Quality from './components/Quality.jsx';
import Applications from './components/Applications.jsx';
import WhyUs from './components/WhyUs.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useLang } from './lib/i18n.jsx';
import { ScrollTrigger, prefersReducedMotion } from './lib/motion.js';

export default function App() {
  const { lang } = useLang();
  const [ready, setReady] = useState(false);
  const [introGone, setIntroGone] = useState(false);

  // Reveal any [data-reveal] element as it enters the viewport (CSS handles the motion).
  // IntersectionObserver keeps this independent from ScrollTrigger's refresh cycle.
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-reveal]:not(.is-in)'));
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      entries => {
        const entering = entries.filter(e => e.isIntersecting);
        entering.forEach((e, i) => {
          e.target.style.transitionDelay = `${i * 80}ms`;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  // Layout shifts (fonts, language, intro) change pin positions: recalculate.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    const t = setTimeout(refresh, 400);
    return () => clearTimeout(t);
  }, [lang, introGone]);

  return (
    <>
      {!introGone && <Intro onReveal={() => setReady(true)} onFinish={() => setIntroGone(true)} />}
      <Header />
      <main id="main">
        <Hero ready={ready} />
        <About />
        <Products />
        <Manufacturing />
        <Quality />
        <Applications />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
