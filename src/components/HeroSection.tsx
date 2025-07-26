interface HeroSectionProps {
  onBeginJourney: () => void;
}

const HeroSection = ({ onBeginJourney }: HeroSectionProps) => {
  return (
    <section className="chapter prologue" id="prologue">
      <div className="hero-content">
        <h1 className="story-title">Ethereal Bloom</h1>
        <p className="story-subtitle">A Transcendent Journey Through Pink Kush</p>
        <button className="begin-journey" onClick={onBeginJourney}>
          Begin the Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;