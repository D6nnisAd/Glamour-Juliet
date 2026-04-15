export function Hero() {
  return (
    <div id="home" className="min-h-screen relative w-full bg-[url('/assets/mobile-background.jpg')] md:bg-[url('/assets/desktop-background.jpg')] bg-cover bg-center bg-no-repeat">
      
      {/* Content wrapper: normal flex flow on mobile, absolute separated blocks on desktop */}
      <div className="w-full h-full min-h-screen flex flex-col justify-start items-center pt-[140px] md:p-0 md:block">
        
        {/* Left Content (Center Content on Mobile) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-0 md:absolute md:left-12 lg:left-20 md:top-[15%] lg:top-[20%] z-10 w-full md:w-auto">
          <img 
            src="/assets/glamour-logo-hero.svg" 
            alt="Glamour" 
            className="w-[85%] md:w-[75%] max-w-[350px] md:max-w-[280px] lg:max-w-[320px] mb-4 object-contain" 
          />
          <p className="text-[16px] text-gray-200 font-light tracking-wide md:pl-2">
            Where Creativity Meets Luxury
          </p>
        </div>

        {/* Right Buttons (Stacked horizontally on both Desktop and Mobile) */}
        <div className="flex flex-row justify-center items-center space-x-4 md:space-x-6 mt-8 md:mt-0 px-6 w-full md:w-auto md:px-0 md:absolute md:right-12 lg:right-20 md:bottom-[20%] z-10">
          <button className="bg-white text-brand-dark px-6 md:px-10 py-3 rounded-full font-semibold shadow-[0_0_35px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white px-6 md:px-10 py-3 rounded-full font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
            Learn-more
          </button>
        </div>

      </div>

    </div>
  );
}
