
import { useEffect, useState } from 'react';

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-64 h-64 rounded-full opacity-20 blur-xl bg-gradient-to-r from-etherion-blue to-purple-600 transition-transform duration-75 ease-out"
      style={{
        left: mousePosition.x - 128,
        top: mousePosition.y - 128,
        transform: 'translate3d(0, 0, 0)',
      }}
    />
  );
};

export default MouseGlow;
