
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
            className={`rounded-2xl shadow-sm overflow-hidden cursor-pointer ${selectedOption === 'upload' ? 'border-2 border-red-500' : 'border border-gray-100'}`}
            onClick={() => handleOptionSelect('upload')}
          >
            <div className="flex p-5">
              <div className={`mr-4 ${selectedOption === 'upload' ? 'bg-red-500' : 'bg-gray-100'} rounded-full w-14 h-14 flex items-center justify-center`}>
                <Upload className={`h-6 w-6 ${selectedOption === 'upload' ? 'text-white' : 'text-gray-500'}`} />
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
        
        <div className="flex justify-center mt-8">
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
