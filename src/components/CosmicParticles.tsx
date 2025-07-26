import { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  type: 'small' | 'medium' | 'large';
  delay: number;
  duration: number;
}

const CosmicParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: Particle[] = [];
    const particleCount = 50;
    const particleTypes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
        delay: Math.random() * 20,
        duration: Math.random() * 15 + 15,
      });
    }

    // Create particle elements
    particles.forEach((particle) => {
      const element = document.createElement('div');
      element.className = `cosmic-particle particle-${particle.type}`;
      element.style.left = `${particle.x}%`;
      element.style.animationDelay = `${particle.delay}s`;
      element.style.animationDuration = `${particle.duration}s`;
      containerRef.current?.appendChild(element);
    });

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="cosmic-particles" />;
};

export default CosmicParticles;