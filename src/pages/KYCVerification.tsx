
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, FileText, Video, Upload } from 'lucide-react';

const KYCVerification = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    if (optionId === 'upload') {
      // If "Upload Documents" is selected, navigate directly to the upload page
      navigate('/upload-documents');
    }
  };

  const handleProceed = () => {
    if (selectedOption === 'upload') {
      navigate('/upload-documents');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4 font-ubuntu">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-loan-blue text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">KYC Verification</h1>
        
        <div className="flex flex-col gap-4 mb-8">
          {/* eKYC Option */}
          <div className={`p-5 rounded-xl border ${selectedOption === 'ekyc' ? 'border-loan-green bg-green-50' : 'border-gray-200'} cursor-pointer transition-all duration-200`}>
            <div className="flex items-center gap-4" onClick={() => handleOptionSelect('ekyc')}>
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                <FileText className="h-6 w-6 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-700">eKYC (Aadhaar based)</h3>
                <p className="text-gray-500 text-sm">Verify instantly using your Aadhaar and OTP</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">
                Disabled
              </div>
            </div>
          </div>
          
          {/* Video KYC Option */}
          <div className={`p-5 rounded-xl border ${selectedOption === 'video' ? 'border-loan-green bg-green-50' : 'border-gray-200'} cursor-pointer transition-all duration-200`}>
            <div className="flex items-center gap-4" onClick={() => handleOptionSelect('video')}>
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Video className="h-6 w-6 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-700">Video KYC</h3>
                <p className="text-gray-500 text-sm">Complete verification through a short video call</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">
                Disabled
              </div>
            </div>
          </div>
          
          {/* Upload Documents Option */}
          <div 
            className={`p-5 rounded-xl border ${selectedOption === 'upload' ? 'border-red-500' : 'border-gray-200'} ${selectedOption === 'upload' ? 'ring-2 ring-red-200' : ''} cursor-pointer transition-all duration-200`}
            onClick={() => handleOptionSelect('upload')}
          >
            <div className="flex items-center gap-4">
              <div className={`${selectedOption === 'upload' ? 'bg-red-500' : 'bg-gray-100'} rounded-full w-12 h-12 flex items-center justify-center`}>
                <Upload className={`h-6 w-6 ${selectedOption === 'upload' ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-700">Upload Documents</h3>
                <p className="text-gray-500 text-sm">Submit your ID and address proof documents</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">
                Available
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-auto">
          <Button 
            onClick={handleProceed}
            disabled={selectedOption === null}
            className="loan-button w-full"
          >
            Proceed with Document Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KYCVerification;
