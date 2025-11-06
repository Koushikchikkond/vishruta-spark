import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Technology Solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6 animate-fade-in">
            <div className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">50+ Years Experience</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Total Technology Solutions for Modern Industry
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Leveraging technology and industry expertise to deliver cost-efficient, reliable systems that decrease downtime and improve productivity across Automotive, Engineering, FMCG, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth text-lg px-8 py-6"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-primary-foreground/80">Successful Projects</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-primary-foreground/80">Global Clients</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">99.5%</div>
              <div className="text-primary-foreground/80">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
