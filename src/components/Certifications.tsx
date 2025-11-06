import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, CheckCircle2, Lock } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 27001 Certified",
      description: "First-generation certification in information security management systems, ensuring the highest standards of data protection and security.",
      year: "2020"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Commitment to delivering excellence through rigorous quality control processes and continuous improvement methodologies.",
      year: "Ongoing"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Industry-leading practices in data security and privacy protection, safeguarding client information and intellectual property.",
      year: "Certified"
    },
    {
      icon: CheckCircle2,
      title: "Industry Compliance",
      description: "Full compliance with industry-specific standards across automotive, pharmaceutical, food safety, and manufacturing sectors.",
      year: "Current"
    }
  ];

  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Certifications & Standards
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Maintaining the highest standards of quality, security, and compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-strong hover:bg-primary-foreground/15 transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="inline-block bg-accent/20 px-3 py-1 rounded-full text-sm text-primary-foreground mb-4">
                  {cert.year}
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {cert.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-accent/20 backdrop-blur-sm border-accent/30 shadow-strong max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Our certifications reflect our unwavering commitment to delivering secure, reliable, and high-quality technology solutions. We continuously invest in training, infrastructure, and processes to maintain and exceed industry standards, ensuring our clients receive the best possible service and solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
