import { 
  TrendingUp, 
  Users, 
  Award, 
  Zap, 
  Globe, 
  Clock, 
  MessageSquare, 
  Code, 
  Languages, 
  Briefcase 
} from 'lucide-react';

const earnings = [
  { label: "Glam Link Bonus", amount: "₦12,000 (€6)", icon: HighVoltage, type: "primary" },
  { label: "1st Indirect Commission", amount: "Bonus ₦400", icon: Users, type: "secondary" },
  { label: "2nd Indirect Commission", amount: "Bonus ₦100", icon: Users, type: "secondary" },
  { label: "Glam Reward", amount: "₦10,000 (€5)", icon: Award, type: "primary" },
  { label: "GlamLifestyle", amount: "€2 / hour", icon: Globe, type: "hourly" },
  { label: "GlamRealtime", amount: "€2 / hour", icon: Clock, type: "hourly" },
  { label: "GlamFaceTime", amount: "€2 / hour", icon: MessageSquare, type: "hourly" },
  { label: "GlamDarkMode", amount: "€2 / hour", icon: Zap, type: "hourly" },
  { label: "GlamScript2Cash", amount: "€2 / script", icon: Code, type: "hourly" },
  { label: "GlamLingua", amount: "€2 / hour", icon: Languages, type: "hourly" },
  { label: "GlamWorks", amount: "€2 / hour", icon: Briefcase, type: "hourly" },
];

export function Packages() {
  return (
    <section id="packages" className="relative w-full min-h-screen bg-[#02140d] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-4">Investment & Rewards</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Glam Earning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-gold">Structure</span>
            </h3>
            
            {/* Glam Fee Card */}
            <div className="inline-flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-md mb-8">
              <span className="text-emerald-400 font-medium mb-1">Entry Investment</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-white">₦14,000</span>
                <span className="text-xl text-emerald-300 font-semibold">(€7)</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-xs">
                Unlock the full potential of Glamour with a one-time activation fee.
              </p>
            </div>
            
            <div>
              <button className="group relative flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Choose Package</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <TrendingUp className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Featured Summary Box */}
          <div className="w-full lg:w-96 p-8 rounded-[2rem] bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_30px_60px_rgba(4,120,87,0.3)] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <h4 className="text-white/80 font-bold text-lg uppercase tracking-wider mb-2">Potential Hourly Income</h4>
            <div className="text-5xl font-black text-white mb-6">€12 / <span className="text-2xl opacity-80">hr</span></div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/90 font-medium">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                Direct Referral Bonuses
              </div>
              <div className="flex items-center gap-3 text-white/90 font-medium">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                Passive Associate Shares
              </div>
              <div className="flex items-center gap-3 text-white/90 font-medium">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                Activity-Based Rewards
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {earnings.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                   <item.icon size={20} />
                </div>
                <h5 className="text-gray-300 font-bold text-sm tracking-wide uppercase">{item.label}</h5>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  {item.amount.split(' ')[0]}
                </span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-tighter">
                  {item.amount.split(' ').slice(1).join(' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom Icon for 'Flash' style items
function HighVoltage(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M6 14 10 3v9h4l-4 11v-9H6z" />
    </svg>
  );
}
