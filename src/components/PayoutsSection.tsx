import { Card, CardContent } from "@/components/ui/card";
import { Building2, CreditCard } from "lucide-react";

const PayoutsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Equity Edge <span className="text-primary">Payouts</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="card-glow bg-card border-primary/20 animate-fadeInUp">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Generous Profit Split
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Start at an 80% profit split and scale up to 90% as you show consistency in 
                your trading, empowering you to keep more of your hard-earned gains.
              </p>
            </CardContent>
          </Card>

          <Card className="card-glow bg-card border-primary/20 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Flexibility in Payouts
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose the payout method that suits you best. Whether you prefer traditional 
                bank transfers or the convenience of cryptocurrencies, we've got you covered.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PayoutsSection;