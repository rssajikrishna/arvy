import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { value: 40, suffix: '%', label: 'Average capacity recovered', sub: 'from manual task elimination' },
  { value: 2,  suffix: 'wk', label: 'Audit turnaround', sub: 'from kickoff to full report' },
  { value: 3,  suffix: 'x', label: 'Faster decision cycles', sub: 'after system implementation' },
  { value: 0,  suffix: ' tools', label: 'Sold before diagnosis', sub: 'we prescribe nothing upfront' },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-primary-black border-y border-white/10 py-20 lg:py-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-blue/5 -z-10" />

      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <div className="flex items-center justify-center gap-3 text-brand-blue">
            <div className="h-[1px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">By The Numbers</span>
            <div className="h-[1px] w-8 bg-brand-blue" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium font-serif text-white tracking-tight">
            Results that <span className="italic text-brand-blue">speak first.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-primary-black hover:bg-white/[0.03] transition-colors duration-500 p-10 flex flex-col gap-4 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <p className="text-5xl md:text-6xl font-medium font-serif text-white tracking-tight leading-none">
                <Counter target={s.value} suffix={s.suffix} active={inView} />
              </p>
              <div className="space-y-1">
                <p className="text-sm font-medium text-white/80">{s.label}</p>
                <p className="text-[11px] font-mono text-white/30 tracking-wider">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
