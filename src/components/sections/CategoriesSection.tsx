import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Bike, Zap, Car, RotateCcw } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      icon: Bike,
      title: "Bikes",
      description: "Sports, cruiser & adventure bikes",
      color: "primary",
      bgClass: "bg-gradient-primary"
    },
    {
      icon: Car,
      title: "Scooters", 
      description: "Perfect for city commuting",
      color: "accent",
      bgClass: "bg-gradient-accent"
    },
    {
      icon: Zap,
      title: "EVs",
      description: "Electric & eco-friendly rides",
      color: "primary",
      bgClass: "bg-gradient-futuristic"
    },
    {
      icon: RotateCcw,
      title: "Used Bikes",
      description: "Quality pre-owned vehicles",
      color: "secondary",
      bgClass: "bg-gradient-dark"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Explore <span className="bg-gradient-futuristic bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your perfect ride from our diverse collection of two-wheelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer hover-glow border-0 overflow-hidden relative"
              >
                <div className={`absolute inset-0 ${category.bgClass} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl ${category.bgClass} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${category.bgClass} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;