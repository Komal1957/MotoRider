import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { GraduationCap } from 'lucide-react';
import RentForm from './RentForm';
import StudentBenefits from './StudentBenefits';

interface RentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RentDialog = ({ open, onOpenChange }: RentDialogProps) => {
  const [currentStep, setCurrentStep] = useState<'benefits' | 'form'>('benefits');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black to-gray-900 text-gray-200 border border-golden/30 shadow-xl">
        <DialogHeader>
          {/* Title with golden gradient */}
          <DialogTitle className="text-center text-3xl font-heading bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">
            Rent Your Perfect Ride
          </DialogTitle>

          {/* Student Badge */}
          <div className="text-center mt-2">
            <Badge
              variant="secondary"
              className="bg-golden/20 border border-golden/40 text-golden font-semibold px-3 py-1"
            >
              <GraduationCap className="w-4 h-4 mr-1 text-golden" />
              Special Student Benefits Available
            </Badge>
          </div>
        </DialogHeader>

        {/* Animated step switcher */}
        <AnimatePresence mode="wait">
          {currentStep === 'benefits' ? (
            <motion.div
              key="benefits"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Benefits List */}
              <StudentBenefits />

              {/* Actions */}
              <div className="mt-8 flex gap-4 justify-center">
                {/* Secondary button */}
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="px-8 border border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Maybe Later
                </Button>

                {/* Golden CTA */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setCurrentStep('form')}
                    className="px-8 bg-golden text-black font-semibold hover:bg-yellow-500"
                  >
                    Start Booking
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <RentForm onBack={() => setCurrentStep('benefits')} />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default RentDialog;
