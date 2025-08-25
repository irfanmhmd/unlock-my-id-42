import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="deid-section bg-gradient-hero">
      <div className="deid-container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Be Part of the{" "}
            <span className="text-gradient">Decentralized Identity</span>{" "}
            Revolution
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of individuals and organizations already building the future of digital identity. 
            Take control of your digital presence today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button variant="hero" size="lg" className="group">
              <Users className="mr-2 h-5 w-5" />
              Join Beta Program
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5" />
              Contact Our Team
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-deid-blue mb-2">10K+</div>
              <div className="text-muted-foreground">Beta Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-deid-purple mb-2">50+</div>
              <div className="text-muted-foreground">Partner Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-deid-blue mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;