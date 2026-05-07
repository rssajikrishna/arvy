import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { haptic } from '../lib/haptic';

// Splits a string into individually animated word spans
function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay + i * 0.075, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ marginRight: '0.26em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function OutcomeCard({
  icon: Icon, text, subtext, delay, rotate = 0,
}: {
  icon: React.ElementType; text: string; subtext: string; delay: number; rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: rotate - 3 }}
      animate={{ opacity: 1, x: 0, rotate }}
      transition={{
        opacity: { duration: 0.9, delay, ease: 'easeOut' },
        x:       { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
        rotate:  { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ rotate: `${rotate}deg` }}
      className="bg-white/90 backdrop-blur-md border border-brand-border/80 p-5 rounded-2xl shadow-2xl shadow-black/8 flex items-center gap-5 w-[276px] cursor-default"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="p-3.5 bg-brand-bg text-brand-blue rounded-xl border border-brand-border shrink-0">
        <Icon size={20} strokeWidth={2} />
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-gray mb-1">Impact</span>
        <span className="text-xl font-black text-primary-black leading-tight tracking-tighter">{text}</span>
        <span className="text-[10px] font-serif italic text-brand-blue mt-1">{subtext}</span>
      </div>
    </motion.div>
  );
}

const trust = ['Diagnosis before prescription', 'No vendor commissions', '100% outcome-defined'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax layers — each moves at a different rate
  const blobAY  = useTransform(scrollY, [0, 700], [0,  200]);
  const blobBY  = useTransform(scrollY, [0, 700], [0, -100]);
  const cardsY  = useTransform(scrollY, [0, 700], [0,   80]);
  const textY   = useTransform(scrollY, [0, 700], [0,   40]);

  // Cursor spotlight — springs smooth the movement
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { damping: 28, stiffness: 180 });
  const mouseY = useSpring(rawY, { damping: 28, stiffness: 180 });
  const spotlight = useMotionTemplate`radial-gradient(680px circle at ${mouseX}px ${mouseY}px, rgba(13,110,86,0.09), transparent 72%)`;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      rawX.set(e.clientX - r.left);
      rawY.set(e.clientY - r.top);
    };
    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, [rawX, rawY]);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-80" />

      {/* Cursor-following spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      {/* Parallax background blobs */}
      <motion.div
        style={{ y: blobAY }}
        className="absolute top-1/4 -right-56 w-[750px] h-[750px] bg-brand-blue/[0.055] rounded-full blur-[130px] -z-10 pointer-events-none"
      />
      <motion.div
        style={{ y: blobBY }}
        className="absolute -top-32 -left-40 w-[480px] h-[480px] bg-brand-blue/[0.04] rounded-[40%_60%_70%_30%/50%_30%_70%_80%] blur-[90px] -z-10 pointer-events-none"
      />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />

      <div className="max-container w-full py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <motion.div style={{ y: textY }} className="space-y-10">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2.5 border border-brand-blue/30 bg-brand-blue/5 text-brand-blue rounded-full px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-[10px] font-mono font-medium uppercase tracking-[0.25em]">Applied Intelligence Consulting</span>
            </motion.div>

            {/* Heading — word-by-word reveal */}
            <h1 className="text-5xl md:text-[74px] font-medium leading-[1.05] tracking-tight text-primary-black font-serif">
              <WordReveal text="Your business doesn't have a" delay={0.08} />
              {' '}
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="italic text-brand-blue"
              >
                technology
              </motion.span>
              {' '}
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
              >
                problem.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.96, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <p className="text-3xl md:text-[38px] font-normal text-primary-black/65 font-serif italic tracking-tight leading-snug">
                It has an operational one.
              </p>

              <p className="text-[17px] text-primary-black/55 leading-relaxed max-w-xl font-light">
                We diagnose how your business actually works, identify what's slowing it down, and build systems that create measurable outcomes — not just another tool subscription.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3.5">
                {trust.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 1.12 + i * 0.09 }}
                    className="flex items-center gap-2 text-[11px] font-medium text-brand-gray"
                  >
                    <CheckCircle size={13} className="text-brand-blue shrink-0" strokeWidth={2.5} />
                    {t}
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 1.38 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link
                  to="/book"
                  onClick={() => haptic.medium()}
                  className="group relative inline-flex items-center justify-center bg-brand-blue text-white px-10 py-5 rounded-md font-bold text-sm tracking-wide btn-glow shadow-lg shadow-brand-blue/25 active:scale-[0.97]"
                >
                  Book a discovery call
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2} />
                </Link>
                <a
                  href="#how-we-work"
                  onClick={() => haptic.light()}
                  className="inline-flex items-center justify-center text-primary-black px-10 py-5 rounded-md font-bold text-sm tracking-wide border border-brand-border bg-white/60 backdrop-blur-sm hover:bg-white hover:border-brand-blue/30 transition-all shadow-sm active:scale-[0.97]"
                >
                  See how it works ↓
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — floating cards with organic tilts */}
          <motion.div style={{ y: cardsY }} className="hidden lg:flex flex-col gap-10 items-end relative py-20 pr-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-brand-blue/[0.06] blur-[100px] rounded-full -z-10 pointer-events-none" />
            <div className="mr-28">
              <OutcomeCard icon={TrendingUp} text="35–40%" subtext="Capacity lost to manual tasks" delay={0.55} rotate={-1.8} />
            </div>
            <div className="mr-6">
              <OutcomeCard icon={DollarSign} text="2 Weeks" subtext="To deliver a complete audit" delay={0.8} rotate={1.2} />
            </div>
            <div className="mr-44">
              <OutcomeCard icon={Clock} text="Zero Tools" subtext="Sold before we diagnose" delay={1.05} rotate={-2.4} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
