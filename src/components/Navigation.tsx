import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ScrollProgress from './ScrollProgress';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { name: 'How We Work', href: '/#how-we-work' },
    { name: 'Our Work',    href: '/#work' },
    { name: 'Services',    href: '/#services' },
    { name: 'FAQ',         href: '/#faq' },
  ];

  return (
    <>
      <ScrollProgress />
      <nav
        className={`fixed top-[2px] w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-brand-border py-4 shadow-sm shadow-black/5'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-container flex justify-between items-center text-sm font-bold tracking-tight">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo className="h-10" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10 text-primary-black">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-gray hover:text-primary-black transition-colors relative group text-[13px] font-medium"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Link
              to="/book"
              className="bg-brand-blue hover:bg-opacity-90 text-white px-6 py-2.5 rounded-md transition-all text-[11px] uppercase tracking-widest font-bold shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Book a call →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary-black p-2 hover:bg-brand-bg rounded-md transition-colors"
            onClick={() => setIsOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden absolute top-full left-0 w-full bg-white border-b border-brand-border md:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-base font-medium text-brand-gray hover:text-primary-black hover:bg-brand-bg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Link
                  to="/book"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 bg-brand-blue text-white px-5 py-3.5 rounded-md text-center font-bold tracking-wide text-sm"
                >
                  Book a discovery call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
