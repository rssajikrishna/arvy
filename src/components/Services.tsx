import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    step: 'Step 01 · Entry',
    name: 'Operational Intelligence Audit',
    desc: 'A structured 2-week diagnostic of how your business actually operates. Workflows mapped, inefficiencies identified, cost estimated, roadmap delivered.',
    features: [
      'Full workflow and handoff mapping',
      'Revenue leakage estimation',
      'Prioritized findings report',
      'System design roadmap'
    ],
    duration: '2 weeks',
    featured: false
  },
  {
    step: 'Step 02 · Core',
    name: 'Systems Implementation',
    desc: '6–12 weeks to design, build, and deploy operational systems identified in your audit — defined milestones, team training, outcomes measured from day one.',
    features: [
      'System architecture and design',
      'Build, integration, and testing',
      'Team protocols and documentation',
      '2-week live stabilization'
    ],
    duration: '6–12 weeks',
    featured: true
  },
  {
    step: 'Step 03 · Ongoing',
    name: 'Intelligence Retainer',
    desc: 'Monthly engagement for continuous optimization and advisory as complexity grows. A fractional COO focused entirely on systems performance.',
    features: [
      'Monthly performance reviews',
      'System refinement and iteration',
      'Priority access for new challenges',
      'Quarterly mini-audit'
    ],
    duration: 'Ongoing',
    featured: false
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-blue"
          >
            <div className="h-[1.5px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">03 — Services</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-primary-black font-serif leading-tight">
              Three ways to work <br /> with <span className="italic text-brand-blue">ARVY.</span>
            </h2>
            <p className="text-xl text-brand-gray/80 leading-relaxed font-light max-w-md">
              Each engagement delivers standalone value and creates a natural path forward. We diagnose, then build.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  svc.featured 
                    ? 'border-brand-blue ring-1 ring-brand-blue bg-white shadow-2xl shadow-brand-blue/5' 
                    : 'border-brand-border bg-white hover:border-brand-blue/30 hover:shadow-xl hover:shadow-black/5'
                }`}
              >
                {svc.featured && (
                  <div className="mb-6">
                    <span className="bg-brand-blue text-white text-[9px] font-mono font-medium tracking-widest uppercase py-1 px-3 rounded-full">
                      Most Requested
                    </span>
                  </div>
                )}
                
                <div className="text-[10px] font-mono font-medium text-brand-gray/60 tracking-widest uppercase mb-4">
                  {svc.step}
                </div>
                
                <h3 className="text-2xl font-medium tracking-tight text-primary-black font-serif mb-4 leading-tight">
                  {svc.name}
                </h3>
                
                <p className="text-sm text-brand-gray font-light leading-relaxed mb-8 flex-grow">
                  {svc.desc}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex gap-3 text-[13px] text-brand-gray font-light">
                      <div className="h-[14px] w-[1px] bg-brand-blue shrink-0 mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-top border-brand-border flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium text-brand-gray/40 tracking-widest uppercase italic">
                    Duration: {svc.duration}
                  </span>
                  <Link to="/book" className="text-brand-blue text-sm font-bold flex items-center gap-2 group">
                    Book <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
