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
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Showrooms & <span className="bg-gradient-futuristic bg-clip-text text-transparent">Dealers</span> Near You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find authorized dealers and book test rides in your city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,123,255,0.1),transparent)] pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,49,49,0.1),transparent)] pointer-events-none"></div>
              
              {/* Simulated Map Pins */}
              <div className="relative w-full h-full">
                <div className="absolute top-1/4 left-1/3 animate-bounce">
                  <div className="bg-primary p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-1/3 animate-bounce delay-300">
                  <div className="bg-accent p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-1/3 left-1/2 animate-bounce delay-700">
                  <div className="bg-primary p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Interactive Map</p>
                <p className="text-muted-foreground">Find dealers near you</p>
              </div>
            </div>

            {/* City Search */}
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Enter your city..."
                  className="pl-10 h-12 bg-white border-0 shadow-lg"
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
              <Card key={index} className="hover-electric border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold mb-1">
                        {dealer.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{dealer.rating}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{dealer.distance}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      Get Directions
                    </Button>
                    <Button className="flex-1 bg-gradient-primary">
                      Book Test Ride
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="ghost" className="w-full text-primary">
              View All Dealers →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomsSection;