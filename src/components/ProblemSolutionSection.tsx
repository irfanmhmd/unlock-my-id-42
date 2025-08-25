import { AlertTriangle, Shield, Lock, Zap, Globe, CheckCircle } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Data Breaches",
      description: "Centralized databases are prime targets for hackers, exposing millions of identities."
    },
    {
      icon: Lock,
      title: "Identity Theft",
      description: "Traditional identity systems lack proper ownership controls, making theft easier."
    },
    {
      icon: Zap,
      title: "Lack of Interoperability",
      description: "Different platforms require separate identity verification, creating friction."
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "Immutable blockchain technology ensures your identity cannot be tampered with."
    },
    {
      icon: CheckCircle,
      title: "NFT-backed IDs",
      description: "Unique digital tokens provide cryptographic proof of identity ownership."
    },
    {
      icon: Globe,
      title: "Self-Sovereign Ownership",
      description: "You control your identity data completely - no central authority required."
    }
  ];

  return (
    <section className="deid-section">
      <div className="deid-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Problems We <span className="text-gradient">Solve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional identity systems are broken. DeID provides the solution with cutting-edge blockchain technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-destructive">Current Problems</h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="deid-card border-destructive/20">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <problem.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-deid-blue">Our Solutions</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="deid-card border-deid-blue/20">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-deid-blue/10 rounded-lg">
                      <solution.icon className="h-6 w-6 text-deid-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;