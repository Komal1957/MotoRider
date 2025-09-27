import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Camera, FileText, DollarSign, Clock } from 'lucide-react';

const SellSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Upload Photos",
      description: "Take clear photos of your bike from all angles"
    },
    {
      icon: FileText,
      title: "Add Details",
      description: "Provide bike specifications and condition"
    },
    {
      icon: DollarSign,
      title: "Get Instant Quote",
      description: "Receive competitive offers from verified buyers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,123,255,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,49,49,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Sell Your <span className="bg-gradient-futuristic bg-clip-text text-transparent">Bike</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get the best price for your bike in just 3 simple steps
          </p>
        </div>

        {/* Steps Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white group hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/80">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-primary-glow" />
            <h4 className="font-semibold mb-2">Instant Valuation</h4>
            <p className="text-white/80 text-sm">Get price quotes in minutes</p>
          </div>
          <div className="text-center">
            <FileText className="w-8 h-8 mx-auto mb-3 text-accent-glow" />
            <h4 className="font-semibold mb-2">Verified Buyers</h4>
            <p className="text-white/80 text-sm">Connect with trusted buyers only</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-3 text-primary-glow" />
            <h4 className="font-semibold mb-2">Best Prices</h4>
            <p className="text-white/80 text-sm">Get competitive market rates</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-accent hover:shadow-racing text-white text-lg px-12 py-4 h-auto">
            Sell in Seconds
          </Button>
          <p className="text-white/60 mt-4 text-sm">
            Free valuation • No hidden charges • Instant payment
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellSection;