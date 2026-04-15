import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05070a] pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <img src="/assets/logo.svg" alt="Glamour" className="h-10 w-fit" />
            <p className="text-gray-400 text-base leading-relaxed pr-4">
              Connecting African creators with global opportunities through premium lifestyle exchange and international collaboration.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-bold text-xl tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Features', 'Packages', 'Faqs'].map((link) => (
                <a key={link} href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-bold text-xl tracking-wide">Get in Touch</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold mt-1 shrink-0" size={20} />
                <span className="text-gray-400 leading-relaxed">
                  Headquarters: Lagos, Nigera
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <span className="text-gray-400">+234 (0) 800 GLAMOUR</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-brand-gold shrink-0" size={20} />
                <span className="text-gray-400">support@glamourweb.com.ng</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Legal Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-bold text-xl tracking-wide">Newsletter</h4>
            <p className="text-gray-400 leading-relaxed">
              Stay updated with the latest trends and global opportunities.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-gold/50 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-gold text-brand-dark px-6 rounded-full font-bold text-sm hover:brightness-110 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm font-medium">
          <p>© {currentYear} Glamour. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
