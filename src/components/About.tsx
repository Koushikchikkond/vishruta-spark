import { CheckCircle2, Target, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About VIShRuTa Enterprises
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A first-generation ISO 27001 Certified company providing Total Technology Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Who We Are</h3>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              VIShRuTa Enterprises brings together a collective leadership experience of more than 50+ years in the field of technology solutions. As a first-generation ISO 27001 Certified company, we specialize in providing Total Technology Solutions that transform industries.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Our diverse background spans across multiple domains including Automotive, Engineering, FMCG, Food and Drug, Chemical, and more. This breadth of experience allows us to leverage technology, industry knowledge, and proven processes to bring the best practices from varied areas of expertise.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Cost-efficient and reliable systems</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Decreased machine downtime</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Improved productivity through technology</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Our Mission</h4>
                <p className="text-foreground">
                  To provide innovative technology solutions that enhance operational efficiency and drive business growth for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Our Vision</h4>
                <p className="text-foreground">
                  To be the leading provider of Total Technology Solutions, recognized for reliability, innovation, and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth sm:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Our Approach</h4>
                <p className="text-foreground">
                  We apply cutting-edge technology combined with deep industry knowledge to understand challenges and deliver practical, efficient solutions that make a real difference in operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
