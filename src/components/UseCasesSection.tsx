import { GraduationCap, CreditCard, Heart, Vote, Briefcase } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: GraduationCap,
      title: "University Student ID",
      description: "Secure, verifiable student credentials that work across institutions and countries. No more lost ID cards or fraudulent certificates.",
      benefits: ["Instant verification", "Cross-institutional recognition", "Lifetime access"],
      color: "text-deid-blue"
    },
    {
      icon: CreditCard,
      title: "Financial Verification",
      description: "Cross-border financial identity for seamless banking, lending, and investment services without repetitive KYC processes.",
      benefits: ["One-time KYC", "Global banking access", "Fraud prevention"],
      color: "text-deid-purple"
    },
    {
      icon: Heart,
      title: "Healthcare Records",
      description: "Secure, portable health identity that gives you control over your medical data while enabling seamless care.",
      benefits: ["Privacy-first design", "Emergency access", "Provider interoperability"],
      color: "text-deid-blue"
    },
    {
      icon: Vote,
      title: "Voting & Governance",
      description: "Transparent, verifiable digital voting with complete privacy. Participate in governance without compromising anonymity.",
      benefits: ["Verifiable results", "Anonymous voting", "Audit trail"],
      color: "text-deid-purple"
    },
    {
      icon: Briefcase,
      title: "Professional Verification",
      description: "Instantly verifiable professional credentials, work history, and skills verification for employment and freelancing.",
      benefits: ["Skill verification", "Work history proof", "Employer trust"],
      color: "text-deid-blue"
    }
  ];

  return (
    <section id="use-cases" className="deid-section">
      <div className="deid-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real-World <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DeID transforms identity verification across industries, making digital interactions more secure and convenient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="deid-card group hover:border-primary/50 transition-all duration-300 h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className={`h-6 w-6 ${useCase.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{useCase.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">{useCase.description}</p>
                
                <div>
                  <h4 className="font-medium mb-3 text-sm">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {benefit}
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

export default UseCasesSection;