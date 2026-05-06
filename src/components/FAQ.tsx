import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'What does the 2-week audit actually involve?',
    a: 'We conduct structured interviews with key team members, observe live workflows, map every handoff and decision point, and review your existing tools and data. You receive a written findings report, quantified cost-of-inefficiency estimate, and a prioritised system design roadmap — not a deck of recommendations without a plan.',
  },
  {
    q: 'Do I need to buy software or tools to work with ARVY?',
    a: "No. We diagnose before we prescribe. If new tools are warranted, we'll specify exactly what and why — with total cost of ownership factored in. We have no vendor relationships and receive no referral fees.",
  },
  {
    q: 'What size of business is ARVY built for?',
    a: 'We work best with businesses between 15 and 250 people who are scaling faster than their operations can support. The pain is always the same: growth has outpaced process. Industry is less important than complexity.',
  },
  {
    q: 'How long does a full Systems Implementation take?',
    a: "Typically 6 to 12 weeks, depending on scope and your team's availability. Milestones and outcomes are agreed before we begin. The final 2 weeks are always a live stabilisation period where we work alongside your team before handoff.",
  },
  {
    q: "What's included in the Intelligence Retainer?",
    a: 'Monthly performance reviews against baseline metrics, system refinement and iteration, priority access for new operational challenges, and a quarterly mini-audit. Think of it as a fractional COO focused entirely on systems performance.',
  },
  {
    q: 'Can we start with just the audit and decide later?',
    a: 'Yes — the audit is a standalone engagement that delivers standalone value. Many clients use it as a board-level briefing document. There is no obligation to proceed to implementation.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white border-t border-brand-border overflow-hidden">
      <div className="max-container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-brand-blue"
            >
              <div className="h-[1.5px] w-8 bg-brand-blue" />
              <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">FAQ</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium font-serif text-primary-black tracking-tight leading-tight">
              Common <br /><span className="italic text-brand-blue">questions.</span>
            </h2>
            <p className="text-base text-brand-gray font-light leading-relaxed">
              Still have something we haven't covered? Send it over.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline underline-offset-4"
            >
              Ask us directly →
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="divide-y divide-brand-border border-t border-brand-border">
            {faqs.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-8 text-left group"
                >
                  <span className={`text-lg font-medium font-serif tracking-tight leading-snug transition-colors ${
                    open === i ? 'text-brand-blue' : 'text-primary-black group-hover:text-brand-blue'
                  }`}>
                    {f.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 mt-1 p-1 rounded-full border transition-colors ${
                      open === i ? 'border-brand-blue text-brand-blue' : 'border-brand-border text-brand-gray'
                    }`}
                  >
                    <Plus size={14} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-base text-brand-gray font-light leading-relaxed max-w-xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
