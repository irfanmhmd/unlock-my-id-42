import { User, ShieldCheck, Eye, Layers, FileCheck, Code } from "lucide-react";

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: User,
      title: "Self-Sovereign Identity",
      description: "Complete ownership and control over your digital identity. No intermediaries, no central authorities.",
      color: "text-deid-blue"
    },
    {
      icon: ShieldCheck,
      title: "NFT-based Verification",
      description: "Unique digital ID tokens backed by blockchain technology provide cryptographic proof of authenticity.",
      color: "text-deid-purple"
    },
    {
      icon: Eye,
      title: "Privacy-Preserving",
      description: "Zero-knowledge proofs ensure your privacy while maintaining verifiability. No central database to hack.",
      color: "text-deid-blue"
    },
    {
      icon: Layers,
      title: "Cross-Platform Use",
      description: "Works seamlessly across applications, countries, and institutions with universal compatibility.",
      color: "text-deid-purple"
    },
    {
      icon: FileCheck,
      title: "Transparency & Trust",
      description: "Blockchain ledger provides immutable audit trail, ensuring complete transparency and trust.",
      color: "text-deid-blue"
    },
    {
      icon: Code,
      title: "Easy Integration",
      description: "Developer-friendly APIs and SDKs make integration simple for businesses and applications.",
      color: "text-deid-purple"
    }
  ];

  return (
    <section id="features" className="deid-section bg-secondary/20">
      <div className="deid-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Key <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DeID revolutionizes digital identity with cutting-edge blockchain technology and user-centric design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="deid-card group hover:border-primary/50 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;