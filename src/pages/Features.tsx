import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Calculator, 
  Search, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock, 
  MapPin,
  Smartphone,
  CreditCard,
  Users
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: 'EMI Calculator',
      description: 'Calculate monthly installments for your dream bike with various loan options and down payment scenarios.',
      benefits: ['Multiple bank options', 'Real-time rates', 'Instant approval'],
      color: 'primary'
    },
    {
      icon: Search,
      title: 'Advanced Search & Filters',
      description: 'Find your perfect bike with intelligent filters including brand, price, mileage, and location.',
      benefits: ['Smart recommendations', 'Price comparison', 'Availability checker'],
      color: 'accent'
    },
    {
      icon: BarChart3,
      title: 'Price Comparison',
      description: 'Compare prices across dealers, view market trends, and get the best deals in your area.',
      benefits: ['Market insights', 'Price history', 'Best deal alerts'],
      color: 'secondary'
    },
    {
      icon: Zap,
      title: 'Instant Bike Valuation',
      description: 'Get accurate valuation of your current bike for trade-in or selling purposes.',
      benefits: ['AI-powered pricing', 'Market value tracking', 'Instant quotes'],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Verified Dealers',
      description: 'All our partner dealers are verified and certified to ensure safe and secure transactions.',
      benefits: ['Background verified', 'Quality assurance', 'Secure payments'],
      color: 'accent'
    },
    {
      icon: Clock,
      title: 'Service Reminders',
      description: 'Never miss a service with smart notifications for maintenance, insurance, and registration.',
      benefits: ['Smart notifications', 'Service history', 'Cost tracking'],
      color: 'secondary'
    }
  ];

  const smartTools = [
    {
      icon: MapPin,
      title: 'Nearby Showrooms',
      description: 'Find authorized dealers and service centers near you',
      action: 'Find Dealers'
    },
    {
      icon: Smartphone,
      title: 'Virtual Test Ride',
      description: 'Experience bikes through AR/VR technology',
      action: 'Try Now'
    },
    {
      icon: CreditCard,
      title: 'Finance Calculator',
      description: 'Compare loan options from multiple banks',
      action: 'Calculate'
    },
    {
      icon: Users,
      title: 'Community Reviews',
      description: 'Read authentic reviews from real owners',
      action: 'Read Reviews'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Smart Features for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart Buyers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover innovative tools and features designed to make your bike buying, 
              selling, and renting experience seamless and intelligent.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Zap className="w-5 h-5 mr-2" />
              AI-Powered Platform
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Powerful Features at Your Fingertips
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with user-friendly design 
              to deliver the best two-wheeler marketplace experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px -10px rgba(0, 123, 255, 0.3)"
                }}
                className="group"
              >
                <Card className="h-full hover:shadow-electric transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-3 rounded-xl bg-${feature.color}/10 group-hover:bg-${feature.color} group-hover:text-white transition-colors`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="w-6 h-6" />
                      </motion.div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{feature.description}</p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary/10">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Tools Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Smart Tools & Utilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access our suite of intelligent tools designed to enhance your 
              two-wheeler journey from discovery to ownership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <motion.div
                    className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <tool.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    {tool.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-futuristic text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Experience Smart Buying?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of satisfied customers who've found their perfect ride with our intelligent platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline-white" className="px-8">
                  Explore Bikes
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                  Start Selling
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;