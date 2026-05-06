import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const includes = [
  "workflow mapping",
  "bottleneck identification",
  "inefficiency analysis",
  "system roadmap",
  "ROI estimation"
];

export default function Offer() {
  return (
    <section id="audit" className="section-padding bg-white border-y border-brand-border">
      <div className="max-container">
        <div className="bg-brand-bg border border-brand-border rounded-[2.5rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl shadow-black/5">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 grid-pattern opacity-40" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-primary-black">
                  Start with an Operational <span className="text-brand-blue">Intelligence Audit</span>
                </h2>
                <p className="text-xl md:text-2xl text-brand-gray leading-relaxed font-medium">
                  A structured 2-week analysis of your operations to identify inefficiencies, quantify impact, and define a clear path to improvement.
                </p>
              </div>
              
              <a 
                href="#discovery" 
                className="inline-block bg-primary-black text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-brand-blue hover:shadow-xl hover:shadow-brand-blue/20"
              >
                Request Audit
              </a>
            </div>

            <div className="bg-white border border-brand-border rounded-3xl p-8 md:p-12 space-y-10 shadow-xl shadow-brand-blue/5">
              <div className="space-y-2">
                <h3 className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-brand-blue">Includes</h3>
                <div className="h-[2px] w-12 bg-brand-blue/20" />
              </div>
              <ul className="space-y-6">
                {includes.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 text-xl font-bold text-primary-black"
                  >
                    <CheckCircle2 className="text-brand-blue w-6 h-6 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
