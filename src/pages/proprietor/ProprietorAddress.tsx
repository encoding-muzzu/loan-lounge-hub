
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Building, ChevronLeft } from 'lucide-react';
import FormField from '@/components/FormField';
import MobileContainer from '@/components/MobileContainer';

const ProprietorAddress = () => {
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
    navigate('/proprietor/revenue');
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#0056D2] to-[#0078FF] text-white p-6">
        <div className="flex items-center gap-2 mb-1">
          <Building className="h-5 w-5" />
          <h1 className="text-2xl font-semibold">Sole Proprietor Account Type</h1>
        </div>
        <p className="text-sm opacity-90 mt-1">
          Please enter your business's registered address
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/proprietor/details')}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2 flex items-center"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Building className="h-5 w-5 text-[#0056D2]" />
            <h1 className="text-xl font-semibold">Business <span className="text-[#0056D2]">Address Details</span></h1>
          </div>
          
          <p className="text-gray-600 mb-6">Please enter your business's registered address</p>
          
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <FormField
              label="Address line 1:"
              htmlFor="addressLine1"
            >
              <Input
                id="addressLine1"
                name="addressLine1"
                placeholder="Building/Shop No., Street Name"
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
                className="bg-[#32CD32] hover:bg-green-600 text-white"
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default ProprietorAddress;
