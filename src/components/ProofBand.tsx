import { motion } from 'motion/react';

export default function ProofBand() {
  return (
    <div className="bg-brand-bg border-y border-brand-border py-16 px-6 lg:px-0">
      <div className="max-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-4xl font-normal font-serif italic text-primary-black leading-snug border-l-4 border-brand-blue pl-8">
              "If we can't define what success looks like before we start — we don't start."
            </p>
            <p className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-gray/60 pl-8">
              — ARVY Founding Principle
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[400px]"
          >
            <div className="p-6 bg-white border border-brand-border rounded-xl shadow-sm space-y-1">
              <p className="text-3xl font-medium tracking-tight text-brand-blue font-serif">Business-first</p>
              <p className="text-[10px] font-mono font-medium text-brand-gray/60 uppercase tracking-widest">Diagnosis before prescription</p>
            </div>
            <div className="p-6 bg-white border border-brand-border rounded-xl shadow-sm space-y-1">
              <p className="text-3xl font-medium tracking-tight text-brand-blue font-serif">15 Mins</p>
              <p className="text-[10px] font-mono font-medium text-brand-gray/60 uppercase tracking-widest">To start the conversation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
