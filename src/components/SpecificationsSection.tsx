import { Blocks, Key, Shield, Cpu, Code, Zap } from "lucide-react";

const SpecificationsSection = () => {
  const specs = [
    {
      icon: Blocks,
      title: "Blockchain Layer",
      description: "Built on Ethereum, Polygon, and Solana networks",
      details: ["Smart contracts for identity verification", "Cross-chain compatibility", "Gas-optimized operations"],
      color: "text-deid-blue"
    },
    {
      icon: Key,
      title: "Token Standard",
      description: "ERC-721 and ERC-1155 NFT standards",
      details: ["Unique identity tokens", "Batch operations support", "Metadata flexibility"],
      color: "text-deid-purple"
    },
    {
      icon: Shield,
      title: "Verification Process",
      description: "Zero-Knowledge Proofs for privacy",
      details: ["zk-SNARKs implementation", "Selective disclosure", "Privacy preservation"],
      color: "text-deid-blue"
    },
    {
      icon: Cpu,
      title: "User Control",
      description: "Wallet-based access and revocation",
      details: ["Self-custodial wallets", "Granular permissions", "Instant revocation"],
      color: "text-deid-purple"
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Comprehensive SDK and APIs",
      details: ["REST and GraphQL APIs", "JavaScript/Python SDKs", "Webhook integrations"],
      color: "text-deid-blue"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast verification",
      details: ["Sub-second verification", "Batch processing", "Edge caching"],
      color: "text-deid-purple"
    }
  ];

  return (
    <section id="specs" className="deid-section">
      <div className="deid-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on cutting-edge blockchain technology with enterprise-grade security and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="deid-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className={`h-6 w-6 ${spec.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{spec.title}</h3>
                  <p className="text-muted-foreground mb-4">{spec.description}</p>
                  <ul className="space-y-2">
                    {spec.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;