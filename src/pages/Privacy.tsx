import { useEffect } from 'react';
import { ShieldCheck, Eye, Lock, Database } from 'lucide-react';

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24 px-6 md:px-12 lg:px-20 text-gray-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <Lock size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Privacy <span className="text-emerald-400">Policy</span></h1>
        </div>
        
        <p className="text-lg mb-12 italic text-gray-400">Last updated: April 15, 2026</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black text-emerald-400">01</span>
              Introduction
            </h2>
            <p className="leading-relaxed text-lg">
              At Glamour, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our lifestyle platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black text-emerald-400">02</span>
              Information We Collect
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed text-lg">We collect several types of information to provide and improve our service:</p>
              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li><span className="text-white font-medium">Personal Information:</span> Name, email address, and payment details for processing rewards.</li>
                <li><span className="text-white font-medium">Content Information:</span> Photos, videos, and descriptions you upload to showcase your lifestyle.</li>
                <li><span className="text-white font-medium">Usage Data:</span> Details on how you interact with the platform, including IP addresses, browser types, and engagement metrics.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black text-emerald-400">03</span>
              How We Use Your Data
            </h2>
            <p className="leading-relaxed text-lg mb-4">Your data is primarily used to:</p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Facilitate cross-continental connections and mentor matching.</li>
              <li>Calculate and distribute earnings based on platform activity.</li>
              <li>Improve platform security and prevent fraudulent behavior.</li>
              <li>Send important service updates and promotional content (with your consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black text-emerald-400">04</span>
              Data Protection & Security
            </h2>
            <p className="leading-relaxed text-lg mb-6">
              We implement industry-standard security measures to ensure your data remains protected. This includes encrypted storage, secure payment gateways, and restricted access to personal information by our team.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <ShieldCheck className="text-emerald-400 shrink-0" size={24} />
              <p className="text-sm leading-relaxed">
                While we strive for absolute security, no method of transmission over the Internet is 100% secure. We continuously audit our systems to meet the highest global data protection standards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black text-emerald-400">05</span>
              Third-Party Sharing
            </h2>
            <p className="leading-relaxed text-lg">
              We do not sell your personal data. We only share information with third-party service providers (like payment processors and analytics firms) necessary to operate the platform. These partners are legally bound to protect your data according to our standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black text-emerald-400">06</span>
              Your Rights
            </h2>
            <p className="leading-relaxed text-lg mb-4">You have the right to:</p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Access and export your personal data.</li>
              <li>Correct any inaccuracies in your profile information.</li>
              <li>Request the deletion of your account and associated data.</li>
              <li>Opt-out of non-essential communication at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-black text-emerald-400">07</span>
              Contact Us
            </h2>
            <p className="leading-relaxed text-lg">
              For any questions regarding your data or this policy, please contact our privacy team at <span className="text-emerald-400">support@glamourweb.com.ng</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
