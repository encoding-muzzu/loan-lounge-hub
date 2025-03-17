
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';

const IndividualAddress = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    pincode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // In a real app, we would validate the form here
    navigate('/individual/employee-details');
  };

  return (
    <StepLayout title="" backUrl="/individual/details">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-lg font-medium mb-4">Address:</h1>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <FormField
            label="Address line 1:"
            htmlFor="addressLine1"
          >
            <Input
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Address line 2:"
            htmlFor="addressLine2"
          >
            <Input
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="City:"
            htmlFor="city"
          >
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="State:"
            htmlFor="state"
          >
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Country:"
            htmlFor="country"
          >
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Pincode:"
            htmlFor="pincode"
          >
            <Input
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <div className="flex justify-end mt-6">
            <Button 
              type="submit"
              className="loan-button"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </StepLayout>
  );
};

export default IndividualAddress;
