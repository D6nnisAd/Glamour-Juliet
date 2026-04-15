import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[#02140d]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 via-transparent to-brand-gold/10 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative group">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] group-hover:bg-brand-gold/20 transition-all duration-700" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-8">
                <Sparkles size={16} />
                <span>Join Over 10,000+ Creators</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.2] tracking-tight">
                Ready to Unlock Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-gold">Global Potential?</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Elevate your personal brand, connect with international peers across continents, and start monetizing your unique lifestyle today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
              <button className="group relative px-8 py-4 bg-white text-brand-dark rounded-full font-black text-lg shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Subtle bottom border highlight */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
        </div>
      </div>
    </section>
  );
}
