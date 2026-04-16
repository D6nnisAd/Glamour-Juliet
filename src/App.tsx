import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Packages } from './components/Packages';
import { Faqs } from './components/Faqs';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { FloatingButton } from './components/FloatingButton';

function App() {
  return (
    <div className="w-full min-h-screen font-sans bg-brand-dark overflow-x-hidden">
      <Navbar />
      <FloatingButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Packages />
      <Faqs />
      <CTA />
    </>
  );
}

export default App;

