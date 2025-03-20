
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Building, ChevronLeft, IndianRupee, FileDigit } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import MobileContainer from '@/components/MobileContainer';

const ProprietorRevenue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualIncome: '',
    uinNumber: '',
    otherIncome: '',
  });
  const [consentChecked, setConsentChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Navigate to finding best offers page instead of KYC
    navigate('/finding-best-offers');
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
          Please enter your revenue details
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/proprietor/address')}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2 flex items-center"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <p className="text-base">Enter your <span className="font-bold">Revenue Details</span></p>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="mb-4">
              <Label htmlFor="annualIncome" className="block text-sm mb-1">Annual Income:</Label>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gray-50 border-r border-gray-100 rounded-l-md">
                  <IndianRupee className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="annualIncome"
                  name="annualIncome"
                  placeholder="Enter annual income"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  className="border rounded-md w-full pl-14 h-11"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="uinNumber" className="block text-sm mb-1">UIN Number:</Label>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gray-50 border-r border-gray-100 rounded-l-md">
                  <FileDigit className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="uinNumber"
                  name="uinNumber"
                  placeholder="Enter UIN number"
                  value={formData.uinNumber}
                  onChange={handleChange}
                  className="border rounded-md w-full pl-14 h-11"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="otherIncome" className="block text-sm mb-1">Other Income:</Label>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gray-50 border-r border-gray-100 rounded-l-md">
                  <IndianRupee className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="otherIncome"
                  name="otherIncome"
                  placeholder="Enter other income"
                  value={formData.otherIncome}
                  onChange={handleChange}
                  className="border rounded-md w-full pl-14 h-11"
                />
              </div>
            </div>
            
            {/* Consent box with checkbox */}
            <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="flex items-center h-5 mt-1">
                  <Checkbox 
                    id="consent" 
                    checked={consentChecked}
                    onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                  />
                </div>
                <div>
                  <label htmlFor="consent" className="text-blue-800 font-medium cursor-pointer">
                    I consent to sharing my financial information
                  </label>
                  <p className="text-sm text-blue-700 mt-1">
                    This information will be used to find the best loan offers for your business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <Button 
                type="submit"
                variant="loan"
                disabled={!consentChecked}
                className="bg-[#32CD32] hover:bg-[#0056D2] text-white rounded-full"
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

export default ProprietorRevenue;
