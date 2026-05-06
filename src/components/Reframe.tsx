import { motion } from 'motion/react';

export default function Reframe() {
  return (
    <section className="section-padding bg-brand-bg">
      <div className="max-container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary-black leading-[1.1]"
          >
            The problem isn’t AI. <br />
            <span className="text-brand-gray">It’s how your business operates.</span>
          </motion.h2>

          <div className="space-y-10 text-xl md:text-2xl text-brand-gray leading-relaxed max-w-2xl mx-auto font-medium">
            <p>
              Most companies try to improve by adding tools. 
              AI platforms, dashboards, automations.
            </p>
            <p>
              But without fixing workflows, 
              these tools don’t create real impact.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <div className="inline-block px-10 py-8 border-2 border-brand-blue/10 bg-white rounded-3xl shadow-2xl shadow-brand-blue/5">
              <p className="text-2xl md:text-4xl font-extrabold text-primary-black tracking-tight">
                A tool without a system is <span className="text-brand-blue">just another subscription.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
