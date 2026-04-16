import { useState, useEffect } from 'react';

export const TELEGRAM_URL = "https://t.me/+2348126865989?text=" + encodeURIComponent("Hello Glamour Admin, I am ready to begin and acquire access to start my journey on Glamour.");

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled past 80% of window height (roughly hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-fade-in-up">
      <button 
        onClick={() => window.open(TELEGRAM_URL, '_blank')}
        className="w-full relative overflow-hidden bg-white/20 backdrop-blur-xl border border-white/40 text-white py-4 rounded-2xl font-black text-lg shadow-[0_8px_32px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-white/10 opacity-50" />
        <span className="relative z-10 drop-shadow-md">Get Started</span>
      </button>
    </div>
  );
}
