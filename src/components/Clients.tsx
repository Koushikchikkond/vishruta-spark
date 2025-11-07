import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import toyotaLogo from "@/assets/client-toyota.png";
import kiaLogo from "@/assets/client-kia.jpg";
import vinfastLogo from "@/assets/client-vinfast.jpg";
import adityaBirlaLogo from "@/assets/client-aditya-birla.webp";
import schneiderLogo from "@/assets/client-schneider.webp";
import ltLogo from "@/assets/client-lt.webp";

const Clients = () => {
  const clients = [
    { name: "TOYOTA", logo: toyotaLogo },
    { name: "KIA Motors", logo: kiaLogo },
    { name: "VINFAST", logo: vinfastLogo },
    { name: "Aditya Birla", logo: adityaBirlaLogo },
    { name: "Schneider", logo: schneiderLogo },
    { name: "L&T", logo: ltLogo }
  ];

  const testimonials = [
    {
      company: "TOYOTA",
      text: "VIShRuTa's automation solutions have significantly improved our production efficiency and reduced downtime.",
      author: "Manufacturing Director"
    },
    {
      company: "KIA Motors",
      text: "Outstanding technology implementation with exceptional support. Their expertise in automotive solutions is unmatched.",
      author: "Operations Manager"
    },
    {
      company: "Schneider",
      text: "Reliable, cost-efficient, and innovative. VIShRuTa has been a trusted technology partner for our enterprise systems.",
      author: "Technology Lead"
    }
  ];

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Trusted by Global Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions power operations at some of the world's most recognized companies
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-smooth"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const clientLogo = clients.find(c => c.name === testimonial.company)?.logo;
              return (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-border pt-4">
                      {clientLogo && (
                        <img 
                          src={clientLogo} 
                          alt={`${testimonial.company} logo`}
                          className="h-8 mb-2 object-contain"
                        />
                      )}
                      <p className="text-sm text-muted-foreground">{testimonial.author}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
