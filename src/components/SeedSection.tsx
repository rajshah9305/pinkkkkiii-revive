import AnimatedSection from './AnimatedSection';

const SeedSection = () => {
  return (
    <section className="chapter chapter-seed" id="seed">
      <AnimatedSection>
        <div className="content-box">
          <div className="chapter-number">Chapter One</div>
          <h2 className="chapter-title">The Sacred Seed</h2>
          <div className="flex items-center justify-center w-full h-[35vh] my-12 relative">
            <div className="floating-seed relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ethereal-pink/20 to-mint-cyan/20 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-golden-yellow rounded-full animate-ping"></div>
            </div>
          </div>
          <p className="chapter-text">
            From <strong>soil to soul</strong>, Pink Kush begins its mystical journey. We select genetics with an artist's consciousness, choosing seeds that hold the potential for <em>unparalleled transcendence</em>.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="text-xs text-muted-text uppercase tracking-wider">Origin</div>
            <div className="text-xs text-ethereal-pink">•</div>
            <div className="text-xs text-muted-text uppercase tracking-wider">Genetics</div>
            <div className="text-xs text-ethereal-pink">•</div>
            <div className="text-xs text-muted-text uppercase tracking-wider">Potential</div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default SeedSection;