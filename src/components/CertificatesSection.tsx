import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CertificatesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      name: "Dionis V",
      amount: "$10,386",
      id: "certificate1"
    },
    {
      name: "Raisa M", 
      amount: "$10,879",
      id: "certificate2"
    },
    {
      name: "Rene M",
      amount: "$35,490", 
      id: "certificate3"
    },
    {
      name: "Lorenzo S",
      amount: "$15,245",
      id: "certificate4"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Payout <span className="text-primary">Certificates</span>
          </h2>
        </div>

        {/* Certificates Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={cert.id} className="w-1/3 flex-shrink-0 px-4">
                  <Card className="card-glow bg-card border-primary/20 h-96 relative overflow-hidden animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0 h-full relative">
                      {/* Certificate Background Design */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10"></div>
                      <div className="absolute top-4 left-4 w-12 h-12 bg-primary-glow rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">E</span>
                      </div>
                      <div className="absolute top-4 right-4 text-xs text-muted-foreground">
                        @EQUITYEDGE
                      </div>
                      
                      {/* Certificate Content */}
                      <div className="flex flex-col justify-center items-center h-full p-6 text-center relative z-10">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          PAYOUT CERTIFICATE
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          PROUDLY PRESENTED TO
                        </p>
                        <h4 className="text-xl font-bold text-primary-glow mb-4">
                          {cert.name}
                        </h4>
                        <div className="text-3xl font-bold text-primary mb-4">
                          {cert.amount}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          FOR OUTSTANDING TRADING PERFORMANCE
                        </p>
                        
                        {/* Certificate Seal */}
                        <div className="absolute bottom-6 right-6 w-16 h-16 bg-primary-glow rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-xs">VERIFIED</span>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/20 to-transparent"></div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-glow/20 to-transparent"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-primary-glow text-primary-foreground hover:bg-primary"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline" 
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary-glow text-primary-foreground hover:bg-primary"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;