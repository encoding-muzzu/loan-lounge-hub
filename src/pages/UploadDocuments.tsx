
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Check, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';

interface DocumentFile {
  file: File | null;
  uploaded: boolean;
}

const UploadDocuments = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<Record<string, DocumentFile>>({
    panFront: { file: null, uploaded: false },
    aadhaarFront: { file: null, uploaded: false },
    aadhaarBack: { file: null, uploaded: false },
    incomeProof: { file: null, uploaded: false }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, documentType: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setDocuments(prev => ({
        ...prev,
        [documentType]: { file, uploaded: true }
      }));
      toast.success(`${documentType} uploaded successfully`);
    }
  };

  const handleSubmit = () => {
    // Navigate to document verification screen
    navigate('/document-verification');
  };

  const allDocumentsUploaded = Object.values(documents).every(doc => doc.uploaded);

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
          <div className={`p-4 rounded-md border ${documents.panFront.uploaded ? 'border-loan-green' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">PAN Card (Front)</span>
              {documents.panFront.uploaded && <Check className="text-loan-green h-5 w-5" />}
            </div>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                id="panFront"
                onChange={(e) => handleFileChange(e, 'panFront')}
                className="hidden"
                accept="image/*,.pdf"
              />
              <label 
                htmlFor="panFront" 
                className="flex items-center gap-2 text-sm text-loan-blue cursor-pointer hover:underline"
              >
                <Upload size={16} />
                {documents.panFront.file ? documents.panFront.file.name : 'Choose file'}
              </label>
            </div>
          </div>
          
          <div className={`p-4 rounded-md border ${documents.aadhaarFront.uploaded ? 'border-loan-green' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Aadhaar Card (Front)</span>
              {documents.aadhaarFront.uploaded && <Check className="text-loan-green h-5 w-5" />}
            </div>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                id="aadhaarFront"
                onChange={(e) => handleFileChange(e, 'aadhaarFront')}
                className="hidden"
                accept="image/*,.pdf"
              />
              <label 
                htmlFor="aadhaarFront" 
                className="flex items-center gap-2 text-sm text-loan-blue cursor-pointer hover:underline"
              >
                <Upload size={16} />
                {documents.aadhaarFront.file ? documents.aadhaarFront.file.name : 'Choose file'}
              </label>
            </div>
          </div>
          
          <div className={`p-4 rounded-md border ${documents.aadhaarBack.uploaded ? 'border-loan-green' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Aadhaar Card (Back)</span>
              {documents.aadhaarBack.uploaded && <Check className="text-loan-green h-5 w-5" />}
            </div>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                id="aadhaarBack"
                onChange={(e) => handleFileChange(e, 'aadhaarBack')}
                className="hidden"
                accept="image/*,.pdf"
              />
              <label 
                htmlFor="aadhaarBack" 
                className="flex items-center gap-2 text-sm text-loan-blue cursor-pointer hover:underline"
              >
                <Upload size={16} />
                {documents.aadhaarBack.file ? documents.aadhaarBack.file.name : 'Choose file'}
              </label>
            </div>
          </div>
          
          <div className={`p-4 rounded-md border ${documents.incomeProof.uploaded ? 'border-loan-green' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Income Proof</span>
              {documents.incomeProof.uploaded && <Check className="text-loan-green h-5 w-5" />}
            </div>
            <div className="flex items-center gap-2">
              <Input 
                type="file" 
                id="incomeProof"
                onChange={(e) => handleFileChange(e, 'incomeProof')}
                className="hidden"
                accept="image/*,.pdf"
              />
              <label 
                htmlFor="incomeProof" 
                className="flex items-center gap-2 text-sm text-loan-blue cursor-pointer hover:underline"
              >
                <Upload size={16} />
                {documents.incomeProof.file ? documents.incomeProof.file.name : 'Choose file'}
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-auto">
          <Button 
            onClick={handleSubmit}
            disabled={!allDocumentsUploaded}
            className="loan-button w-full"
          >
            Submit Documents
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
