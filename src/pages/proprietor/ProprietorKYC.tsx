
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import StepLayout from '@/components/StepLayout';

const ProprietorKYC = () => {
  const navigate = useNavigate();
  const [kycOption, setKycOption] = useState<string | null>(null);

  const handleContinue = () => {
    // In a real app, we would route based on the selected KYC option
    alert('KYC process initialized! The selected method is: ' + kycOption);
    navigate('/welcome');
  };

  return (
    <StepLayout title="" backUrl="/proprietor/documents">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-xl font-bold mb-6">KYC Verification</h1>
        
        <p className="mb-6 text-gray-600">
          Please select one of the following KYC verification methods to proceed with your application.
        </p>
        
        <RadioGroup value={kycOption || ""} onValueChange={setKycOption} className="space-y-4">
          <div className="border border-gray-300 rounded-md p-4 flex items-start gap-3">
            <RadioGroupItem value="ekyc" id="ekyc" className="mt-1" />
            <div>
              <Label htmlFor="ekyc" className="font-medium">Option 1: eKYC</Label>
              <p className="text-sm text-gray-600 mt-1">
                Complete KYC electronically using your Aadhaar and OTP verification. This is the fastest method.
              </p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-md p-4 flex items-start gap-3">
            <RadioGroupItem value="vkyc" id="vkyc" className="mt-1" />
            <div>
              <Label htmlFor="vkyc" className="font-medium">Option 2: VKYC (Video KYC)</Label>
              <p className="text-sm text-gray-600 mt-1">
                Complete verification through a video call with our representative. Requires scheduling an appointment.
              </p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-md p-4 flex items-start gap-3">
            <RadioGroupItem value="upload" id="upload" className="mt-1" />
            <div>
              <Label htmlFor="upload" className="font-medium">Option 3: Upload Documents</Label>
              <p className="text-sm text-gray-600 mt-1">
                Upload additional identity and address proof documents for manual verification.
              </p>
            </div>
          </div>
        </RadioGroup>
        
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleContinue}
            disabled={!kycOption}
            className="bg-[#32CD32] hover:bg-green-600 text-white w-full"
          >
            Proceed with {kycOption} Verification
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};

export default ProprietorKYC;
