import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'growth';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'fade-in' 
}: AnimatedSectionProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Special handling for growth animation
            if (animationType === 'growth') {
              const stem = entry.target.querySelector('.plant-stem') as HTMLElement;
              if (stem) {
                // Reset height to trigger animation again
                stem.style.height = '0';
                setTimeout(() => {
                  stem.style.height = '80%';
                }, 100);
              }
            }
            
            // Stop observing after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationType]);

  return (
    <div 
      ref={elementRef} 
      className={`${animationType} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;