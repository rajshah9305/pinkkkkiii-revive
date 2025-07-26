import { useEffect, useRef, useState } from 'react';

const InteractiveCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, .chapter-dot, .sense-card, .begin-journey');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Smooth cursor following
    const animateCursor = () => {
      const speed = 0.1;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`fixed w-6 h-6 rounded-full pointer-events-none z-[9999] transition-all duration-300 ${
        isHovering 
          ? 'bg-ethereal-pink/30 scale-150 shadow-[0_0_30px_hsl(var(--ethereal-pink))]' 
          : 'bg-ethereal-pink/20 scale-100'
      }`}
      style={{
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default InteractiveCursor;