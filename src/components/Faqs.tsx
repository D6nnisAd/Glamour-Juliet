import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What exactly is Glamour?",
    answer: "Glamour is a premium lifestyle platform designed to bridge the cultural and creative gap between African creators and European audiences. It allows individuals to showcase their unique culture, fashion, and daily routines to an international audience while unlocking premium global opportunities."
  },
  {
    question: "How do I start sharing my lifestyle content?",
    answer: "Once you activate your account, you can begin uploading photos and videos under categories like Glam Lifestyle, Glam Cuisine, or Glam Realtime. Our platform then connects your content with international peers who are interested in cross-continental lifestyle exchanges."
  },
  {
    question: "Is the platform available in my country?",
    answer: "Yes, Glamour is built for global connectivity. While our primary focus is connecting African creators with European counterparts, the platform is accessible to anyone with a passion for global lifestyle exchange and digital creativity."
  },
  {
    question: "What are the benefits of the premium activation?",
    answer: "Premium activation unlocks full access to all Glamour categories, including mentor connections, remote job listings, and the ability to participate in high-value cultural exchange activities that offer rewards for your engagement."
  },
  {
    question: "How do the 'Rewards' and 'Gains' work?",
    answer: "As you interact with the platform—sharing scripts, teaching local languages, or partnering on tasks across time zones—you earn rewards based on your activity levels and the engagement your content generates from our international community."
  }
];

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-brand-dark overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-bold mb-6">
            <HelpCircle size={16} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Everything you need to know about starting your global lifestyle journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <button 
                className="w-full text-left p-6 md:p-8 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-gold shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-500 shrink-0" size={24} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
