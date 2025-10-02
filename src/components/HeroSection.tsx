import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToChallenges = () => {
    const challengesSection = document.getElementById('challenges');
    if (challengesSection) {
      challengesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden" style={{ 
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#0A0F0A'
    }}>
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="text-white">Are You a Trader?</span>
            <br />
            <span className="text-primary font-extrabold">We Want You</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Prove your trading skills and unlock up to <span className="text-primary font-semibold">$100,000</span> with Equity Edge Ltd. 
            Receive up to <span className="text-primary font-semibold">90%</span> of the profits from your simulated trades 
            and scale up to <span className="text-primary font-semibold">$2,000,000</span> once you pass.
          </p>

          {/* CTA Button */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="default" 
              size="xl" 
              className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl border-0"
              onClick={scrollToChallenges}
            >
              Start Challenge
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 stats-gradient py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slideInLeft">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">$ 4.5M</div>
              <div className="text-sm lg:text-base text-primary-foreground/90">Paid Out to traders in 2024</div>
            </div>
            <div className="text-center animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">90%</div>
              <div className="text-sm lg:text-base text-primary-foreground/90">Receive up to 90% of your simulated profits</div>
            </div>
            <div className="text-center animate-slideInRight" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">180+</div>
              <div className="text-sm lg:text-base text-primary-foreground/90">Countries</div>
            </div>
            <div className="text-center animate-slideInRight" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">48 h</div>
              <div className="text-sm lg:text-base text-primary-foreground/90">Avg payout processing time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;