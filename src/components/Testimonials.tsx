import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "ARVY didn't come in and sell us software. They came in, watched how we actually worked for two weeks, and then told us exactly what was broken — and why. The audit alone paid for itself.",
    name: 'Marcus T.',
    role: 'COO',
    company: 'Regional Logistics Group',
    initials: 'MT',
    color: 'bg-brand-blue',
  },
  {
    quote: "Every agency we'd worked with before started with tools. ARVY started with questions. By week two of the audit, they'd identified $180k in annualised revenue leakage we didn't know existed.",
    name: 'Priya S.',
    role: 'Founder & CEO',
    company: 'Growth-Stage E-Commerce',
    initials: 'PS',
    color: 'bg-emerald-700',
  },
  {
    quote: "The retainer isn't a support contract — it's a thinking partner. When our ops started breaking under growth, ARVY had already anticipated it and had a system design ready.",
    name: 'James O.',
    role: 'Head of Operations',
    company: 'Professional Services Firm',
    initials: 'JO',
    color: 'bg-slate-700',
  },
  {
    quote: "Three months after implementation our dispatcher headcount is the same but throughput doubled. The ROI conversation with the board was the easiest one I've had in five years.",
    name: 'Amara L.',
    role: 'Managing Director',
    company: 'Fleet & Supply Chain Co.',
    initials: 'AL',
    color: 'bg-teal-700',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex(i => (i + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const t = testimonials[index];

  return (
    <section className="section-padding bg-brand-bg overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-container relative z-10">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-blue"
          >
            <div className="h-[1.5px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">Client Perspective</span>
          </motion.div>

          <div className="max-w-4xl mx-auto w-full">
            <div className="relative min-h-[340px] flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-10"
                >
                  <Quote size={40} className="text-brand-blue/20" strokeWidth={1.5} />

                  <p className="text-2xl md:text-4xl font-medium font-serif text-primary-black leading-tight tracking-tight italic">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                      <span className="text-white text-xs font-bold tracking-wider">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary-black text-sm">{t.name}</p>
                      <p className="text-[11px] font-mono text-brand-gray tracking-widest uppercase">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-brand-border">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    className={`h-[3px] rounded-full transition-all duration-500 ${
                      i === index ? 'w-8 bg-brand-blue' : 'w-3 bg-brand-border hover:bg-brand-gray/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => go(-1)}
                  className="p-3 border border-brand-border rounded-full hover:border-brand-blue hover:text-brand-blue text-brand-gray transition-all hover:shadow-md"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => go(1)}
                  className="p-3 border border-brand-border rounded-full hover:border-brand-blue hover:text-brand-blue text-brand-gray transition-all hover:shadow-md"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
