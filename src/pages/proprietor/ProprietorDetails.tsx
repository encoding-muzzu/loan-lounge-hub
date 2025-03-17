
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';

const ProprietorDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    contactNumber: '',
    email: '',
    gstin: '',
    cin: '',
    udhyam: '',
    panNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // In a real app, we would validate the form here
    navigate('/proprietor/address');
  };

  return (
    <StepLayout title="" backUrl="/account-type">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-lg font-medium mb-4">Enter your <span className="text-[#0056D2]">Details:</span></h1>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <FormField
            label="Full Name:"
            htmlFor="fullName"
          >
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Business Name:"
            htmlFor="businessName"
          >
            <Input
              id="businessName"
              name="businessName"
              placeholder="Enter your business name"
              value={formData.businessName}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Contact Number:"
            htmlFor="contactNumber"
          >
            <Input
              id="contactNumber"
              name="contactNumber"
              placeholder="+91 XXXXXXXXXX"
              value={formData.contactNumber}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Email ID:"
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
            label="GSTIN:"
            htmlFor="gstin"
          >
            <Input
              id="gstin"
              name="gstin"
              placeholder="Enter GSTIN"
              value={formData.gstin}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="CIN:"
            htmlFor="cin"
          >
            <Input
              id="cin"
              name="cin"
              placeholder="Enter CIN"
              value={formData.cin}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Udhyam:"
            htmlFor="udhyam"
          >
            <Input
              id="udhyam"
              name="udhyam"
              placeholder="Enter Udhyam"
              value={formData.udhyam}
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
              className="bg-[#32CD32] hover:bg-green-600 text-white"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </StepLayout>
  );
};

export default ProprietorDetails;
