import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="deid-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">DeID</div>
            <span className="ml-2 text-sm text-muted-foreground">Digital Identity</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#specs" className="text-muted-foreground hover:text-foreground transition-colors">
              Specifications
            </a>
            <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <Button variant="hero" size="sm">
              Join Beta
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;