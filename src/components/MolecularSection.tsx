import AnimatedSection from './AnimatedSection';

const terpenes = [
  {
    name: 'Myrcene',
    description: 'Earthy notes of sacred clove and fragrant cosmic herbs, grounding the consciousness.'
  },
  {
    name: 'Caryophyllene',
    description: 'A spicy, peppery warmth that adds cosmic complexity and dimensional depth.'
  },
  {
    name: 'Limonene',
    description: 'Bright, sweet citrus undertones that uplift the spirit and refresh the cosmic consciousness.'
  }
];

const MolecularSection = () => {
  return (
    <section className="chapter chapter-molecular" id="molecular">
      <AnimatedSection>
        <div className="content-box">
          <div className="chapter-number">Chapter Four</div>
          <h2 className="chapter-title">Molecular Consciousness</h2>
          <p className="chapter-text">
            At the microscopic level, aromatic compounds create the signature cosmic experience and legendary effects that have captivated consciousness explorers for generations.
          </p>
          <div className="flex flex-col gap-6 w-full mt-8">
            {terpenes.map((terpene) => (
              <div key={terpene.name} className="bg-[hsl(var(--card-bg))] rounded-2xl p-8 border-l-[3px] border-[hsl(var(--mint-cyan))] transition-[var(--transition-smooth)] relative overflow-hidden hover:translate-x-3 hover:shadow-[0_0_40px_hsl(var(--mint-cyan)/0.3)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[hsl(var(--mint-cyan))] before:to-transparent before:opacity-10 before:z-[-1]">
                <div className="font-[family-name:var(--font-display)] font-semibold text-[hsl(var(--mint-cyan))] mb-2 text-[clamp(1.2rem,2vw,1.5rem)]">
                  {terpene.name}
                </div>
                <p className="text-[hsl(var(--warm-gray))]">{terpene.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default MolecularSection;