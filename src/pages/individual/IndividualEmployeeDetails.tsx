
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';
import { User, Briefcase } from 'lucide-react';

const IndividualEmployeeDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualIncome: '',
    uanNumber: '',
    otherIncome: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Navigate to the Finding Best Offers page instead of Welcome
    navigate('/finding-best-offers');
  };

  return (
    <StepLayout title="" backUrl="/individual/address">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center gap-2 mb-2">
          <User className="h-5 w-5 text-[#0056D2]" />
          <h1 className="text-xl font-semibold">Individual <span className="text-[#0056D2]">Employment Details</span></h1>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5 text-[#0056D2]" />
          <p className="text-gray-600">Please enter your employment and income information</p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <FormField
            label="Annual Income:"
            htmlFor="annualIncome"
          >
            <div className="relative">
              <Input
                id="annualIncome"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                className="loan-input pl-8"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">(in lakhs)</span>
            </div>
          </FormField>
          
          <FormField
            label="UAN number:"
            htmlFor="uanNumber"
          >
            <Input
              id="uanNumber"
              name="uanNumber"
              value={formData.uanNumber}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Other income:"
            htmlFor="otherIncome"
          >
            <div className="relative">
              <Input
                id="otherIncome"
                name="otherIncome"
                value={formData.otherIncome}
                onChange={handleChange}
                className="loan-input pl-8"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">(in lakhs)</span>
            </div>
          </FormField>
          
          <div className="flex justify-center mt-8">
            <Button 
              type="submit"
              className="loan-button w-full"
            >
              Proceed with consent
            </Button>
          </div>
        </form>
      </div>
    </StepLayout>
  );
};

export default IndividualEmployeeDetails;
