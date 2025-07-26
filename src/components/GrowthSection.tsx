import AnimatedSection from './AnimatedSection';

const GrowthSection = () => {
  return (
    <section className="chapter chapter-growth" id="growth">
      <AnimatedSection animationType="growth">
        <div className="content-box">
          <div className="chapter-number">Chapter Two</div>
          <h2 className="chapter-title">Growth & Development</h2>
          <div className="flex items-center justify-center w-full h-[30vh] my-8">
            <div className="plant-stem"></div>
          </div>
          <p className="chapter-text">
            Life awakens in a symphony of cellular expansion. We nurture a thriving ecosystem in our living soil, allowing the purest expression of Pink Kush to emerge in all its ethereal glory.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default GrowthSection;