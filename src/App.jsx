import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Colors from './components/Colors.jsx';
import Products from './components/Products.jsx';
import Factory from './components/Factory.jsx';
import Uses from './components/Uses.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Colors />
        <Products />
        <Factory />
        <Uses />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
