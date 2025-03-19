
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, Briefcase, DollarSign, HelpCircle, FileDigit } from 'lucide-react';
import FormField from '@/components/FormField';
import { Checkbox } from '@/components/ui/checkbox';
import MobileContainer from '@/components/MobileContainer';

const IndividualEmployeeDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualIncome: '',
    uanNumber: '',
    otherIncome: ''
  });
  const [consentChecked, setConsentChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Navigate to the Finding Best Offers page
    navigate('/finding-best-offers');
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#0056D2] to-[#0078FF] text-white p-6">
        <div className="flex items-center gap-2 mb-1">
          <User className="h-5 w-5" />
          <h1 className="text-2xl font-semibold">Individual Account Type</h1>
        </div>
        <p className="text-sm opacity-90 mt-1">
          Please enter your employment and income information
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/individual/address')}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2"
        >
          Back
        </Button>
        
        <div className="max-w-md mx-auto font-ubuntu">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-5 w-5 text-[#0056D2]" />
            <p className="text-gray-600">Complete your employment details</p>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
              <FormField
                label="Annual Income:"
                htmlFor="annualIncome"
              >
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gray-50 border-r border-gray-100 rounded-l-md">
                    <DollarSign className="h-5 w-5 text-gray-500" />
                  </div>
                  <Input
                    id="annualIncome"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    className="loan-input pl-14"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">(in lakhs)</span>
                </div>
              </FormField>
              
              <div className="bg-blue-50 rounded-md p-3 mb-4 flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <p className="text-xs text-blue-600">Your annual income helps us determine your loan eligibility. Higher income may qualify you for better offers.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
              <FormField
                label="UAN number:"
                htmlFor="uanNumber"
              >
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gray-50 border-r border-gray-100 rounded-l-md">
                    <FileDigit className="h-5 w-5 text-gray-500" />
                  </div>
                  <Input
                    id="uanNumber"
                    name="uanNumber"
                    value={formData.uanNumber}
                    onChange={handleChange}
                    className="loan-input pl-14"
                    placeholder="Enter your 12-digit UAN"
                  />
                </div>
              </FormField>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
              <FormField
                label="Other income:"
                htmlFor="otherIncome"
              >
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gray-50 border-r border-gray-100 rounded-l-md">
                    <DollarSign className="h-5 w-5 text-gray-500" />
                  </div>
                  <Input
                    id="otherIncome"
                    name="otherIncome"
                    value={formData.otherIncome}
                    onChange={handleChange}
                    className="loan-input pl-14"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">(in lakhs)</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Include rental income, dividends, or any other sources of income</p>
              </FormField>
            </div>
            
            {/* Consent checkbox */}
            <div className="bg-blue-50 rounded-md p-4 mb-6 border border-blue-100">
              <div className="flex items-start gap-2">
                <Checkbox 
                  id="consent" 
                  checked={consentChecked} 
                  onCheckedChange={() => setConsentChecked(!consentChecked)}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-blue-700">
                  I consent to proceed with this application and acknowledge that my information will be used to match me with appropriate loan offers.
                </label>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                type="submit"
                disabled={!consentChecked}
                className={`loan-button w-full ${!consentChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Find Best Offers
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default IndividualEmployeeDetails;
