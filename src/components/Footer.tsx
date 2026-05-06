import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const footerLinks = {
  Approach:  [
    { name: 'How We Work',  href: '/#how-we-work' },
    { name: 'Case Studies', href: '/#work' },
    { name: 'Services',     href: '/#services' },
    { name: 'FAQ',          href: '/#faq' },
  ],
  Engage: [
    { name: 'Book a Call',        href: '/book' },
    { name: 'Contact',            href: '/#discovery' },
    { name: 'Diagnostic Audit',   href: '/book' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subState, setSubState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubState('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubState('done');
      setEmail('');
    } catch {
      setSubState('error');
    }
  };

  return (
    <footer className="bg-primary-black overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      {/* Final CTA band */}
      <div className="border-b border-white/10 py-24 lg:py-32 relative z-10">
        <div className="max-container text-center space-y-10">
          <div className="space-y-5">
            <span className="text-[10px] font-mono font-medium uppercase tracking-[0.25em] text-brand-blue">Final Word</span>
            <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white leading-tight font-serif">
              Clarity is the first step <br className="hidden md:block" /> to better operations.
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
              Better systems start with better understanding. Request an audit to define your operational baseline.
            </p>
          </div>
          <Link
            to="/book"
            className="group inline-flex items-center gap-4 bg-brand-blue text-white px-10 py-5 rounded-md font-bold text-sm tracking-wide transition-all hover:bg-opacity-90 hover:shadow-2xl hover:shadow-brand-blue/25 active:scale-[0.98]"
          >
            Book a discovery call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-container relative z-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Logo className="h-10 invert" />
            <p className="text-white/40 max-w-xs font-light leading-relaxed text-sm">
              Applied Intelligence. Real Operations. The operational intelligence firm for high-growth enterprises.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">2 slots remaining this month</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-5">
              <p className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-white/30">{group}</p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link to={link.href} className="text-sm text-white/50 hover:text-white transition-colors font-light">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors font-light">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-5">
            <p className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-white/30">Operational Insights</p>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Occasional notes on systems thinking, operational efficiency, and building businesses that scale.
            </p>
            {subState === 'done' ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-brand-blue font-medium"
              >
                You're on the list.
              </motion.p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue transition-colors"
                />
                <button
                  type="submit"
                  disabled={subState === 'loading'}
                  className="p-3 bg-brand-blue text-white rounded-lg hover:bg-opacity-90 transition-all shrink-0 disabled:opacity-50"
                >
                  <Send size={15} />
                </button>
              </form>
            )}
            {subState === 'error' && (
              <p className="text-xs text-red-400">Something went wrong. Try again.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 relative z-10">
        <div className="max-container flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/25 uppercase tracking-[0.15em]">
          <p>© {new Date().getFullYear()} ARVY · Applied Intelligence</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
