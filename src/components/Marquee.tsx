import { motion } from 'motion/react';

const items = [
  'Operational Intelligence',
  'Applied Intelligence',
  'System-Level Thinking',
  'Measurable Outcomes',
  'Business-First Approach',
  'Logistics Operations',
  'Revenue Growth',
  'Operational Clarity'
];

export default function Marquee() {
  return (
    <div className="bg-primary-black py-4 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 pr-12"
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-brand-gray/40 text-[10px] font-mono tracking-[0.2em] uppercase">
              <div className="w-1 h-1 rounded-full bg-brand-blue" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
