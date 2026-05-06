import { motion } from 'motion/react';

const steps = [
  { title: "Diagnose", desc: "Map workflows, handoffs, tools, and decision points across your real operations." },
  { title: "Identify", desc: "Surface inefficiencies, bottlenecks, and revenue leakage — quantified wherever possible." },
  { title: "Design", desc: "Create system-level solutions aligned to your actual workflows, not generic templates." },
  { title: "Implement", desc: "Build and integrate with clear milestones, team protocols, and defined outcomes." },
  { title: "Optimize", desc: "Continuously refine as the business grows — systems ahead of complexity." },
];

export default function Approach() {
  return (
    <section id="how-we-work" className="section-padding bg-primary-black relative overflow-hidden">
      {/* Subtle brand background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent -z-10" />
      
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-blue"
          >
            <div className="h-[1.5px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">02 — Our Approach</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white font-serif leading-tight">
              Intelligence applied <span className="italic text-brand-blue">within</span> your operations — not layered on top.
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-relaxed font-light">
                Every engagement starts with diagnosis. We map how your business actually functions before recommending anything. We quantify the cost of inefficiency before proposing a fix.
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                We don't move to implementation until we've agreed on what success looks like — in numbers, not approximations.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-white/10" />
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-0 rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02]">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col items-start p-10 border-r border-white/10 last:border-r-0 relative overflow-hidden active:bg-white/[0.04] transition-colors"
                >
                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="text-[10px] font-mono font-medium text-brand-blue tracking-widest uppercase mb-8">
                    Step 0{i + 1}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-medium tracking-tight text-white font-serif">{step.title}</h3>
                    <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors font-light leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
