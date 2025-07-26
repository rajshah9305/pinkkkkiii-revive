import AnimatedSection from './AnimatedSection';

const senses = [
  {
    name: 'Sight',
    description: 'Dense, frosty buds adorned with a constellation of trichomes that sparkle like cosmic diamonds.',
    className: 'sight',
    icon: '👁️',
    gradient: 'from-ethereal-pink to-ethereal-pink/70',
    style: { '--accent-color': 'hsl(var(--ethereal-pink))' } as React.CSSProperties
  },
  {
    name: 'Smell',
    description: 'Sweet vanilla and cosmic candy unfold to reveal deeper, earthy undertones that ground you.',
    className: 'smell',
    icon: '👃',
    gradient: 'from-golden-yellow to-golden-yellow/70',
    style: { '--accent-color': 'hsl(var(--golden-yellow))' } as React.CSSProperties
  },
  {
    name: 'Touch',
    description: 'The buds are sticky to the touch, a testament to their rich, resinous trichome coating.',
    className: 'touch',
    icon: '✋',
    gradient: 'from-coral-glow to-coral-glow/70',
    style: { '--accent-color': 'hsl(var(--coral-glow))' } as React.CSSProperties
  },
  {
    name: 'Taste',
    description: 'Remarkably smooth, with hints of sweet berries, cosmic spices, and a classic, earthy kush flavor.',
    className: 'taste',
    icon: '👅',
    gradient: 'from-lavender to-lavender/70',
    style: { '--accent-color': 'hsl(var(--lavender))' } as React.CSSProperties
  },
  {
    name: 'Feel',
    description: 'Waves of deep relaxation wash over the body like warm cosmic tides, with uplifting mental clarity.',
    className: 'feel',
    icon: '🧠',
    gradient: 'from-mint-cyan to-mint-cyan/70',
    style: { '--accent-color': 'hsl(var(--mint-cyan))' } as React.CSSProperties
  }
];

const SensesSection = () => {
  return (
    <section className="chapter chapter-senses" id="senses">
      <AnimatedSection>
        <div className="content-box">
          <div className="chapter-number">Chapter Three</div>
          <h2 className="chapter-title">Sensory Translation</h2>
          <p className="chapter-text">
            Pink Kush awakens the consciousness with its <strong>complex symphony</strong> of earth, sweetness, and celestial floral notes, contributing to a profound experience of <em>relaxation and euphoria</em>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
            {senses.map((sense, index) => (
              <div 
                key={sense.name}
                className={`group relative bg-gradient-to-br ${sense.gradient} p-[1px] rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-1`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="bg-card/95 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {sense.icon}
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-4 text-foreground group-hover:text-white transition-colors duration-300">
                      {sense.name}
                    </h3>
                    <p className="text-muted-text leading-relaxed group-hover:text-warm-gray transition-colors duration-300">
                      {sense.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default SensesSection;