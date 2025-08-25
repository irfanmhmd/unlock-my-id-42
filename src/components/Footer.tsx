import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="deid-container">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-gradient">DeID</div>
                <span className="text-sm text-muted-foreground">Digital Identity</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Redefining how individuals own and verify their digital identity through blockchain technology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#specs" className="block text-muted-foreground hover:text-primary transition-colors">
                  Specifications
                </a>
                <a href="#use-cases" className="block text-muted-foreground hover:text-primary transition-colors">
                  Use Cases
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </div>
            </div>

            {/* Developers */}
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  SDK Downloads
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Integration Guide
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 DeID. All rights reserved. Powered by blockchain technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;