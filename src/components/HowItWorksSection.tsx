import { UserPlus, Shield, Globe, Settings } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      subtitle: "Create ID Token",
      description: "Sign up and create your unique digital identity token on the blockchain. Your identity is minted as an NFT that you own completely.",
      color: "text-deid-blue"
    },
    {
      icon: Shield,
      title: "Secure",
      subtitle: "Identity stored securely",
      description: "Your identity is encrypted and stored on the blockchain using advanced cryptographic techniques, ensuring maximum security.",
      color: "text-deid-purple"
    },
    {
      icon: Globe,
      title: "Verify",
      subtitle: "Verified across apps",
      description: "Use your DeID across any compatible application, platform, or service. One identity, infinite possibilities.",
      color: "text-deid-blue"
    },
    {
      icon: Settings,
      title: "Control",
      subtitle: "User controls access",
      description: "Grant or revoke access to your identity data at any time. You maintain complete control over who sees what.",
      color: "text-deid-purple"
    }
  ];

  return (
    <section className="deid-section bg-secondary/20">
      <div className="deid-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DeID simplifies digital identity management in four simple steps while maintaining the highest security standards.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary opacity-30 hidden lg:block transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="deid-card text-center group hover:border-primary/50 transition-all duration-300">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-primary mb-4 font-medium">{step.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;