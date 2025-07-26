import { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  type: 'small' | 'medium' | 'large' | 'constellation';
  delay: number;
  duration: number;
}

const CosmicParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: Particle[] = [];
    const particleCount = 80;
    const particleTypes: Array<'small' | 'medium' | 'large' | 'constellation'> = 
      ['small', 'medium', 'large', 'constellation'];

    // Generate enhanced particles with weighted distribution
    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let type: 'small' | 'medium' | 'large' | 'constellation';
      
      // Weighted distribution for more small particles
      if (rand < 0.5) type = 'small';
      else if (rand < 0.8) type = 'medium';
      else if (rand < 0.95) type = 'large';
      else type = 'constellation';

      particles.push({
        id: i,
        x: Math.random() * 100,
        type,
        delay: Math.random() * 25,
        duration: Math.random() * 20 + 20,
      });
    }

    // Create particle elements
    particles.forEach((particle) => {
      const element = document.createElement('div');
      element.className = `cosmic-particle particle-${particle.type}`;
      element.style.left = `${particle.x}%`;
      element.style.animationDelay = `${particle.delay}s`;
      element.style.animationDuration = `${particle.duration}s`;
      
      // Add constellation animation for special particles
      if (particle.type === 'constellation') {
        element.style.animation += `, constellation 4s ease-in-out infinite`;
        element.style.animationDelay = `${particle.delay}s, ${particle.delay + 2}s`;
      }
      
      containerRef.current?.appendChild(element);
    });

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Enhanced Cosmic Particles */}
      <div ref={containerRef} className="cosmic-particles" />
      
      {/* Interactive Cosmic Orbs Background */}
      <div className="cosmic-orbs">
        <div className="cosmic-orb orb-1"></div>
        <div className="cosmic-orb orb-2"></div>
        <div className="cosmic-orb orb-3"></div>
      </div>
    </>
  );
};

export default CosmicParticles;