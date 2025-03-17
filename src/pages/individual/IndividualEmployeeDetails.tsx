
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';

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
    // In a real app, we would validate and submit the form here
    alert('Form submitted successfully! Next steps would include document uploading and KYC verification.');
    navigate('/welcome');
  };

  return (
    <StepLayout title="" backUrl="/individual/address">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-xl font-bold mb-6">Employee Details</h1>
        
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
              className="rounded-full bg-[#E53935] hover:bg-red-700 text-white px-6 py-2 w-full"
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
