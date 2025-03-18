
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield } from 'lucide-react';
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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#0056D2] to-[#0078FF] text-white p-6">
        <h1 className="text-2xl font-semibold">Personal Details</h1>
        <p className="text-sm opacity-90 mt-1">
          We need your details to match you with the best lenders
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/account-type')}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2"
        >
          Back
        </Button>
        
        <Card className="p-6 shadow-sm mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Your Details</h2>
          
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="E.g. John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border rounded-md w-full h-11"
                  />
                </div>
                
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="border rounded-md w-full h-11"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="user@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded-md w-full h-11"
                  />
                </div>
                
                <div>
                  <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                  <Input
                    id="panNumber"
                    name="panNumber"
                    placeholder="ABCDE1234F"
                    value={formData.panNumber}
                    onChange={handleChange}
                    className="border rounded-md w-full h-11"
                  />
                </div>
              </div>
            </div>
            
            {/* Consent box */}
            <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-blue-800 font-medium">Consent Required</h3>
                  <p className="text-sm text-blue-700">
                    By proceeding, you consent to a full bureau pull which allows us to match you with different lenders and their best offers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              Disclaimer: Final loan amount, interest rate, and term will be based on the lender's underwriting policies and your credit profile.
            </div>
            
            <div className="mt-6">
              <Button 
                type="submit"
                className="w-full bg-[#32CD32] hover:bg-green-600 text-white rounded-full h-12 font-medium"
              >
                Proceed with Consent
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default IndividualDetails;
