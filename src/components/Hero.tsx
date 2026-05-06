import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OutcomeCard = ({ icon: Icon, text, subtext, delay }: { icon: React.ElementType; text: string; subtext: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
    transition={{
      opacity: { duration: 0.8, delay },
      x:       { duration: 0.8, delay },
      y:       { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 },
    }}
    className="bg-white border border-brand-border p-5 rounded-2xl shadow-2xl shadow-black/5 flex items-center gap-5 w-[280px]"
  >
    <div className="p-3.5 bg-brand-bg text-brand-blue rounded-xl border border-brand-border shrink-0">
      <Icon size={22} strokeWidth={2.5} />
    </div>
    <div className="flex flex-col">
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-gray mb-1">Impact</span>
      <span className="text-xl font-black text-primary-black leading-tight tracking-tighter">{text}</span>
      <span className="text-[10px] font-serif italic text-brand-blue mt-1">{subtext}</span>
    </div>
  </motion.div>
);

const trust = ['Diagnosis before prescription', 'No vendor commissions', '100% outcome-defined'];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-brand-blue/5 -z-10" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[100px] -z-10" />

      <div className="max-container w-full py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 border border-brand-blue/30 bg-brand-blue/5 text-brand-blue rounded-full px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-[10px] font-mono font-medium uppercase tracking-[0.25em]">Operational Intelligence Consulting</span>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-brand-blue"
              >
                <div className="h-[2px] w-12 bg-brand-blue" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-[76px] font-medium leading-[1.05] tracking-tight text-primary-black font-serif"
              >
                Your business doesn't have a{' '}
                <span className="italic text-brand-blue font-serif">technology</span>{' '}
                problem.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <p className="text-3xl md:text-4xl font-normal text-primary-black/80 font-serif italic tracking-tight">
                It has an operational one.
              </p>

              <p className="text-lg text-primary-black/60 leading-relaxed max-w-xl font-light">
                We diagnose how your business actually works, identify what's slowing it down, and build systems that create measurable outcomes — not just another tool subscription.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4">
                {trust.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-brand-gray">
                    <CheckCircle size={13} className="text-brand-blue shrink-0" strokeWidth={2.5} />
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/book"
                  className="group relative inline-flex items-center justify-center bg-brand-blue text-white px-10 py-5 rounded-md font-bold text-sm tracking-wide transition-all hover:bg-opacity-90 hover:shadow-2xl hover:shadow-brand-blue/30 active:scale-[0.98]"
                >
                  Book a discovery call
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </Link>
                <a
                  href="#how-we-work"
                  className="inline-flex items-center justify-center text-primary-black px-10 py-5 rounded-md font-bold text-sm tracking-wide border border-brand-border bg-white/50 backdrop-blur-sm hover:bg-white hover:border-brand-blue/30 transition-all shadow-sm"
                >
                  See how it works ↓
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — floating cards */}
          <div className="hidden lg:flex flex-col gap-10 items-end relative py-20 pr-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
            <div className="mr-32">
              <OutcomeCard icon={TrendingUp} text="35–40%" subtext="Capacity lost to manual tasks" delay={0.6} />
            </div>
            <div className="mr-8">
              <OutcomeCard icon={DollarSign} text="2 Weeks" subtext="To deliver a complete audit" delay={0.85} />
            </div>
            <div className="mr-40">
              <OutcomeCard icon={Clock} text="Zero Tools" subtext="Sold before we diagnose" delay={1.1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
