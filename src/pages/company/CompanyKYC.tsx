
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Building, Shield } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const CompanyKYC = () => {
  const navigate = useNavigate();
  const [kycOption, setKycOption] = useState<string>('ekyc');

  const handleOptionChange = (value: string) => {
    setKycOption(value);
  };

  const handleBack = () => {
    navigate('/company/documents');
  };

  const handleNext = () => {
    // This would typically lead to the next screen in the flow
    // For now we'll navigate to the welcome page as a placeholder
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={handleBack} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Building className="h-5 w-5 text-[#0056D2]" />
          <h1 className="text-xl font-semibold">Private Limited <span className="text-[#0056D2]">KYC Verification</span></h1>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-5 w-5 text-[#0056D2]" />
          <p className="text-gray-600">Please select one of the KYC verification methods below</p>
        </div>

        <div className="mb-8">
          <RadioGroup 
            value={kycOption}
            onValueChange={handleOptionChange}
            className="space-y-4"
          >
            <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-md">
              <RadioGroupItem value="ekyc" id="ekyc" className="mt-1" />
              <div>
                <Label htmlFor="ekyc" className="font-medium">eKYC</Label>
                <p className="text-sm text-gray-500 mt-1">
                  Complete your KYC electronically using your Aadhaar and PAN details.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-md">
              <RadioGroupItem value="vkyc" id="vkyc" className="mt-1" />
              <div>
                <Label htmlFor="vkyc" className="font-medium">Video KYC (VKYC)</Label>
                <p className="text-sm text-gray-500 mt-1">
                  Complete your KYC through a video call with our verification team.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-md">
              <RadioGroupItem value="documents" id="documents" className="mt-1" />
              <div>
                <Label htmlFor="documents" className="font-medium">Upload Documents</Label>
                <p className="text-sm text-gray-500 mt-1">
                  Upload documents for ID and address proof verification.
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-end mt-8">
          <Button 
            onClick={handleNext}
            className="rounded-md px-6 bg-[#32CD32] hover:bg-green-600 text-white"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyKYC;
