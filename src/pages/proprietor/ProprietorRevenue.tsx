
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';

const ProprietorRevenue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualRevenue: '',
    uinNumber: '',
    otherIncome: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // In a real app, we would validate and submit the form here
    alert('Form submitted successfully! Next steps would include document uploading and KYC verification.');
    navigate('/welcome');
  };

  return (
    <StepLayout title="" backUrl="/proprietor/address">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-xl font-bold mb-6">Company Revenue</h1>
        
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <FormField
            label="Annual Revenue:"
            htmlFor="annualRevenue"
          >
            <div className="relative">
              <Input
                id="annualRevenue"
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleChange}
                className="loan-input pl-8"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">(in lakhs)</span>
            </div>
          </FormField>
          
          <FormField
            label="UIN number:"
            htmlFor="uinNumber"
          >
            <Input
              id="uinNumber"
              name="uinNumber"
              value={formData.uinNumber}
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
              className="bg-[#32CD32] hover:bg-green-600 text-white w-full"
            >
              Proceed with consent
            </Button>
          </div>
        </form>
      </div>
    </StepLayout>
  );
};

export default ProprietorRevenue;
