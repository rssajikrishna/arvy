import { motion } from 'motion/react';
import { InlineWidget } from 'react-calendly';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-brand-bg relative overflow-hidden flex flex-col font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/5 blur-[100px] rounded-full -z-10" />

      {/* Header */}
      <header className="py-8 px-6 md:px-12 flex justify-between items-center border-b border-brand-border bg-white/50 backdrop-blur-md">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-10" />
        </Link>
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-sm font-bold text-brand-gray hover:text-primary-black transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </header>

      <main className="flex-grow max-container w-full py-16 px-6">
        <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 text-brand-blue"
            >
              <div className="h-[1.5px] w-8 bg-brand-blue" />
              <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">Step 04 — Confirmation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-medium tracking-tight text-primary-black font-serif leading-tight"
            >
              Book your <span className="italic text-brand-blue">Operational Audit.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-gray max-w-2xl mx-auto font-light"
            >
              Choose a time that works for you. We'll use this time to understand your current workflows and identify immediate opportunities for system improvement.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-2xl shadow-black/5 min-h-[700px]"
          >
            <InlineWidget
              url={import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/f-arvy-intel/discovery'}
              styles={{
                height: '700px',
                width: '100%',
              }}
            />
          </motion.div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-brand-border bg-white/30 text-center">
        <p className="text-[10px] font-mono tracking-[0.2em] text-brand-gray uppercase">
          © {new Date().getFullYear()} ARVY · Applied Intelligence
        </p>
      </footer>
    </div>
  );
}
