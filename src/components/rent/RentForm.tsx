import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { format } from 'date-fns';
import { 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Calendar as CalendarIcon,
  Clock,
  IndianRupee,
  CheckCircle,
  Bike
} from 'lucide-react';
import PricingCalculator from './PricingCalculator';

interface RentFormProps {
  onBack: () => void;
}

const RentForm = ({ onBack }: RentFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStudent, setIsStudent] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    address: '',
    
    // Student Info
    studentId: '',
    institution: '',
    course: '',
    graduationYear: '',
    
    // Rental Details
    bikeType: '',
    duration: '',
    pickupDate: undefined as Date | undefined,
    pickupLocation: '',
    
    // Additional
    hasLicense: false,
    emergencyContact: '',
  });

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Student Details', icon: GraduationCap },
    { number: 3, title: 'Rental Details', icon: Bike },
    { number: 4, title: 'Review & Pay', icon: CheckCircle }
  ];

  const bikeOptions = [
    { value: 'scooter', label: 'Scooter (₹500/day)', price: 500 },
    { value: 'commuter', label: 'Commuter Bike (₹700/day)', price: 700 },
    { value: 'sports', label: 'Sports Bike (₹1200/day)', price: 1200 },
    { value: 'ev', label: 'Electric Scooter (₹600/day)', price: 600 }
  ];

  const nextStep = () => {
    if (!isStudent && currentStep === 1) {
      setCurrentStep(3); // Skip student details if not a student
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (!isStudent && currentStep === 3) {
      setCurrentStep(1); // Skip student details if not a student
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Benefits
        </Button>
        
        <div className="flex items-center gap-2">
          {steps.map((step) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;
            const isSkipped = !isStudent && step.number === 2;
            
            return (
              <motion.div
                key={step.number}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : isCompleted 
                    ? 'bg-primary/20 text-primary' 
                    : isSkipped
                    ? 'bg-muted text-muted-foreground opacity-50'
                    : 'bg-muted text-muted-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <step.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{step.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Form Steps */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input
                        id="emergency"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                        placeholder="Emergency contact number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="Enter your full address"
                    />
                  </div>

                  {/* Student Status */}
                  <motion.div 
                    className="p-4 border rounded-lg bg-accent/5"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="student"
                        checked={isStudent}
                        onCheckedChange={(checked) => setIsStudent(!!checked)}
                      />
                      <Label htmlFor="student" className="flex items-center gap-2 cursor-pointer">
                        <GraduationCap className="w-4 h-4 text-accent" />
                        I am a student (Get 15-20% discount!)
                      </Label>
                    </div>
                    {isStudent && (
                      <Badge variant="secondary" className="mt-2 bg-accent/10 text-accent">
                        🎉 Student benefits will be applied!
                      </Badge>
                    )}
                  </motion.div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="license"
                      checked={formData.hasLicense}
                      onCheckedChange={(checked) => setFormData({...formData, hasLicense: !!checked})}
                    />
                    <Label htmlFor="license">I have a valid driving license *</Label>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Student Details (only if student) */}
          {currentStep === 2 && isStudent && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Student Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID *</Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                        placeholder="Enter your student ID" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution *</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => setFormData({...formData, institution: e.target.value})}
                        placeholder="College/University name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="course">Course/Degree *</Label>
                      <Input
                        id="course"
                        value={formData.course}
                        onChange={(e) => setFormData({...formData, course: e.target.value})}
                        placeholder="e.g., B.Tech Computer Science"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="graduation">Expected Graduation *</Label>
                      <Select
                        value={formData.graduationYear}
                        onValueChange={(value) => setFormData({...formData, graduationYear: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <motion.div 
                    className="p-4 border rounded-lg bg-primary/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Your Student Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-accent/10 text-accent">20% OFF</Badge>
                        <span>Monthly rentals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-accent/10 text-accent">15% OFF</Badge>
                        <span>Weekly rentals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">FREE</Badge>
                        <span>Safety gear</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">FREE</Badge>
                        <span>Campus pickup</span>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Rental Details */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bike className="w-5 h-5" />
                    Rental Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Select Bike Type *</Label>
                      <Select
                        value={formData.bikeType}
                        onValueChange={(value) => setFormData({...formData, bikeType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your bike" />
                        </SelectTrigger>
                        <SelectContent>
                          {bikeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Rental Duration *</Label>
                      <Select
                        value={formData.duration}
                        onValueChange={(value) => setFormData({...formData, duration: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily (1-6 days)</SelectItem>
                          <SelectItem value="weekly">Weekly (1-3 weeks)</SelectItem>
                          <SelectItem value="monthly">Monthly (1+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pickup Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.pickupDate ? format(formData.pickupDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.pickupDate}
                            onSelect={(date) => setFormData({...formData, pickupDate: date})}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Pickup Location *</Label>
                      <Select
                        value={formData.pickupLocation}
                        onValueChange={(value) => setFormData({...formData, pickupLocation: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose pickup location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="campus">Campus Pickup (Free)</SelectItem>
                          <SelectItem value="showroom-central">Central Showroom</SelectItem>
                          <SelectItem value="showroom-north">North Showroom</SelectItem>
                          <SelectItem value="showroom-south">South Showroom</SelectItem>
                          <SelectItem value="home">Home Delivery (+₹200)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Live Pricing Calculator */}
                  <PricingCalculator 
                    bikeType={formData.bikeType}
                    duration={formData.duration}
                    isStudent={isStudent}
                    pickupLocation={formData.pickupLocation}
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 4: Review & Payment */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Review & Confirm Booking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Booking Summary */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Booking Summary</h4>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="font-medium">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email:</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phone:</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        {isStudent && (
                          <div className="flex justify-between">
                            <span>Student ID:</span>
                            <span className="font-medium">{formData.studentId}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Bike Type:</span>
                          <span className="font-medium">
                            {bikeOptions.find(b => b.value === formData.bikeType)?.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium capitalize">{formData.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pickup Date:</span>
                          <span className="font-medium">
                            {formData.pickupDate ? format(formData.pickupDate, "PPP") : "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pickup Location:</span>
                          <span className="font-medium capitalize">
                            {formData.pickupLocation?.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Final Pricing */}
                    <div className="space-y-4">
                      <PricingCalculator 
                        bikeType={formData.bikeType}
                        duration={formData.duration}
                        isStudent={isStudent}
                        pickupLocation={formData.pickupLocation}
                        showDetailed={true}
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="lg" variant="hero" className="px-12">
                          Confirm Booking & Pay
                        </Button>
                      </motion.div>
                      <p className="text-sm text-muted-foreground mt-2">
                        You'll be redirected to secure payment gateway
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="hero"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <Button
          variant="hero"
          onClick={nextStep}
          disabled={currentStep === 4}
          className="flex items-center gap-2"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default RentForm;