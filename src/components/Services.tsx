import { Card, CardContent } from "@/components/ui/card";
import { Settings, Code, LineChart, Wrench, Database, Shield } from "lucide-react";
import automationIcon from "@/assets/service-automation.png";
import softwareIcon from "@/assets/service-software.png";
import consultingIcon from "@/assets/service-consulting.png";

const Services = () => {
  const services = [
    {
      icon: automationIcon,
      title: "Industrial Automation",
      description: "Advanced automation solutions to streamline operations, reduce downtime, and increase productivity with cutting-edge technology.",
      features: ["Robotic Integration", "Process Automation", "Control Systems"]
    },
    {
      icon: softwareIcon,
      title: "Software Solutions",
      description: "Custom software development and integration services tailored to your specific industry needs and operational requirements.",
      features: ["Custom Development", "System Integration", "ERP Solutions"]
    },
    {
      icon: consultingIcon,
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy, implementation, and optimization to help you leverage technology for business growth.",
      features: ["Strategy Planning", "Implementation Support", "Process Optimization"]
    }
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance and support services ensuring your systems run smoothly with minimal downtime."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure data management solutions with analytics capabilities for informed decision-making."
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "ISO 27001 certified security implementations to protect your critical business systems and data."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your operations
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth group">
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <img src={service.icon} alt={service.title} className="w-20 h-20 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-foreground mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-2 border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
