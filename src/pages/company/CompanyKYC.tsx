
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building, Shield, FileText, Video, Upload, ChevronLeft } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import MobileContainer from '@/components/MobileContainer';

const CompanyKYC = () => {
  const navigate = useNavigate();
  const [kycOption, setKycOption] = useState<string>('documents');
  const [consentChecked, setConsentChecked] = useState(false);

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

  const content = (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#0056D2] to-[#0078FF] text-white p-6">
        <div className="flex items-center gap-2 mb-1">
          <Building className="h-5 w-5" />
          <h1 className="text-2xl font-semibold">Private Limited Account Type</h1>
        </div>
        <p className="text-sm opacity-90 mt-1">
          Please select one of the KYC verification methods below
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2 flex items-center"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Building className="h-5 w-5 text-[#0056D2]" />
            <h1 className="text-xl font-semibold">Private Limited <span className="text-[#0056D2]">KYC Verification</span></h1>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-[#0056D2]" />
            <p className="text-gray-600">Please select one of the KYC verification methods below</p>
          </div>

          <div className="flex flex-col gap-6 mb-8">
            {/* eKYC Option */}
            <div className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex p-5">
                <div className="mr-4 bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-700">eKYC (Aadhaar based)</h3>
                  <p className="text-gray-500">Verify instantly using your Aadhaar and OTP</p>
                </div>
                <div className="flex items-center">
                  <span className="px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">
                    Disabled
                  </span>
                </div>
              </div>
            </div>
            
            {/* Video KYC Option */}
            <div className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex p-5">
                <div className="mr-4 bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center">
                  <Video className="h-6 w-6 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-700">Video KYC</h3>
                  <p className="text-gray-500">Complete verification through a short video call</p>
                </div>
                <div className="flex items-center">
                  <span className="px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">
                    Disabled
                  </span>
                </div>
              </div>
            </div>
            
            {/* Upload Documents Option */}
            <div 
              className={`rounded-2xl shadow-sm overflow-hidden cursor-pointer ${kycOption === 'documents' ? 'border-2 border-[#0056D2]' : 'border border-gray-100'}`}
              onClick={() => handleOptionChange('documents')}
            >
              <div className="flex p-5">
                <div className={`mr-4 ${kycOption === 'documents' ? 'bg-[#0056D2]' : 'bg-gray-100'} rounded-full w-14 h-14 flex items-center justify-center`}>
                  <Upload className={`h-6 w-6 ${kycOption === 'documents' ? 'text-white' : 'text-gray-500'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-700">Upload Documents</h3>
                  <p className="text-gray-500">Submit your ID and address proof documents</p>
                </div>
                <div className="flex items-center">
                  <span className="px-4 py-1 rounded-full bg-green-50 text-green-600 text-sm">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Consent checkbox */}
          <div className="mb-6 flex items-start gap-2">
            <Checkbox 
              id="consent" 
              checked={consentChecked}
              onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm">
              I consent to the KYC verification process and understand my identity documents will be verified for loan processing
            </Label>
          </div>

          <div className="flex justify-end mt-8">
            <Button 
              onClick={handleNext}
              className="bg-[#32CD32] hover:bg-green-600 text-white"
              disabled={!consentChecked}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default CompanyKYC;
