import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Key } from "lucide-react";
import Scene3D from "./3d/Scene3D";

const HeroSection = () => {
  return (
    <section className="deid-section bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      <div className="deid-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm font-medium text-deid-blue uppercase tracking-wider">
                Digital Identity
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                DeID – Secure,{" "}
                <span className="text-gradient">Borderless</span>,{" "}
                Decentralized Identity
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Redefining how individuals own and verify their digital identity. 
                Take control with blockchain-powered, self-sovereign identity management.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Discover DeID
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-deid-blue" />
                <span className="text-sm text-muted-foreground">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-deid-purple" />
                <span className="text-sm text-muted-foreground">Borderless</span>
              </div>
              <div className="flex items-center gap-2">
                <Key className="h-5 w-5 text-deid-blue" />
                <span className="text-sm text-muted-foreground">Self-Owned</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-[600px]">
            <div className="w-full h-full relative">
              <Scene3D />
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;