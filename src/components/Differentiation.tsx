import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const comparison = [
  { feature: 'Approach', others: 'sell tools', arvy: 'diagnose first' },
  { feature: 'Focus', others: 'automate tasks', arvy: 'build systems' },
  { feature: 'Solutions', others: 'generic solutions', arvy: 'tailored to operations' },
  { feature: 'Results', others: 'unclear results', arvy: 'measurable outcomes' },
];

export default function Differentiation() {
  return (
    <section id="differentiation" className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="max-container relative z-10">
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-blue"
          >
            <div className="h-[1.5px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">03 — Positioning</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-primary-black font-serif leading-tight">
              Not an agency. <br /> Not a vendor. <br /> <span className="italic text-brand-blue">A firm.</span>
            </h2>
            <p className="text-xl text-primary-black/80 leading-relaxed font-light max-w-md">
              The market is saturated with tool resellers. ARVY occupies a different category — operational intelligence consulting, built on diagnosis before prescription.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-bg/50">
                    <th className="px-10 py-6 text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-gray border-r border-brand-border">Focus Area</th>
                    <th className="px-10 py-6 text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-gray border-r border-brand-border">Traditional Agencies</th>
                    <th className="px-10 py-6 text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-blue">ARVY Intelligence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {comparison.map((item, i) => (
                    <tr key={i} className="hover:bg-brand-bg/20 transition-colors group">
                      <td className="px-10 py-8 border-r border-brand-border">
                        <span className="text-lg font-medium text-primary-black font-serif">{item.feature}</span>
                      </td>
                      <td className="px-10 py-8 text-sm text-brand-gray border-r border-brand-border font-light">
                        <div className="flex items-center gap-4">
                          <X className="w-3 h-3 text-red-400 shrink-0" strokeWidth={3} />
                          <span>{item.others}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-lg font-medium text-primary-black bg-brand-blue/[0.02]">
                        <div className="flex items-center gap-4">
                          <Check className="w-4 h-4 text-brand-blue shrink-0" strokeWidth={3} />
                          <span className="tracking-tight">{item.arvy}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
