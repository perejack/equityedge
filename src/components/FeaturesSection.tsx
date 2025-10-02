import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Calendar, Target, DollarSign, Users, Gift, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Trade Your Way",
      description: "Hold positions during news, keep trades over the weekend, and trade with lot sizes as large as your leverage allows. Flexibility at your fingertips!"
    },
    {
      icon: Calendar,
      title: "Unlimited Trading Days", 
      description: "...Hence, we let our traders pass our challenges at their own pace."
    },
    {
      icon: Target,
      title: "Industry Best Profit Share",
      description: "Your success is our success. We understand and value your hard work and dedication with up to a 90% profit split."
    },
    {
      icon: DollarSign,
      title: "Lowest Profit Target",
      description: "We empower our traders to achieve their trading goals efficiently and effectively."
    },
    {
      icon: Users,
      title: "Lowest Commissions & Spreads",
      description: "Trade like a pro by taking advantage of rock-bottom commissions and spreads that let you keep more of your profits."
    },
    {
      icon: Gift,
      title: "High Referral Commissions",
      description: "Your efforts deserve recognition - enjoy lucrative referral commissions that reward your network-building success."
    },
    {
      icon: Award,
      title: "Rewarding Monthly Competitions",
      description: "Participate in our monthly trading competitions and showcase your skills while competing for exciting prizes and recognition."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Why Should You Join <span className="text-primary">Equity Edge</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.slice(0, 4).map((feature, index) => (
            <Card key={feature.title} className="card-glow bg-card hover:bg-card/80 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(4).map((feature, index) => (
            <Card key={feature.title} className="card-glow bg-card hover:bg-card/80 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;