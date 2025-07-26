import AnimatedSection from './AnimatedSection';

const senses = [
  {
    name: 'Sight',
    description: 'Dense, frosty buds adorned with a constellation of trichomes that sparkle like cosmic diamonds.',
    className: 'sight',
    style: { '--accent-color': 'hsl(var(--ethereal-pink))' } as React.CSSProperties
  },
  {
    name: 'Smell',
    description: 'Sweet vanilla and cosmic candy unfold to reveal deeper, earthy undertones that ground you.',
    className: 'smell',
    style: { '--accent-color': 'hsl(var(--golden-yellow))' } as React.CSSProperties
  },
  {
    name: 'Touch',
    description: 'The buds are sticky to the touch, a testament to their rich, resinous trichome coating.',
    className: 'touch',
    style: { '--accent-color': 'hsl(var(--coral-glow))' } as React.CSSProperties
  },
  {
    name: 'Taste',
    description: 'Remarkably smooth, with hints of sweet berries, cosmic spices, and a classic, earthy kush flavor.',
    className: 'taste',
    style: { '--accent-color': 'hsl(var(--lavender))' } as React.CSSProperties
  },
  {
    name: 'Feel',
    description: 'Waves of deep relaxation wash over the body like warm cosmic tides, with uplifting mental clarity.',
    className: 'feel',
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
            Pink Kush awakens the consciousness with its complex symphony of earth, sweetness, and celestial floral notes, contributing to a profound experience of relaxation and euphoria.
          </p>
          <div className="senses-grid">
            {senses.map((sense) => (
              <div 
                key={sense.name}
                className={`sense-card ${sense.className}`}
                style={sense.style}
              >
                <h3>{sense.name}</h3>
                <p>{sense.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default SensesSection;