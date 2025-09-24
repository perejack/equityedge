import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Gift, Clock, BarChart3 } from "lucide-react";

const CommunitySection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Mindset Management",
      description: "Engage with our mindset and fitness community to become the best version of yourself."
    },
    {
      icon: Gift,
      title: "Competitions & Giveaways", 
      description: "Monthly competitions and giveaways exclusively in our Discord Community."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "By signing up to our Discord, you have access to constant technical and mindset support from our team."
    },
    {
      icon: BarChart3,
      title: "Exclusive Trading Content",
      description: "Daily trading content from our in-house analysts."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Discord Community Section */}
        <div className="bg-dark-bg rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Discord Community <span className="text-primary">|</span> <span className="text-primary">Benefits</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join our Discord community and communicate with like-minded traders. Here you will also be 
                the first to hear about exciting promotions and giveaways that you won't want to miss out on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="bg-white border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
                Join Our Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;