
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';
import StepLayout from '@/components/StepLayout';

const ProprietorDocuments = () => {
  const navigate = useNavigate();
  const [uploadedDocs, setUploadedDocs] = useState({
    pan: false,
    aadhaarFront: false,
    aadhaarBack: false,
    incomeProof: false
  });

  const handleFileChange = (docType: keyof typeof uploadedDocs) => {
    setUploadedDocs(prev => ({
      ...prev,
      [docType]: true
    }));
  };

  const handleContinue = () => {
    navigate('/proprietor/kyc');
  };

  // Removed the allDocsUploaded check since we want to enable the button for demo

  return (
    <StepLayout title="" backUrl="/proprietor/revenue">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-xl font-bold mb-6">Upload Documents</h1>
        
        <p className="mb-6 text-gray-600">
          Please upload the front of PAN and front and back images of your Aadhaar and income proof.
        </p>
        
        <div className="space-y-4">
          <div className="border border-gray-300 rounded-md p-4">
            <label className="block mb-2 text-sm font-medium">PAN Card (Front)</label>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                onChange={() => handleFileChange('pan')}
                className="hidden" 
                id="pan-upload"
              />
              <label 
                htmlFor="pan-upload"
                className="flex items-center gap-2 cursor-pointer p-2 border border-dashed border-gray-300 rounded-md w-full"
              >
                <Upload size={16} />
                <span>{uploadedDocs.pan ? 'File uploaded' : 'Upload file'}</span>
              </label>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-md p-4">
            <label className="block mb-2 text-sm font-medium">Aadhaar Card (Front)</label>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                onChange={() => handleFileChange('aadhaarFront')}
                className="hidden" 
                id="aadhaar-front-upload"
              />
              <label 
                htmlFor="aadhaar-front-upload"
                className="flex items-center gap-2 cursor-pointer p-2 border border-dashed border-gray-300 rounded-md w-full"
              >
                <Upload size={16} />
                <span>{uploadedDocs.aadhaarFront ? 'File uploaded' : 'Upload file'}</span>
              </label>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-md p-4">
            <label className="block mb-2 text-sm font-medium">Aadhaar Card (Back)</label>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                onChange={() => handleFileChange('aadhaarBack')}
                className="hidden" 
                id="aadhaar-back-upload"
              />
              <label 
                htmlFor="aadhaar-back-upload"
                className="flex items-center gap-2 cursor-pointer p-2 border border-dashed border-gray-300 rounded-md w-full"
              >
                <Upload size={16} />
                <span>{uploadedDocs.aadhaarBack ? 'File uploaded' : 'Upload file'}</span>
              </label>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-md p-4">
            <label className="block mb-2 text-sm font-medium">Income Proof</label>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                onChange={() => handleFileChange('incomeProof')}
                className="hidden" 
                id="income-proof-upload"
              />
              <label 
                htmlFor="income-proof-upload"
                className="flex items-center gap-2 cursor-pointer p-2 border border-dashed border-gray-300 rounded-md w-full"
              >
                <Upload size={16} />
                <span>{uploadedDocs.incomeProof ? 'File uploaded' : 'Upload file'}</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleContinue}
            className="bg-[#32CD32] hover:bg-green-600 text-white w-full"
          >
            Continue to Application Process
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};

export default ProprietorDocuments;
