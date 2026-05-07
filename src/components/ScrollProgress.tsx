import { useEffect, useRef, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] z-[60]" style={{ background: 'rgba(228,224,218,0.3)' }}>
      <div
        className="h-full origin-left"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #0D6E56, #1aad88)',
          boxShadow: progress > 1 ? '0 0 8px 1px rgba(13,110,86,0.5)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      />
    </div>
  );
}
