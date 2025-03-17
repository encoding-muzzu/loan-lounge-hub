
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Check } from 'lucide-react';

const UploadDocuments = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState({
    panFront: false,
    aadhaarFront: false,
    aadhaarBack: false,
    incomeProof: false
  });

  const handleFileUpload = (documentType: keyof typeof documents) => {
    setDocuments(prev => ({
      ...prev,
      [documentType]: true
    }));
  };

  const handleSubmit = () => {
    // Navigate to welcome screen or another screen after document upload
    navigate('/welcome');
  };

  const allDocumentsUploaded = Object.values(documents).every(Boolean);

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
        <h1 className="text-xl font-bold mb-6">Upload Documents</h1>
        
        <div className="flex flex-col gap-4 mb-8">
          <div 
            className={`p-4 rounded-md border flex justify-between items-center ${
              documents.panFront ? 'border-loan-green' : 'border-gray-200'
            }`}
            onClick={() => handleFileUpload('panFront')}
          >
            <span className="font-medium">PAN Front</span>
            {documents.panFront && <Check className="text-loan-green h-5 w-5" />}
          </div>
          
          <div 
            className={`p-4 rounded-md border flex justify-between items-center ${
              documents.aadhaarFront ? 'border-loan-green' : 'border-gray-200'
            }`}
            onClick={() => handleFileUpload('aadhaarFront')}
          >
            <span className="font-medium">Aadhaar Front</span>
            {documents.aadhaarFront && <Check className="text-loan-green h-5 w-5" />}
          </div>
          
          <div 
            className={`p-4 rounded-md border flex justify-between items-center ${
              documents.aadhaarBack ? 'border-loan-green' : 'border-gray-200'
            }`}
            onClick={() => handleFileUpload('aadhaarBack')}
          >
            <span className="font-medium">Aadhaar Back</span>
            {documents.aadhaarBack && <Check className="text-loan-green h-5 w-5" />}
          </div>
          
          <div 
            className={`p-4 rounded-md border flex justify-between items-center ${
              documents.incomeProof ? 'border-loan-green' : 'border-gray-200'
            }`}
            onClick={() => handleFileUpload('incomeProof')}
          >
            <span className="font-medium">Income Proof</span>
            {documents.incomeProof && <Check className="text-loan-green h-5 w-5" />}
          </div>
        </div>
        
        <div className="flex justify-center mt-auto">
          <Button 
            onClick={handleSubmit}
            disabled={!allDocumentsUploaded}
            className="loan-button w-full"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
