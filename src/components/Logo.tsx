import { motion } from 'motion/react';

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-full aspect-square bg-primary-black rounded-md flex items-center justify-center">
        <span className="text-white font-sans font-bold text-[60%] tracking-widest leading-none mt-0.5 ml-0.5">A</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-bold tracking-[0.1em] text-primary-black">ARVY</span>
        <span className="text-[9px] font-medium text-brand-gray tracking-widest uppercase">Applied Intelligence</span>
      </div>
    </div>
  );
}
