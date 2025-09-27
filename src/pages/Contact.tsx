import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Headphones,
  Shield,
  Users,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+91 98765-43210',
      hours: 'Mon-Fri: 9 AM - 7 PM',
      color: 'primary'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your queries via email',
      contact: 'support@vahanbazar.com',
      hours: '24/7 Response within 2 hours',
      color: 'accent'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help through live chat',
      contact: 'Available on website',
      hours: 'Mon-Fri: 9 AM - 9 PM',
      color: 'secondary'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our office for in-person support',
      contact: 'Cyber City, Gurgaon, Haryana',
      hours: 'Mon-Fri: 10 AM - 6 PM',
      color: 'primary'
    }
  ];

  const supportCategories = [
    {
      icon: Users,
      title: 'Account & Registration',
      description: 'Help with account setup, login issues, profile management'
    },
    {
      icon: FileText,
      title: 'Buying & Selling',
      description: 'Assistance with listings, transactions, documentation'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Report fraud, security concerns, verification issues'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Website issues, app problems, feature requests'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              Get in
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Have questions? Need help? Our friendly support team is here to assist you 
              with anything related to buying, selling, or renting two-wheelers.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="outline-white" size="lg" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +91 98765-43210
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Start Live Chat
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method of communication. We're available through 
              multiple channels to provide you with the best support experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px -10px rgba(0, 123, 255, 0.3)"
                }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <motion.div
                      className={`mx-auto mb-4 p-4 bg-${method.color} rounded-full w-16 h-16 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 15 }}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <p className="font-semibold text-primary">{method.contact}</p>
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3" />
                      {method.hours}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Support Categories */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading flex items-center gap-2">
                    <Send className="w-6 h-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 2 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange('category', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="account">Account & Registration</SelectItem>
                            <SelectItem value="buying">Buying & Selling</SelectItem>
                            <SelectItem value="safety">Safety & Security</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="Brief subject line"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Describe your query or issue in detail..."
                        rows={6}
                        required
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>

                    <p className="text-xs text-muted-foreground text-center">
                      By sending this message, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  What can we help you with?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Browse our support categories to find quick answers or get targeted assistance.
                </p>
              </div>

              <div className="space-y-4">
                {supportCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <Card className="hover:shadow-md transition-all duration-300 cursor-pointer border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <category.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{category.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    &lt;2hr
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Response Time</div>
                </Card>
                
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-accent mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our comprehensive FAQ section for instant answers to common questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="px-8">
                  View FAQ
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" className="px-8">
                  Browse Help Center
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;