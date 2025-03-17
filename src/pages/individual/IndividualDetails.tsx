
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';

const IndividualDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    panNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // In a real app, we would validate the form here
    navigate('/individual/address');
  };

  return (
    <StepLayout title="" backUrl="/account-type">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-lg font-medium mb-4">Enter your <span className="text-[#E53935]">Details:</span></h1>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <FormField
            label="Full Name:"
            htmlFor="fullName"
          >
            <Input
              id="fullName"
              name="fullName"
              placeholder="E.g. John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Email:"
            htmlFor="email"
          >
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@example.com"
              value={formData.email}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Mobile number:"
            htmlFor="mobileNumber"
          >
            <Input
              id="mobileNumber"
              name="mobileNumber"
              placeholder="+91 XXXXXXXXXX"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="PAN Number:"
            htmlFor="panNumber"
          >
            <Input
              id="panNumber"
              name="panNumber"
              placeholder="ABCDE1111A"
              value={formData.panNumber}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <div className="flex justify-end mt-6">
            <Button 
              type="submit"
              className="rounded-full bg-[#E53935] hover:bg-red-700 text-white px-6 py-2"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </StepLayout>
  );
};

export default IndividualDetails;
