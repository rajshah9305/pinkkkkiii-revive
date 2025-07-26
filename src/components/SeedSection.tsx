import AnimatedSection from './AnimatedSection';

const SeedSection = () => {
  return (
    <section className="chapter chapter-seed" id="seed">
      <AnimatedSection>
        <div className="content-box">
          <div className="chapter-number">Chapter One</div>
          <h2 className="chapter-title">The Sacred Seed</h2>
          <div className="flex items-center justify-center w-full h-[30vh] my-8">
            <div className="floating-seed"></div>
          </div>
          <p className="chapter-text">
            From soil to soul, Pink Kush begins its mystical journey. We select genetics with an artist's consciousness, choosing seeds that hold the potential for unparalleled transcendence.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default SeedSection;