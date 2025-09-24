import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-dark-bg mb-8">
            This Is Your Chance To Trade<br />
            Among The Elite
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              className="bg-dark-bg text-white hover:bg-dark-bg/90 px-8 py-3 rounded-lg font-semibold"
            >
              Get Funded
            </Button>
            <Button 
              variant="outline" 
              className="border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-white px-8 py-3 rounded-lg font-semibold"
            >
              Join our Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;