export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src="/logo.jpeg"
      alt="ARVY — Applied Intelligence"
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
