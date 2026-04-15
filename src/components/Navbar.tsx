import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Features', href: '/#features' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Faqs', href: '/#faqs' },
  ];

  return (
    <>
      <nav 
        className={`w-full fixed top-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-20 py-6 md:py-8 flex items-center justify-between ${
          isScrolled 
            ? 'glassmorphism border-b border-white/10 py-4 md:py-5' 
            : 'bg-transparent'
        }`}
      >
        {/* Left: Conditionally Visible Logo */}
        <Link to="/" className={`flex-shrink-0 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <img src="/assets/logo.svg" alt="Glamour" className="h-8 md:h-[50px]" />
        </Link>

        {/* Center: Navigation Links (Desktop Only) */}
        <div className="hidden md:flex space-x-10 text-[#d1d5db] text-[15px] font-medium tracking-wide">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Signup Button & Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-brand-dark px-8 py-[10px] rounded-full font-semibold shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_35px_rgba(255,255,255,0.9)] transition-shadow">
            Signup
          </button>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-xl flex flex-col pt-20 px-6 animate-in fade-in duration-300">
          <button 
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col space-y-8 mt-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-semibold text-white tracking-wider hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto mb-12">
            <button className="w-full bg-white text-brand-dark py-4 rounded-full font-bold shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg">
              Signup Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
