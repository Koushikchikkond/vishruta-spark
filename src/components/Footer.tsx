import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold">VIShRuTa</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Total Technology Solutions provider with 50+ years of expertise, serving global enterprises with ISO 27001 certified excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-accent transition-smooth">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-accent transition-smooth">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-accent transition-smooth">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("industries")} className="hover:text-accent transition-smooth">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("clients")} className="hover:text-accent transition-smooth">
                  Clients
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Industrial Automation</li>
              <li>Software Solutions</li>
              <li>Technology Consulting</li>
              <li>Maintenance & Support</li>
              <li>Data Management</li>
              <li>Security Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@vishruta.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 (xxx) xxx-xxxx</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} VIShRuTa Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
