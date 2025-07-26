import AnimatedSection from './AnimatedSection';

const awards = [
  {
    trophy: '🏆',
    year: '2023',
    title: 'Cannabis Cup Winner',
    description: 'Best Indica Strain'
  },
  {
    trophy: '🏆',
    year: '2022',
    title: 'Leafly Strain of the Year',
    description: 'People\'s Choice Award'
  },
  {
    trophy: '🏆',
    year: '2023',
    title: 'High Times Award',
    description: 'Top Canadian Strain'
  }
];

const AwardsSection = () => {
  return (
    <section className="chapter chapter-awards" id="awards">
      <AnimatedSection>
        <div className="content-box">
          <div className="chapter-number">Chapter Five</div>
          <h2 className="chapter-title">Cosmic Recognition</h2>
          <p className="chapter-text">
            Excellence recognized by industry leaders. Pink Kush has earned its sacred place among the most celebrated strains in history, a testament to its transcendent qualities.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 w-full mt-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-[hsl(var(--card-bg))] border border-[hsl(var(--golden-yellow))] rounded-2xl p-8 transition-[var(--transition-smooth)] text-center relative overflow-hidden hover:-translate-y-3 hover:shadow-[0_0_50px_hsl(var(--golden-yellow)/0.4)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[hsl(var(--golden-yellow))] before:to-transparent before:opacity-10 before:z-[-1]"
              >
                <div className="text-[clamp(2.5rem,5vw,3rem)] mb-4 text-shadow-[0_0_20px_hsl(var(--golden-yellow)/0.6)]">
                  {award.trophy}
                </div>
                <div className="bg-[hsl(var(--golden-yellow))] text-[hsl(var(--primary-bg))] px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  {award.year}
                </div>
                <h3 className="text-[clamp(1.2rem,2.5vw,1.4rem)] mb-2">{award.title}</h3>
                <p className="text-[hsl(var(--golden-yellow))] font-medium text-[clamp(0.9rem,1.8vw,1rem)]">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AwardsSection;