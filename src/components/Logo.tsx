export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src="/APPLIED.png"
      alt="ARVY — Applied Intelligence"
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
