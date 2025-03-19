
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, FileText, Video, Upload } from 'lucide-react';
import MobileContainer from '@/components/MobileContainer';

const KYCVerification = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>('upload');

  const handleOptionSelect = (optionId: string) => {
    // Only allow selecting 'upload' option
    if (optionId === 'upload') {
      setSelectedOption(optionId);
    }
  };

  const handleProceed = () => {
    if (selectedOption === 'upload') {
      navigate('/upload-documents');
    }
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col p-4 font-ubuntu">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">KYC Verification</h1>
        
        <div className="flex flex-col gap-6 mb-8">
          {/* eKYC Option - Unavailable */}
          <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100">
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
                  Unavailable
                </span>
              </div>
            </div>
          </div>
          
          {/* Video KYC Option - Unavailable */}
          <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100">
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
                  Unavailable
                </span>
              </div>
            </div>
          </div>
          
          {/* Upload Documents Option - Available and Selected by default */}
          <div 
            className="rounded-2xl shadow-sm overflow-hidden cursor-pointer border-2 border-[#0056D2]"
            onClick={() => handleOptionSelect('upload')}
          >
            <div className="flex p-5">
              <div className="mr-4 bg-[#0056D2] rounded-full w-14 h-14 flex items-center justify-center">
                <Upload className="h-6 w-6 text-white" />
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
            className="bg-[#32CD32] hover:bg-green-600 text-white w-full"
          >
            Proceed with Document Upload
          </Button>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default KYCVerification;
