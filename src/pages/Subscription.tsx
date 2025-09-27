import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { 
  Check, 
  X, 
  Crown, 
  Zap, 
  Shield, 
  Star,
  Users,
  Headphones,
  FileText,
  Clock,
  IndianRupee
} from 'lucide-react';

const Subscription = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for occasional buyers and sellers',
      icon: Users,
      monthlyPrice: 0,
      yearlyPrice: 0,
      color: 'muted',
      features: [
        { name: 'Browse unlimited listings', included: true },
        { name: 'Basic search filters', included: true },
        { name: 'Contact sellers directly', included: true },
        { name: 'Standard support', included: true },
        { name: 'Price comparison tool', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority listing', included: false },
        { name: 'Verified badge', included: false }
      ],
      popular: false
    },
    {
      name: 'Premium',
      description: 'Best for active buyers and dealers',
      icon: Star,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      color: 'primary',
      features: [
        { name: 'All Basic features', included: true },
        { name: 'Advanced search & filters', included: true },
        { name: 'Price comparison tool', included: true },
        { name: 'EMI calculator', included: true },
        { name: 'Priority customer support', included: true },
        { name: 'Listing analytics', included: true },
        { name: 'Verified seller badge', included: true },
        { name: 'Featured listings (5/month)', included: true }
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For dealerships and businesses',
      icon: Crown,
      monthlyPrice: 999,
      yearlyPrice: 9990,
      color: 'accent',
      features: [
        { name: 'All Premium features', included: true },
        { name: 'Unlimited featured listings', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Custom branding options', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'API access for integrations', included: true },
        { name: 'Multi-location management', included: true },
        { name: '24/7 priority support', included: true }
      ],
      popular: false
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All payments protected with bank-grade security'
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Real-time notifications for your listings and interests'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Get help from our two-wheeler specialists'
    },
    {
      icon: FileText,
      title: 'Documentation Help',
      description: 'Assistance with RC transfer and other paperwork'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Choose Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Perfect Plan</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Unlock premium features to enhance your buying and selling experience. 
              Get verified badges, priority support, and advanced tools.
            </p>
            
            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md rounded-full p-2 inline-flex"
            >
              <span className={`px-4 py-2 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`px-4 py-2 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <Badge className="ml-2 bg-accent text-white">Save 17%</Badge>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: plan.popular ? 1.05 : 1.02,
                  rotateY: 5,
                  boxShadow: plan.popular 
                    ? "0 20px 40px -10px rgba(0, 123, 255, 0.3)"
                    : "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
                }}
                className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-white px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full ${plan.popular ? 'border-2 border-primary shadow-xl' : ''}`}>
                  <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className={`p-4 rounded-full ${
                          plan.color === 'primary' 
                            ? 'bg-primary' 
                            : plan.color === 'accent'
                            ? 'bg-accent'
                            : 'bg-muted'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <plan.icon className={`w-8 h-8 ${
                          plan.color === 'muted' ? 'text-muted-foreground' : 'text-white'
                        }`} />
                      </motion.div>
                    </div>

                    <CardTitle className="text-2xl font-bold font-heading">
                      {plan.name}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>

                    <div className="mt-6">
                      <div className="flex items-center justify-center">
                        <IndianRupee className="w-6 h-6 text-muted-foreground" />
                        <span className="text-5xl font-bold">
                          {isYearly 
                            ? Math.round(plan.yearlyPrice / 12) 
                            : plan.monthlyPrice
                          }
                        </span>
                        <span className="text-muted-foreground ml-1">/month</span>
                      </div>
                      
                      {isYearly && plan.yearlyPrice > 0 && (
                        <div className="mt-2">
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{plan.monthlyPrice * 12}
                          </span>
                          <span className="text-sm text-green-600 ml-2">
                            Save ₹{(plan.monthlyPrice * 12) - plan.yearlyPrice}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (i * 0.05) }}
                          className="flex items-center gap-3"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            feature.included
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            {feature.included ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <X className="w-3 h-3" />
                            )}
                          </div>
                          <span className={`text-sm ${
                            feature.included ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {feature.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? 'bg-gradient-primary hover:shadow-electric'
                            : plan.color === 'accent'
                            ? 'bg-gradient-accent'
                            : ''
                        }`}
                        variant={plan.popular ? 'hero' : plan.color === 'accent' ? 'hero' : 'outline'}
                        size="lg"
                      >
                        {plan.monthlyPrice === 0 ? 'Get Started' : 'Choose Plan'}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              What You Get With Every Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our plans come with these essential features to ensure a smooth 
              and secure two-wheeler marketplace experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  className="mx-auto mb-4 p-4 bg-primary rounded-full w-16 h-16 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-semibold mb-2">Can I change my plan anytime?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Is there a free trial?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, all paid plans come with a 7-day free trial. No credit card required to start.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What payment methods are accepted?</h4>
                <p className="text-sm text-muted-foreground">
                  We accept all major credit cards, debit cards, UPI, and net banking.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-semibold mb-2">Do you offer refunds?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with your plan.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Is customer support included?</h4>
                <p className="text-sm text-muted-foreground">
                  All plans include customer support. Premium and Enterprise get priority support.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription anytime. Your plan remains active until the billing period ends.
                </p>
              </div>
            </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of satisfied users who've upgraded their two-wheeler experience with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline-white" className="px-8">
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                  Contact Sales
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;