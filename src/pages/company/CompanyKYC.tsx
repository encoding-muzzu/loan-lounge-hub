
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Building, Shield, FileText, Video, Upload } from 'lucide-react';

const CompanyKYC = () => {
  const navigate = useNavigate();
  const [kycOption, setKycOption] = useState<string>('documents');

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
    <div className="min-h-screen bg-white flex flex-col p-4 font-ubuntu">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-loan-blue text-white">
          <ArrowLeft size={20} onClick={handleBack} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Building className="h-5 w-5 text-loan-blue" />
          <h1 className="text-xl font-semibold">Private Limited <span className="text-loan-blue">KYC Verification</span></h1>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-5 w-5 text-loan-blue" />
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
            className={`rounded-2xl shadow-sm overflow-hidden cursor-pointer ${kycOption === 'documents' ? 'border-2 border-loan-blue' : 'border border-gray-100'}`}
            onClick={() => handleOptionChange('documents')}
          >
            <div className="flex p-5">
              <div className={`mr-4 ${kycOption === 'documents' ? 'bg-loan-blue' : 'bg-gray-100'} rounded-full w-14 h-14 flex items-center justify-center`}>
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

        <div className="flex justify-end mt-8">
          <Button 
            onClick={handleNext}
            className="loan-button"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyKYC;
