import { motion } from 'motion/react';
import { Target, MessageSquare, Zap, TrendingUp, Layers } from 'lucide-react';

const outcomes = [
  { icon: Target, title: "operational visibility" },
  { icon: MessageSquare, title: "communication clarity" },
  { icon: Zap, title: "workflow efficiency" },
  { icon: TrendingUp, title: "faster decision-making" },
  { icon: Layers, title: "scalable systems" },
];

export default function WhatWeDo() {
  return (
    <section id="how-we-work" className="section-padding bg-white border-b border-brand-border">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary-black">
              We redesign how your business operates
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed font-medium">
              We study workflows, decision-making, and communication patterns to understand how your business actually runs.
            </p>
          </div>

          <div className="grid gap-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-brand-blue mb-4">Core Outcomes</p>
            {outcomes.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-6 p-8 rounded-2xl border border-brand-border bg-brand-bg hover:bg-white hover:shadow-xl hover:shadow-brand-blue/5 transition-all cursor-default"
              >
                <div className="p-4 bg-white shadow-sm border border-brand-border rounded-xl group-hover:text-brand-blue transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="text-2xl font-bold text-primary-black group-hover:translate-x-1 transition-transform tracking-tight">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
