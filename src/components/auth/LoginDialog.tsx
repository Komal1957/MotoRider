import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#0A0A0C] border border-[#FFD700]/30 rounded-xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-heading bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
            Welcome to Vahan Bazar
          </DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <Tabs defaultValue="login" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-[#1A1D23] border border-[#FFD700]/20 rounded-lg">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFD700] data-[state=active]:to-[#B8860B] data-[state=active]:text-black text-[#B0B3C6]"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFD700] data-[state=active]:to-[#B8860B] data-[state=active]:text-black text-[#B0B3C6]"
            >
              Register
            </TabsTrigger>
          </TabsList>

          {/* Login */}
          <TabsContent value="login" className="space-y-4 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#FFD700]">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#FFD700]">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-[#B0B3C6] hover:text-[#FFD700] transition-colors"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold hover:opacity-90">
                Login
              </Button>

              {/* Forgot Password */}
              <div className="text-center">
                <button className="text-sm text-[#FFD700] hover:underline">
                  Forgot Password?
                </button>
              </div>
            </motion.div>
          </TabsContent>

          {/* Register */}
          <TabsContent value="register" className="space-y-4 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#FFD700]">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#FFD700]">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                  />
                </div>
              </div>

              {/* Register Email */}
              <div className="space-y-2">
                <Label htmlFor="register-email" className="text-[#FFD700]">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                  />
                </div>
              </div>

              {/* Register Password */}
              <div className="space-y-2">
                <Label htmlFor="register-password" className="text-[#FFD700]">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#B0B3C6]" />
                  <Input
                    id="register-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    className="pl-10 pr-10 bg-[#1A1D23] border border-[#FFD700]/30 text-white placeholder:text-[#6C6F82] focus:ring-1 focus:ring-[#FFD700]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-[#B0B3C6] hover:text-[#FFD700] transition-colors"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold hover:opacity-90">
                Create Account
              </Button>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-[#6C6F82] mt-4">
          By continuing, you agree to our{' '}
          <span className="text-[#FFD700] hover:underline cursor-pointer">
            Terms of Service
          </span>{' '}
          and{' '}
          <span className="text-[#FFD700] hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
