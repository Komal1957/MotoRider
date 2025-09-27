import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Bike, 
  Zap, 
  Search, 
  Filter,
  Star,
  Fuel,
  Gauge,
  IndianRupee,
  MapPin,
  Clock,
  Heart
} from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Vehicles', icon: Bike, count: 1250 },
    { id: 'bikes', name: 'Bikes', icon: Bike, count: 650 },
    { id: 'scooters', name: 'Scooters', icon: Bike, count: 380 },
    { id: 'evs', name: 'Electric', icon: Zap, count: 120 },
    { id: 'used', name: 'Used Bikes', icon: Clock, count: 100 }
  ];

  const products = [
    {
      id: 1,
      name: 'Honda Activa 6G',
      category: 'scooters',
      price: 75000,
      mileage: 60,
      engine: '109.51 cc',
      fuelType: 'Petrol',
      rating: 4.5,
      reviews: 1250,
      image: '/api/placeholder/300/200',
      dealer: 'Honda Showroom Central',
      location: 'Mumbai',
      isNew: true,
      discount: 5000
    },
    {
      id: 2,
      name: 'Royal Enfield Classic 350',
      category: 'bikes',
      price: 195000,
      mileage: 40,
      engine: '349 cc',
      fuelType: 'Petrol',
      rating: 4.3,
      reviews: 890,
      image: '/api/placeholder/300/200',
      dealer: 'Royal Enfield Store',
      location: 'Delhi',
      isNew: true
    },
    {
      id: 3,
      name: 'Ather 450X',
      category: 'evs',
      price: 140000,
      mileage: 85,
      engine: 'Electric',
      fuelType: 'Electric',
      rating: 4.6,
      reviews: 420,
      image: '/api/placeholder/300/200',
      dealer: 'Ather Space',
      location: 'Bangalore',
      isNew: true,
      isElectric: true
    },
    {
      id: 4,
      name: 'TVS Apache RTR 160',
      category: 'bikes',
      price: 115000,
      mileage: 45,
      engine: '159.7 cc',
      fuelType: 'Petrol',
      rating: 4.2,
      reviews: 650,
      image: '/api/placeholder/300/200',
      dealer: 'TVS Dealership',
      location: 'Chennai',
      isNew: true
    },
    {
      id: 5,
      name: 'Bajaj Pulsar 220F',
      category: 'used',
      price: 85000,
      originalPrice: 120000,
      mileage: 35,
      engine: '220 cc',
      fuelType: 'Petrol',
      rating: 4.0,
      reviews: 340,
      image: '/api/placeholder/300/200',
      dealer: 'Certified Pre-owned',
      location: 'Pune',
      year: 2021,
      kmDriven: 15000
    },
    {
      id: 6,
      name: 'Hero Splendor Plus',
      category: 'bikes',
      price: 70000,
      mileage: 65,
      engine: '97.2 cc',
      fuelType: 'Petrol',
      rating: 4.4,
      reviews: 2100,
      image: '/api/placeholder/300/200',
      dealer: 'Hero MotoCorp',
      location: 'Gurgaon',
      isNew: true
    }
  ];

  const filteredProducts = products.filter(product => 
    (activeCategory === 'all' || product.category === activeCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Find Your Perfect
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Ride</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our extensive collection of bikes, scooters, and electric vehicles from trusted dealers.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search bikes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="bajaj">Bajaj</SelectItem>
                  <SelectItem value="tvs">TVS</SelectItem>
                  <SelectItem value="royal-enfield">Royal Enfield</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50000">Under ₹50,000</SelectItem>
                  <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="200000+">Above ₹2,00,000</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline-white" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all ${
                  activeCategory === category.id
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:border-primary hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-heading">
              {activeCategory === 'all' ? 'All Vehicles' : categories.find(c => c.id === activeCategory)?.name}
              <span className="text-muted-foreground text-lg font-normal ml-2">
                ({filteredProducts.length} results)
              </span>
            </h2>
            
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px -10px rgba(0, 123, 255, 0.3)"
                  }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Image and Badges */}
                    <div className="relative">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Bike className="w-16 h-16 text-gray-400" />
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.isNew && (
                            <Badge className="bg-green-500 text-white">NEW</Badge>
                          )}
                          {product.isElectric && (
                            <Badge className="bg-accent text-white">
                              <Zap className="w-3 h-3 mr-1" />
                              EV
                            </Badge>
                          )}
                          {product.discount && (
                            <Badge className="bg-red-500 text-white">
                              ₹{product.discount.toLocaleString()} OFF
                            </Badge>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-4 space-y-4">
                      {/* Product Info */}
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            {renderStars(product.rating)}
                            <span className="text-sm text-muted-foreground ml-1">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Fuel className="w-4 h-4 text-muted-foreground" />
                          <span>{product.mileage} km/l</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-muted-foreground" />
                          <span>{product.engine}</span>
                        </div>
                      </div>

                      {/* Used Bike Details */}
                      {product.category === 'used' && (
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{product.year} Model</span>
                          <span>{product.kmDriven?.toLocaleString()} km</span>
                        </div>
                      )}

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{product.dealer}, {product.location}</span>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex justify-between items-center pt-2 border-t">
                        <div>
                          <div className="flex items-center gap-2">
                            <IndianRupee className="w-4 h-4" />
                            <span className="text-xl font-bold">
                              {product.price.toLocaleString()}
                            </span>
                          </div>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="hero" size="sm">
                            Contact
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Bike className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all categories
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;