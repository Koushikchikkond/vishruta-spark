import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold text-primary">VIShRuTa Enterprises</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-accent transition-smooth">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-smooth">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-smooth">
              Services
            </button>
            <button onClick={() => scrollToSection("industries")} className="text-foreground hover:text-accent transition-smooth">
              Industries
            </button>
            <button onClick={() => scrollToSection("clients")} className="text-foreground hover:text-accent transition-smooth">
              Clients
            </button>
            <Button onClick={() => scrollToSection("contact")} className="gradient-accent text-primary-foreground hover:opacity-90 transition-smooth">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 bg-card rounded-lg shadow-medium">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-2 hover:bg-secondary transition-smooth">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 hover:bg-secondary transition-smooth">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-2 hover:bg-secondary transition-smooth">
              Services
            </button>
            <button onClick={() => scrollToSection("industries")} className="block w-full text-left px-4 py-2 hover:bg-secondary transition-smooth">
              Industries
            </button>
            <button onClick={() => scrollToSection("clients")} className="block w-full text-left px-4 py-2 hover:bg-secondary transition-smooth">
              Clients
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection("contact")} className="w-full gradient-accent text-primary-foreground">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
