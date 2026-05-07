import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import { haptic } from '../lib/haptic';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full px-5 py-4 bg-brand-bg border border-brand-border rounded-lg text-sm text-primary-black placeholder:text-brand-gray/50 focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue transition-colors font-light';

export default function Discovery() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      haptic.success();
      setState('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err: unknown) {
      haptic.error();
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  return (
    <section id="discovery" className="section-padding bg-brand-bg overflow-hidden relative">
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-blue"
          >
            <div className="h-[1.5px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">04 — Contact</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left — copy */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-primary-black font-serif leading-tight">
                  Start with <br /><span className="italic text-brand-blue font-serif">understanding.</span>
                </h2>
                <p className="text-xl text-primary-black/80 leading-relaxed font-light max-w-md">
                  If your operations are slowing your growth, the first step is clarity. Send us a message and we'll reach out within one business day.
                </p>
              </div>

              <div className="p-10 border border-brand-border bg-white rounded-xl space-y-6 shadow-sm">
                <div className="flex items-center gap-3 text-brand-blue font-bold uppercase tracking-widest text-[10px] font-mono">
                  <span className="w-8 h-[1px] bg-brand-blue" />
                  The Discussion
                </div>
                <p className="text-xl leading-relaxed text-primary-black font-medium italic font-serif">
                  "This is not a sales call. We'll understand how your operations run, identify potential inefficiencies, and explore whether improvements can create meaningful impact."
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm text-brand-gray font-light">
                <Calendar size={16} className="text-brand-blue shrink-0" />
                <span>Prefer to book directly?{' '}
                  <Link to="/book" className="text-brand-blue font-medium hover:underline underline-offset-2">
                    Choose a time on our calendar →
                  </Link>
                </span>
              </div>
            </div>

            {/* Right — contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {state === 'success' ? (
                <div className="bg-white border border-brand-border rounded-2xl p-12 text-center space-y-6 shadow-sm min-h-[420px] flex flex-col items-center justify-center">
                  <div className="inline-flex p-4 bg-brand-blue/5 text-brand-blue rounded-full">
                    <CheckCircle size={32} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-medium tracking-tight text-primary-black font-serif">Message received.</h3>
                    <p className="text-brand-gray font-light max-w-xs mx-auto leading-relaxed">
                      We'll review your inquiry and respond within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => setState('idle')}
                    className="text-xs font-mono uppercase tracking-widest text-brand-gray hover:text-brand-blue transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-brand-border rounded-2xl p-10 space-y-6 shadow-sm"
                >
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-blue mb-6">
                      Send us a message
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-mono font-medium uppercase tracking-widest text-brand-gray">
                        Name <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-mono font-medium uppercase tracking-widest text-brand-gray">
                        Email <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-[10px] font-mono font-medium uppercase tracking-widest text-brand-gray">
                      Company <span className="text-brand-gray/40">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Logistics"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-mono font-medium uppercase tracking-widest text-brand-gray">
                      Message <span className="text-brand-blue">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your operations and what's not working…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {state === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-brand-blue hover:bg-opacity-90 disabled:opacity-60 text-white font-bold py-5 rounded-lg transition-all text-sm tracking-wide"
                  >
                    {state === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] font-mono text-brand-gray/50 tracking-widest uppercase">
                    We respond within 1 business day
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
