import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <KeyFeaturesSection />
      <SpecificationsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
