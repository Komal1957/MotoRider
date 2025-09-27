import React from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Buy Bikes", href: "#" },
    { name: "Sell Bikes", href: "#" },
    { name: "Compare Models", href: "#" },
    { name: "EMI Calculator", href: "#" },
    { name: "Find Dealers", href: "#" },
    { name: "Test Ride", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="bg-gradient-futuristic bg-clip-text text-transparent">Vahan Bazar</span>
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              India's premier two-wheeler marketplace. Your trusted partner for buying, selling, and exploring the future of mobility.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-white hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Tools & Services</h4>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary-glow" />
            <span className="text-white/80">contact@vahanbazar.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-accent-glow" />
            <span className="text-white/80">1800-123-VAHAN</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary-glow" />
            <span className="text-white/80">Mumbai, Delhi, Bangalore</span>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Vahan Bazar. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8">
          <p className="text-white/40 text-sm italic">
            Powered by Vahan Bazar – Buy & Sell Bikes in Seconds
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;