import { motion } from 'motion/react';

const problems = [
  "Dispatchers making manual decisions without real-time visibility",
  "Coordination over WhatsApp with no structured audit trail",
  "No central visibility across fleet, vendors, or performance",
  "Revenue leaking through delays and avoidable rework",
  "AI tools adopted, subscriptions paid — no measurable outcome"
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-white border-y border-brand-border relative overflow-hidden">
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-blue"
          >
            <div className="h-[1.5px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">01 — The Problem</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-primary-black font-serif leading-tight">
                Most companies are adding AI on top of operations never <span className="italic text-brand-blue">designed to scale.</span>
              </h2>
              <div className="h-[2px] w-12 bg-brand-blue" />
              <p className="text-xl text-primary-black/80 leading-relaxed max-w-md font-light">
                The tools aren’t the problem. The operations underneath them are. When intelligence is layered on top of a broken system, it amplifies the chaos — it doesn’t fix it.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-brand-bg rounded-2xl border border-brand-border overflow-hidden shadow-sm">
                <ul className="divide-y divide-brand-border">
                  {problems.map((problem, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex gap-6 p-6 hover:bg-white transition-colors duration-300"
                    >
                      <span className="text-brand-gray font-mono text-[10px] mt-1 shrink-0">{(i + 1).toString().padStart(2, '0')}</span>
                      <span className="text-sm font-medium text-brand-gray group-hover:text-primary-black transition-colors leading-relaxed">
                        {problem}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 space-y-4">
                <p className="text-2xl text-brand-gray font-light font-serif italic">Most businesses are working harder.</p>
                <p className="text-[10px] font-black text-primary-black tracking-[0.4em] uppercase">Not operating better.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
