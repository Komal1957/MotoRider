import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Trophy, 
  Globe,
  Zap,
  Shield,
  Star,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'To democratize two-wheeler ownership by making buying, selling, and renting accessible to everyone.',
      color: 'primary'
    },
    {
      icon: Eye,
      title: 'Transparent',
      description: 'Complete transparency in pricing, vehicle history, and dealer verification for trust-based transactions.',
      color: 'accent'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is centered around improving our customers\' experience and satisfaction.',
      color: 'secondary'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Bank-grade security for all transactions, verified dealers, and comprehensive fraud protection.',
      color: 'primary'
    }
  ];

  const stats = [
    { icon: Users, value: '2M+', label: 'Active Users', color: 'primary' },
    { icon: Trophy, value: '50K+', label: 'Successful Deals', color: 'accent' },
    { icon: Globe, value: '100+', label: 'Cities Covered', color: 'secondary' },
    { icon: Star, value: '4.8/5', label: 'User Rating', color: 'primary' }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to revolutionize the two-wheeler marketplace in India.',
      achievement: 'First 1000 users'
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded to 25+ cities and introduced verified dealer network.',
      achievement: '100K+ listings'
    },
    {
      year: '2022',
      title: 'Innovation Focus',
      description: 'Launched AI-powered recommendations and smart pricing algorithms.',
      achievement: 'Series A funding'
    },
    {
      year: '2023',
      title: 'Market Leader',
      description: 'Became the #1 two-wheeler marketplace with advanced features.',
      achievement: '1M+ users'
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Introducing rental services and EV-focused marketplace expansion.',
      achievement: 'Pan-India presence'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      background: 'Ex-Flipkart, IIT Delhi',
      description: 'Passionate about transforming transportation in India'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      background: 'Ex-Amazon, IIT Bombay',
      description: 'Leading our technology and product innovation'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Operations',
      background: 'Ex-Ola, XLRI',
      description: 'Scaling operations across 100+ cities'
    },
    {
      name: 'Sneha Reddy',
      role: 'VP Marketing',
      background: 'Ex-Zomato, ISB Hyderabad',
      description: 'Building brand and user engagement strategies'
    }
  ];

  const achievements = [
    { icon: Award, text: 'Best Startup 2023 - Economic Times' },
    { icon: Trophy, text: 'Top 10 Marketplace App - Google Play' },
    { icon: Star, text: 'Customer Choice Award - Business Today' },
    { icon: CheckCircle, text: 'ISO 27001 Security Certification' }
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
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Since 2020
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Revolutionizing
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Two-Wheeler</span>
              <br />Marketplace
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We started with a simple belief: buying and selling two-wheelers should be 
              transparent, secure, and hassle-free. Today, we're India's most trusted 
              platform for bikes, scooters, and electric vehicles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline-white" size="lg" className="px-8">
                  Our Story
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                  Join Our Team
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center"
              >
                <motion.div
                  className={`mx-auto mb-4 p-4 bg-${stat.color} rounded-full w-16 h-16 flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build. 
              They define who we are and how we serve our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                      className={`mx-auto mb-4 p-4 bg-${value.color} rounded-full w-16 h-16 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 15 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">
              From a startup dream to India's leading two-wheeler marketplace
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                } mb-12`}
              >
                <Card className={`w-80 ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                } hover:shadow-lg transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {milestone.year}
                      </Badge>
                      <Badge variant="outline">
                        {milestone.achievement}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>

                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"
                  whileHover={{ scale: 1.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines deep industry knowledge with technology expertise 
              to build the future of transportation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-xs mb-3">{member.background}</p>
                    <p className="text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Recognition & Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:shadow-md transition-all"
                >
                  <achievement.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <span className="text-left font-medium">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-futuristic text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold font-heading mb-4">
                Ready to Join Our Mission?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                We're always looking for passionate people to help us build the future of transportation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline-white" size="lg" className="px-8">
                    View Open Positions
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                    Partner With Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;