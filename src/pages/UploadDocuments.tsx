
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Check, Upload, FileText, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import MobileContainer from '@/components/MobileContainer';

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

  // Document type labels for better display
  const documentLabels: Record<string, string> = {
    panFront: "PAN Card (Front)",
    aadhaarFront: "Aadhaar Card (Front)",
    aadhaarBack: "Aadhaar Card (Back)",
    incomeProof: "Income Proof"
  };

  const content = (
    <div className="min-h-screen bg-[#F6F7F9] flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A1F2C]">Upload Documents</h1>
          <p className="text-gray-500 mt-2">
            Please upload clear photos or scanned copies of the following documents
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mb-8">
          {Object.keys(documents).map((docKey) => (
            <div 
              key={docKey}
              className={`bg-white rounded-lg shadow-sm p-4 ${
                documents[docKey].uploaded 
                ? 'border-2 border-[#32CD32]' 
                : 'border border-gray-200'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-[#1A1F2C]">{documentLabels[docKey]}</span>
                {documents[docKey].uploaded && 
                  <span className="flex items-center text-[#32CD32] text-sm">
                    <Check className="h-4 w-4 mr-1" /> Uploaded
                  </span>
                }
              </div>
              
              <div className="relative">
                <Input 
                  type="file" 
                  id={docKey}
                  onChange={(e) => handleFileChange(e, docKey)}
                  className="hidden"
                  accept="image/*,.pdf"
                />
                <label 
                  htmlFor={docKey} 
                  className={`flex items-center justify-center gap-3 p-6 border-2 border-dashed rounded-lg w-full cursor-pointer transition-colors ${
                    documents[docKey].uploaded 
                    ? 'bg-[#F2FCE2] border-[#32CD32]/30 text-[#32CD32]' 
                    : 'bg-[#F1F0FB] border-[#0056D2]/30 text-[#0056D2] hover:bg-[#E5DEFF]'
                  }`}
                >
                  {documents[docKey].uploaded ? (
                    <FileText className="h-6 w-6" />
                  ) : (
                    <Upload className="h-6 w-6" />
                  )}
                  <div className="text-center">
                    {documents[docKey].file ? (
                      <span className="font-medium text-sm">{documents[docKey].file.name}</span>
                    ) : (
                      <>
                        <span className="font-medium">Choose file</span>
                        <p className="text-xs mt-1 text-gray-500">JPG, PNG or PDF</p>
                      </>
                    )}
                  </div>
                </label>
              </div>
              
              {!documents[docKey].uploaded && (
                <p className="flex items-center text-xs text-neutral-500 mt-2">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Max file size: 5MB
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-[#0056D2]">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Important Note</h4>
              <p className="text-xs text-gray-500 mt-1">
                Please ensure all documents are clear, uncut, and all information is visible.
                Blurry or incomplete documents may delay your application.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-auto">
          <Button 
            onClick={handleSubmit}
            className="w-full rounded-full bg-[#32CD32] hover:bg-green-600 text-white py-6 font-medium text-base shadow-md"
          >
            Submit Documents
          </Button>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default UploadDocuments;
