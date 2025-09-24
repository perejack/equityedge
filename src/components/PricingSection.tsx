import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

const PricingSection = () => {
  const [selectedEval, setSelectedEval] = useState("1 Step EE");
  const [selectedSize, setSelectedSize] = useState("10K");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const evalOptions = ["1 Step EE", "2 Step EE", "1 Step Swift", "2 Step Swift", "Instant"];
  const sizeOptions = ["2.5K", "5K", "10K", "25K", "50K", "100K"];

  const pricingData = {
    "1 Step EE": {
      "2.5K": { original: 24, discounted: 22 },
      "5K": { original: 30, discounted: 27 },
      "10K": { original: 55, discounted: 50 },
      "25K": { original: 131, discounted: 119 },
      "50K": { original: 285, discounted: 259 },
      "100K": { original: 538, discounted: 489 }
    },
    "2 Step EE": {
      "2.5K": { original: 25, discounted: 23 },
      "5K": { original: 32, discounted: 29 },
      "10K": { original: 59, discounted: 54 },
      "25K": { original: 153, discounted: 139 },
      "50K": { original: 296, discounted: 269 },
      "100K": { original: 549, discounted: 499 }
    },
    "1 Step Swift": {
      "2.5K": { original: 15, discounted: 14 },
      "5K": { original: 20, discounted: 18 },
      "10K": { original: 43, discounted: 39 },
      "25K": { original: 120, discounted: 109 },
      "50K": { original: 263, discounted: 239 },
      "100K": { original: 417, discounted: 379 }
    },
    "2 Step Swift": {
      "2.5K": { original: 18, discounted: 16 },
      "5K": { original: 22, discounted: 20 },
      "10K": { original: 46, discounted: 42 },
      "25K": { original: 142, discounted: 129 },
      "50K": { original: 274, discounted: 249 },
      "100K": { original: 472, discounted: 429 }
    },
    "Instant": {
      "2.5K": { original: 24, discounted: 22 },
      "5K": { original: 50, discounted: 45 },
      "10K": { original: 75, discounted: 68 },
      "25K": { original: 151, discounted: 137.5 },
      "50K": { original: 175, discounted: 159 },
      "100K": { original: 305, discounted: 276 }
    }
  };

  const fundingDataByEval = {
    "1 Step EE": {
      phases: ["Phase 1", "Funded"],
      data: {
        "Trading Period": ["Unlimited", "Unlimited"],
        "Minimum Trading Days": ["2 Days", "2 Days"],
        "Maximum Daily Loss": ["4%", "4%"],
        "Maximum Loss (Trailing)": ["6%", "6%"],
        "Profit Target": ["10%", "-"],
        "Platforms": ["MetaTrader 5, Match-Trader", "MetaTrader 5, Match-Trader"],
        "Leverage": ["1:40(Fx), 1:15 (Metals), 1:15 (Indices), 1:2(Crypto)", "1:40(Fx), 1:15(Metals), 1:15(Indices), 1:2(Crypto)"]
      }
    },
    "2 Step EE": {
      phases: ["Phase 1", "Phase 2", "Funded"],
      data: {
        "Trading Period": ["Unlimited", "Unlimited", "Unlimited"],
        "Minimum Trading Days": ["2 Days", "2 Days", "2 Days"],
        "Maximum Daily Loss": ["5%", "5%", "5%"],
        "Maximum Loss": ["10%", "10%", "10%"],
        "Profit Target": ["10%", "5%", "-"],
        "Platforms": ["MetaTrader 5, Match-Trader", "MetaTrader 5, Match-Trader", "MetaTrader 5, Match-Trader"],
        "Leverage": ["1:40(Fx), 1:15(Metals), 1:15(Indices), 1:2(Crypto)", "1:40(Fx), 1:15(Metals), 1:15(Indices), 1:2(Crypto)", "1:40(Fx), 1:15(Metals), 1:15(Indices), 1:2(Crypto)"]
      }
    },
    "1 Step Swift": {
      phases: ["Phase 1", "Funded"],
      data: {
        "Trading Period": ["Unlimited", "Unlimited"],
        "Minimum Trading Days": ["2 Days", "2 Days"],
        "Maximum Daily Loss": ["3%", "3%"],
        "Maximum Loss (Trailing)": ["5%", "5%"],
        "Profit Target": ["8%", "-"],
        "Platforms": ["MetaTrader 5, Match-Trader", "MetaTrader 5, Match-Trader"],
        "Leverage": ["1:30(Fx), 1:10(Metals), 1:10(Indices), 1:2(Crypto)", "1:30(Fx), 1:10(Metals), 1:10(Indices), 1:2(Crypto)"]
      }
    },
    "2 Step Swift": {
      phases: ["Phase 1", "Phase 2", "Funded"],
      data: {
        "Trading Period": ["Unlimited", "Unlimited", "Unlimited"],
        "Minimum Trading Days": ["2 Days", "2 Days", "2 Days"],
        "Maximum Daily Loss": ["4%", "4%", "4%"],
        "Maximum Loss": ["8%", "8%", "8%"],
        "Profit Target": ["8%", "5%", "-"],
        "Platforms": ["MetaTrader 5, Match-Trader", "MetaTrader 5, Match-Trader", "MetaTrader 5, Match-Trader"],
        "Leverage": ["1:30(Fx), 1:10(Metals), 1:10(Indices), 1:2(Crypto)", "1:30(Fx), 1:10(Metals), 1:10(Indices), 1:2(Crypto)", "1:30(Fx), 1:10(Metals), 1:10(Indices), 1:2(Crypto)"]
      }
    },
    "Instant": {
      phases: ["Funded"],
      data: {
        "Trading Period": ["Unlimited"],
        "Minimum Trading Days": ["7 Days"],
        "Maximum Daily Loss": ["3%"],
        "Maximum Loss (Trailing)": ["5%"],
        "Consistency Score": ["15%"],
        "Profit Target": ["-"],
        "Leverage": ["1:30(FX), 1:10(Metals), 1:10(Indices)"],
        "Profit Share": ["90%"]
      }
    }
  };

  const currentData = fundingDataByEval[selectedEval as keyof typeof fundingDataByEval];
  const currentPrice = pricingData[selectedEval as keyof typeof pricingData][selectedSize as keyof typeof pricingData[keyof typeof pricingData]];

  return (
    <section id="challenges" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Earn Up to <span className="text-primary">$100K</span> in Funding with
            <br />
            <span className="text-primary">Equity Edge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're trading CFDs with Equity Edge or cryptocurrencies with Crypto Edge, we offer 
            flexible paths to funding. Choose from our 1-step and 2-step evaluation challenges to prove 
            your skills, or go straight to a Pro Edge account for immediate access to funded trading.
          </p>
        </div>

        {/* Selection Buttons */}
        <div className="mb-12 space-y-6">
          {/* Evaluation Type Buttons */}
          <div className="flex justify-center">
            <div className="bg-gray-900 rounded-full p-1 flex gap-1">
              {evalOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedEval(option)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedEval === option
                      ? "bg-primary text-black"
                      : "text-primary hover:text-primary/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          {/* Account Size Buttons */}
          <div className="flex justify-center">
            <div className="bg-gray-900 rounded-full p-1 flex gap-1">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-primary text-black"
                      : "text-primary hover:text-primary/80"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Funding Details Table */}
        <div className="mb-12 flex justify-center">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-4xl">
            {/* Table Headers */}
            <div className={`grid ${currentData.phases.length === 1 ? 'grid-cols-2' : currentData.phases.length === 2 ? 'grid-cols-3' : 'grid-cols-4'} mb-6`}>
              <div></div>
              {currentData.phases.map((phase) => (
                <div key={phase} className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{phase}</h3>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {Object.entries(currentData.data).map(([key, values]) => (
                <div key={key} className={`grid ${currentData.phases.length === 1 ? 'grid-cols-2' : currentData.phases.length === 2 ? 'grid-cols-3' : 'grid-cols-4'} items-center`}>
                  {/* Row Label */}
                  <div className="text-white font-medium pr-4">
                    {key}
                  </div>
                  
                  {/* Combined Content Area */}
                  <div className={`${currentData.phases.length === 1 ? 'col-span-1' : currentData.phases.length === 2 ? 'col-span-2' : 'col-span-3'} bg-primary rounded-lg p-4`}>
                    <div className={`grid ${currentData.phases.length === 1 ? 'grid-cols-1' : currentData.phases.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
                      {values.map((value, index) => (
                        <div key={index} className="text-center text-black font-semibold">
                          {key === "Platforms" ? (
                            <div className="space-y-1">
                              <div className="flex items-center justify-center gap-1">
                                <TrendingUp className="h-4 w-4" />
                                <span>MetaTrader 5</span>
                              </div>
                              <div className="flex items-center justify-center gap-1">
                                <TrendingUp className="h-4 w-4" />
                                <span>Match-Trader</span>
                              </div>
                            </div>
                          ) : (
                            value
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl" 
            className="animate-glow"
            onClick={() => setIsCheckoutOpen(true)}
          >
            Buy Now - ${currentPrice.original} ${currentPrice.discounted}
          </Button>
        </div>

        {/* Checkout Modal */}
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          challengeType={selectedEval}
          challengeAmount={selectedSize}
          price={currentPrice.discounted}
        />
      </div>
    </section>
  );
};

export default PricingSection;