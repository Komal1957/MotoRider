import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { MapPin, Search, Phone, Star } from 'lucide-react';

const ShowroomsSection = () => {
  const dealers = [
    { name: "Speed Motors", rating: 4.8, distance: "2.3 km", phone: "+91 98765 43210" },
    { name: "Elite Bikes", rating: 4.6, distance: "3.1 km", phone: "+91 98765 43211" },
    { name: "Future Wheels", rating: 4.9, distance: "4.2 km", phone: "+91 98765 43212" }
  ];

  return (
    <section className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* background glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.05),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.05),transparent)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Showrooms & <span className="text-primary">Dealers</span> Near You
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Find authorized dealers and book test rides in your city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Preview */}
          <div className="relative">
            <div className="bg-background border border-muted rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden shadow-xl">
              {/* Simulated Map Pins */}
              <div className="relative w-full h-full">
                <div className="absolute top-1/4 left-1/3 animate-bounce">
                  <div className="bg-primary p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-background" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-1/3 animate-bounce delay-300">
                  <div className="bg-accent p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-background" />
                  </div>
                </div>
                <div className="absolute bottom-1/3 left-1/2 animate-bounce delay-700">
                  <div className="bg-primary p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-background" />
                  </div>
                </div>
              </div>

              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-muted">Find dealers near you</p>
              </div>
            </div>

            {/* City Search */}
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <Input
                  placeholder="Enter your city..."
                  className="pl-10 h-12 bg-background border border-muted text-foreground placeholder:text-muted"
                />
              </div>
            </div>
          </div>

          {/* Dealer List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-semibold mb-6">
              Verified Dealers
            </h3>
            
            {dealers.map((dealer, index) => (
              <Card key={index} className="bg-background bg-yellow-100 border border-muted hover:border-accent transition-all rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold mb-1">
                        {dealer.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{dealer.rating}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{dealer.distance}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-muted text-foreground hover:border-accent hover:text-accent">
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1 border-muted text-foreground hover:border-accent hover:text-accent">
                      Book Test Ride
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="ghost" className="w-full text-primary hover:text-accent">
              View All Dealers →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomsSection;
