
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileContainer from '@/components/MobileContainer';

const DocumentVerification = () => {
  const navigate = useNavigate();

  const content = (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-loan-blue text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="border-b pb-3 mb-4">
          <h1 className="text-xl font-bold text-loan-blue text-center">KYC Verification</h1>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2 mb-2">
            <Check className="text-loan-green h-5 w-5 mt-0.5" />
            <div>
              <h2 className="font-medium text-green-800">Verification Documents Uploaded</h2>
              <p className="text-sm text-green-600">Your documents have been successfully submitted.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-md p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">ID Proof (Front)</p>
                <p className="text-xs text-gray-500">Uploaded</p>
              </div>
              <Check className="text-loan-green h-5 w-5" />
            </div>
            
            <div className="bg-white rounded-md p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">ID Proof (Back)</p>
                <p className="text-xs text-gray-500">Uploaded</p>
              </div>
              <Check className="text-loan-green h-5 w-5" />
            </div>
            
            <div className="bg-white rounded-md p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Address Proof (Front)</p>
                <p className="text-xs text-gray-500">Uploaded</p>
              </div>
              <Check className="text-loan-green h-5 w-5" />
            </div>
            
            <div className="bg-white rounded-md p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Address Proof (Back)</p>
                <p className="text-xs text-gray-500">Uploaded</p>
              </div>
              <Check className="text-loan-green h-5 w-5" />
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2 mb-3">
            <Info className="text-loan-blue h-5 w-5 mt-0.5" />
            <h3 className="font-medium text-loan-blue">What happens next?</h3>
          </div>
          
          <ul className="text-sm text-gray-700 space-y-2 pl-7">
            <li className="list-disc">Our team will verify your documents within 24-48 hours</li>
            <li className="list-disc">You'll receive updates via SMS and email</li>
            <li className="list-disc">Once verified, you can proceed with your application</li>
          </ul>
        </div>
        
        <div className="flex justify-center mt-6">
          <Button 
            onClick={() => navigate('/application-in-process')}
            className="loan-button w-full max-w-md flex items-center justify-center gap-2"
          >
            Continue to Application Process
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default DocumentVerification;
