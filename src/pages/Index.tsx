import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import PayoutsSection from "@/components/PayoutsSection";
import CertificatesSection from "@/components/CertificatesSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StepsSection />
        <FeaturesSection />
        <PricingSection />
        <PayoutsSection />
        <CertificatesSection />
        <CommunitySection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;