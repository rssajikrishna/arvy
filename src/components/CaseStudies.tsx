import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    tag: 'Logistics & Fleet',
    title: 'Dispatching went from WhatsApp chaos to a live command dashboard.',
    problem: 'A 40-truck logistics operator was coordinating all dispatching via WhatsApp groups. No audit trail, constant miscommunication, and a 23% on-time delivery rate.',
    result: 'After a 2-week audit and 8-week implementation: a centralized dispatch console with live GPS, automated status updates, and SLA tracking.',
    metrics: [
      { icon: TrendingUp, value: '+31%', label: 'On-time delivery rate' },
      { icon: Clock,      value: '−18h', label: 'Weekly coordinator time saved' },
      { icon: DollarSign, value: '−22%', label: 'Rework and penalty costs' },
    ],
    duration: '10 weeks total',
    bg: 'from-brand-blue/5 to-transparent',
  },
  {
    tag: 'Professional Services',
    title: 'Revenue stopped leaking the week systems replaced spreadsheets.',
    problem: 'A 60-person professional services firm tracked project hours, billing, and client milestones across 14 disconnected spreadsheets. Invoices were delayed an average of 19 days.',
    result: 'Unified project intelligence layer connecting time-tracking, billing triggers, and client milestone visibility. Finance team went from reactive to predictive.',
    metrics: [
      { icon: DollarSign, value: '−19d', label: 'Invoice cycle time' },
      { icon: TrendingUp, value: '+28%', label: 'Recovered unbilled hours' },
      { icon: Clock,      value: '12h',  label: 'Hours saved per billing cycle' },
    ],
    duration: '6 weeks total',
    bg: 'from-slate-900/5 to-transparent',
  },
  {
    tag: 'E-Commerce Operations',
    title: 'Scaling from 200 to 2,000 orders/day without adding headcount.',
    problem: 'A fast-growing DTC brand hit a wall at 200 orders/day — fulfilment errors, manual vendor chasing, and a customer service backlog growing by 40% monthly.',
    result: 'End-to-end order orchestration system: automated vendor routing, real-time inventory sync, and a self-serve customer portal for order status.',
    metrics: [
      { icon: TrendingUp, value: '10×',  label: 'Order volume handled' },
      { icon: Clock,      value: '−74%', label: 'CS ticket volume' },
      { icon: DollarSign, value: '+41%', label: 'Gross margin on operations' },
    ],
    duration: '12 weeks total',
    bg: 'from-emerald-900/5 to-transparent',
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="work" className="section-padding bg-white border-y border-brand-border overflow-hidden">
      <div className="max-container">
        <div className="flex flex-col gap-16">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-brand-blue"
              >
                <div className="h-[1.5px] w-8 bg-brand-blue" />
                <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">Case Studies</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-primary-black font-serif leading-tight">
                The work <span className="italic text-brand-blue">speaks.</span>
              </h2>
            </div>
            <p className="text-xl text-brand-gray font-light leading-relaxed max-w-md">
              Every engagement starts with a diagnosis. These are the outcomes when we build on that foundation.
            </p>
          </div>

          {/* Tab selectors */}
          <div className="flex flex-wrap gap-3">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest transition-all duration-300 ${
                  active === i
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                    : 'bg-brand-bg border border-brand-border text-brand-gray hover:border-brand-blue/40 hover:text-primary-black'
                }`}
              >
                {c.tag}
              </button>
            ))}
          </div>

          {/* Case panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl border border-brand-border overflow-hidden bg-gradient-to-br ${c.bg} bg-brand-bg`}
            >
              <div className="grid lg:grid-cols-[1fr_320px]">
                <div className="p-10 lg:p-14 space-y-10 border-b lg:border-b-0 lg:border-r border-brand-border">
                  <div>
                    <span className="text-[9px] font-mono font-medium uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-medium font-serif text-primary-black leading-tight tracking-tight">
                    {c.title}
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-brand-gray font-medium">The Problem</p>
                      <p className="text-base text-primary-black/70 font-light leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-brand-blue font-medium">The Outcome</p>
                      <p className="text-base text-primary-black/80 font-light leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                    <span className="text-[10px] font-mono text-brand-gray/50 uppercase tracking-widest">Engagement: {c.duration}</span>
                    <Link
                      to="/book"
                      className="group flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all"
                    >
                      Start your audit
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Metrics sidebar */}
                <div className="p-10 flex flex-col justify-center gap-6 bg-primary-black/[0.02]">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-brand-gray font-medium">Measured Impact</p>
                  {c.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0">
                        <m.icon size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-3xl font-medium font-serif text-primary-black tracking-tight">{m.value}</p>
                        <p className="text-[11px] font-mono text-brand-gray tracking-wide">{m.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
