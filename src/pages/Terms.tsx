import { useEffect } from 'react';
import { ShieldCheck, FileText, Scale } from 'lucide-react';

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24 px-6 md:px-12 lg:px-20 text-gray-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
            <Scale size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Terms of <span className="text-brand-gold">Service</span></h1>
        </div>
        
        <p className="text-lg mb-12 italic text-gray-400">Last updated: April 15, 2026</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black">01</span>
              Agreement to Terms
            </h2>
            <p className="leading-relaxed text-lg">
              By accessing or using the Glamour platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use our services. These terms constitute a legally binding agreement between you and Glamour regarding your use of the site and its associated rewards systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black">02</span>
              User Eligibility & Registration
            </h2>
            <p className="leading-relaxed text-lg mb-4">
              You must be at least 18 years of age to create an account on Glamour. By registering, you represent and warrant that all information provided is accurate and that you will maintain the security of your account credentials at all times.
            </p>
            <p className="leading-relaxed text-lg font-medium text-emerald-400">
              Note: Account activation requires a one-time activation fee as specified on the platform. This fee is non-refundable once the premium features have been accessed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black">03</span>
              Content Rights & Licensing
            </h2>
            <p className="leading-relaxed text-lg font-bold text-white mb-4">You own your content.</p>
            <p className="leading-relaxed text-lg">
              However, by posting content on Glamour, you grant us a non-exclusive, worldwide, royalty-free license to use, host, store, reproduce, and display that content for the purpose of operating, promoting, and improving our services. This includes showcasing your creative lifestyle to our international community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black">04</span>
              Rewards & Earning Structure
            </h2>
            <p className="leading-relaxed text-lg mb-4">
              Earnings on Glamour are based on activity, engagement, and cross-continental collaboration. The earning structure is subject to change at our discretion, though current rates are always visible in the platform dashboard.
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Gains are calculated based on platform participation (e.g., teaching languages, sharing daily scripts).</li>
              <li>Withdrawal of earnings is subject to verification and platform-specific minimum thresholds.</li>
              <li>Attempts to manipulate engagement or create duplicate accounts will result in immediate termination of rewards and account suspension.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black">05</span>
              Prohibited Conduct
            </h2>
            <p className="leading-relaxed text-lg mb-4">You agree not to:</p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Use the platform for any illegal purpose or in violation of regional laws.</li>
              <li>Upload content that is harmful, offensive, or violates third-party intellectual property.</li>
              <li>Impersonate others or engage in fraudulent activity to manipulate the rewards system.</li>
              <li>Use automated bots or scripts to generate engagement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black">06</span>
              Limitation of Liability
            </h2>
            <p className="leading-relaxed text-lg">
              Glamour shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the platform. We do not guarantee specific income levels as earnings are entirely dependent on individual activity and market demand.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
