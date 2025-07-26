import AnimatedSection from './AnimatedSection';

interface FinaleSectionProps {
  onExperience: () => void;
}

const FinaleSection = ({ onExperience }: FinaleSectionProps) => {
  return (
    <section className="chapter chapter-finale" id="finale">
      <AnimatedSection>
        <div className="content-box">
          <div className="chapter-number">Final Chapter</div>
          <h2 className="chapter-title">The Experience Awaits</h2>
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute -top-4 -left-6 text-6xl text-ethereal-pink opacity-30 font-display">"</div>
            <blockquote className="font-display text-[clamp(1.5rem,4vw,2.5rem)] italic leading-[1.4] py-5 px-8">
              In each crystal lies a universe, in each breath, a moment of cosmic peace.
            </blockquote>
            <div className="absolute -bottom-8 -right-6 text-6xl text-ethereal-pink opacity-30 font-display">"</div>
          </div>
          <button className="begin-journey" onClick={onExperience}>
            Experience the High
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default FinaleSection;