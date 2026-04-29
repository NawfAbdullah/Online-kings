import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ_DATA = [
  {
    question: "What's your minimum order quantity?",
    answer: "We work with clients from 50 to 500,000 units. We're equally focused on quality at every volume — no job is too boutique or too large."
  },
  {
    question: "Can you match our brand's Pantone colours exactly?",
    answer: "Yes. We offer full Pantone matching, CMYK, and RGB colour management to ensure consistency across all your print materials."
  },
  {
    question: "How do you handle rush orders?",
    answer: "We offer 24–48 hour turnaround on most products. Contact us with your deadline and we'll build a plan around it — no panicked guesswork."
  },
  {
    question: "Do you work as a white-label partner for agencies?",
    answer: "Yes, and we're very good at it. We operate entirely behind the scenes — no PrintCraft branding on packaging, delivery, or communication."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
            <span>❓</span>
            Questions & Answers
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Get quick answers to the most common questions we receive from our clients.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors duration-200 text-left"
              >
                <span className="font-heading text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-green-600 flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === idx ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {activeIndex === idx && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
