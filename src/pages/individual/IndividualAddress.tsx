
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';
import { MapPin } from 'lucide-react';

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
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-5 w-5 text-[#0056D2]" />
          <h1 className="text-xl font-semibold">Personal <span className="text-[#0056D2]">Address Details</span></h1>
        </div>
        
        <p className="text-gray-600 mb-6">Please enter your current residential address information</p>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <FormField
            label="Address line 1:"
            htmlFor="addressLine1"
          >
            <Input
              id="addressLine1"
              name="addressLine1"
              placeholder="House/Flat/Building No., Street Name"
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
              placeholder="Colony/Locality/Area (Optional)"
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
              placeholder="City/Town/Village"
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
              placeholder="State/Union Territory"
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
              placeholder="Country"
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
              placeholder="6-digit pincode"
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
