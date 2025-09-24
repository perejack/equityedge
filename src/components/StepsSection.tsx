import { Card, CardContent } from "@/components/ui/card";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Take the Challenge",
      description: "Show us that you can trade profitably and with discipline by reaching the profit targets set out in your 1-step or 2-step challenge.",
      bgColor: "bg-dark-bg",
      textColor: "text-primary-foreground"
    },
    {
      number: "02", 
      title: "Get Verified",
      description: "Once you have passed your Equity Edge challenge, the next step is to verify your identity, also known as KYC (Know Your Customer).",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      number: "03",
      title: "Become a Funded Trader", 
      description: "You will now get your live Equity Edge account details and start generating commissions from all of your profitable trades.",
      bgColor: "bg-primary-glow",
      textColor: "text-primary-foreground"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Get Funded In <span className="text-primary">3 Easy Steps</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-primary/30"></div>
          <div className="hidden lg:block absolute top-20 left-2/3 right-0 h-0.5 bg-primary/30"></div>

          {steps.map((step, index) => (
            <div key={step.number} className="relative animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Step Number Circle */}
              <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 shadow-xl`}>
                <span className={`text-2xl font-bold ${step.textColor}`}>
                  {step.number}
                </span>
              </div>

              {/* Step Card */}
              <Card className="card-glow bg-card border-primary/20 h-full">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;