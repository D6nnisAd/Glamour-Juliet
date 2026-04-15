import { 
  Sparkles, 
  MapPin, 
  Utensils, 
  Video, 
  Moon, 
  Languages, 
  Clapperboard, 
  Briefcase, 
  Smile, 
  Mic, 
  Activity 
} from 'lucide-react';

export function Features() {
  const features = [
    { 
      title: "GLAM LIFESTYLE", 
      desc: "Turn your daily routines into global content. Showcase your outfits and creativity to connect with international creators and unlock premium opportunities.", 
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "GLAM REALTIME", 
      desc: "Take pictures of the places you went to, your favourite spots in your town... share your local culture with an international audience and build cross-continental connections.", 
      icon: MapPin,
      color: "from-blue-400 to-cyan-400"
    },
    { 
      title: "GLAM CUISINE", 
      desc: "Your Food is Global Content... showcase your indigenous foods, teach recipes to your European counterparts and expand your culinary influence globally.", 
      icon: Utensils,
      color: "from-orange-400 to-red-500"
    },
    { 
      title: "GLAM FACETIME", 
      desc: "Chat with your European counterpart, help them with lifestyle advice, or mentor/connect with European peers to exchange valuable cultural and lifestyle insights.", 
      icon: Video,
      color: "from-indigo-400 to-purple-500"
    },
    { 
      title: "GLAM DARKMODE", 
      desc: "African and European time difference is your advantage! Partner with foreigners in doing tasks or chatting to collaborate globally across time zones seamlessly.", 
      icon: Moon,
      color: "from-slate-300 to-gray-500"
    },
    { 
      title: "GLAM LINGUA", 
      desc: "Can you speak your Local Language?? Teach it to Europeans and expand your linguistic reach and connect internationally using our Lingua AI Assistant.", 
      icon: Languages,
      color: "from-green-400 to-emerald-500"
    },
    { 
      title: "GLAM SCRIPT2VALUE", 
      desc: "Take daily scripts, turn them into videos or short reels, post on social media and grow your profile's influence instantly.", 
      icon: Clapperboard,
      color: "from-yellow-400 to-amber-500"
    },
    { 
      title: "GLAM WORKS", 
      desc: "Real remote job opportunities. List your skill and connect with European firms that need your services by accessing premium global opportunities.", 
      icon: Briefcase,
      color: "from-teal-400 to-cyan-500"
    },
    { 
      title: "GLAM STATUS", 
      desc: "Post how you feel or funny memes. European counterparts view your status and you unlock milestones for every single view.", 
      icon: Smile,
      color: "from-fuchsia-400 to-pink-500"
    },
    { 
      title: "GLAM VOICEVAULT", 
      desc: "Share your thoughts or fun stories about style and trends. The more people hear you, the more your influence grows. Your Voice = Your Fame.", 
      icon: Mic,
      color: "from-rose-400 to-red-500"
    },
    { 
      title: "GLAM FITNESS", 
      desc: "Stay fit and Gorgeous. Track your daily walking or running with Glamour and unlock active rewards for maintaining a healthy lifestyle.", 
      icon: Activity,
      color: "from-lime-400 to-green-500"
    },
  ];

  return (
    <section id="features" className="relative w-full min-h-screen bg-[#07090E] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Dynamic Art Lighting / Ambient Gradients */}
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[35vw] h-[35vw] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
             Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Glamour Layout</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Elevate your personal brand, connect across continents, and unlock your lifestyle value today.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Subtle Hover Glow behind the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Wrapper */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} bg-opacity-20 relative z-10`}>
                  <div className="absolute inset-0 bg-black/60 rounded-2xl" />
                  <Icon className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h4 className="text-xl font-bold text-white mb-4 relative z-10 tracking-wide">
                  {feature.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed relative z-10 text-[15px]">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
