
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu } from 'lucide-react';

const KYCVerification = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { id: 'instructions', label: 'Instructions' },
    { id: 'ekyc', label: 'eKYC' },
    { id: 'video', label: 'Video KYC' },
    { id: 'upload', label: 'Upload Documents' },
  ];

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
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-loan-blue text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-xl font-bold mb-6">KYC Verification</h1>
        
        <div className="flex flex-col gap-4 mb-8">
          {options.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-md border cursor-pointer text-center ${
                selectedOption === option.id ? 'border-loan-green bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <span className="font-medium">{option.label}</span>
            </div>
          ))}
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
