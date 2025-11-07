import { Card, CardContent } from "@/components/ui/card";
import { Car, Factory, ShoppingBag, Beaker, Blocks, Building } from "lucide-react";
import automotiveImage from "@/assets/industry-automotive.jpg";
import manufacturingImage from "@/assets/industry-manufacturing.jpg";
import fmcgImage from "@/assets/industry-fmcg.jpg";
import chemicalImage from "@/assets/industry-chemical.jpg";
import foodImage from "@/assets/industry-food.jpg";
import enterpriseImage from "@/assets/industry-enterprise.jpg";

const Industries = () => {
  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "Advanced technology solutions for automotive manufacturing and assembly lines, serving global leaders like Toyota, KIA Motors, and VinFast.",
      image: automotiveImage
    },
    {
      icon: Factory,
      title: "Engineering & Manufacturing",
      description: "Cutting-edge automation and control systems for engineering and manufacturing facilities to optimize production efficiency.",
      image: manufacturingImage
    },
    {
      icon: ShoppingBag,
      title: "FMCG & Retail",
      description: "Technology solutions for fast-moving consumer goods, ensuring streamlined operations and inventory management.",
      image: fmcgImage
    },
    {
      icon: Beaker,
      title: "Chemical & Pharmaceutical",
      description: "Specialized systems for chemical processing and pharmaceutical manufacturing with stringent quality controls.",
      image: chemicalImage
    },
    {
      icon: Blocks,
      title: "Food & Drug",
      description: "Compliant technology solutions for food processing and drug manufacturing industries with safety as priority.",
      image: foodImage
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Serving major enterprises like Aditya Birla, Schneider, and L&T with scalable technology infrastructure.",
      image: enterpriseImage
    }
  ];

  return (
    <section id="industries" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing expertise across diverse sectors to deliver tailored technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-2">
                      <industry.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-foreground">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
