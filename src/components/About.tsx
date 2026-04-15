export function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-brand-dark py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -mr-64 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] -ml-64 -mb-32" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col text-white">
          <div className="flex items-center space-x-2 mb-6">
             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                 <img src="/assets/logo.svg" alt="G" className="w-4 h-4 invert" />
             </div>
             <span className="text-2xl font-bold tracking-tight">Glamour</span>
             <span className="text-gray-400 ml-auto hidden md:block">#GlamLifeSoftLife</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            What is <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Glamour?
            </span>
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            <p>
              Glamour is a European institution that partners with Africans to showcase your lifestyle, 
              creativity, daily habits and get paid for it.
            </p>
            <p>
              It's where your everyday lifestyle becomes your Income...From your outfits. 
              To your daily routines...To your cuisine and interests.
            </p>
            <p>
              Glamour turns your life into content that pays you in Euros and Pounds.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <p className="text-white font-semibold flex items-center">
               Built for people who want to:
            </p>
            <ul className="space-y-3">
               {[
                 'Earn from their lifestyle',
                 'Showcase African culture to the world',
                 'Build influence online',
                 'Monetize creativity effortlessly'
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center space-x-3 text-gray-400">
                   <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
          </div>

          <div className="mt-12 flex items-center group cursor-pointer">
            <div className="relative flex items-center justify-center w-12 h-12">
               <div className="absolute inset-0 bg-[#00ffa2]/20 rounded-full animate-ping group-hover:bg-[#00ffa2]/40" />
               <div className="w-4 h-4 rounded-full bg-[#00ffa2]" />
            </div>
            <span className="ml-4 text-xl font-medium tracking-wide group-hover:text-[#00ffa2] transition-colors">
              Join the Movement.
            </span>
          </div>
        </div>

        {/* Right Side: Image Placeholder/Mockup feel */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(246,162,43,0.15)] transform md:hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="/assets/about.jpg" 
              alt="Glamour Lifestyle" 
              className="w-full h-auto object-cover"
            />
            {/* Overlay Gradient to match the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative gold ring behind image */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-brand-gold/20 rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
        </div>

      </div>
    </section>
  );
}
