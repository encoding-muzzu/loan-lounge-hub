
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import MobileContainer from '@/components/MobileContainer';

const CompanyDocuments = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/company/details-next');
  };

  const handleNext = () => {
    // Ensure the verification count is set to 1 for private limited company flow
    sessionStorage.setItem('verificationCount', '1');
    
    console.log("CompanyDocuments: Setting verification count to 1 for private limited");
    navigate('/company/kyc');
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0056D2] to-[#0078FF] text-white p-6">
        <h1 className="text-2xl font-semibold">Company Documents</h1>
        <p className="text-sm opacity-90 mt-1">
          Please provide the required documents for your company
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2 flex items-center"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        {/* Document Upload Form would go here */}
        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0056D2]">Required Documents</h2>
          <p className="text-gray-600">
            This is a placeholder for company document uploads. In a real application, you would see 
            file upload controls here for required company documents.
          </p>
        </div>
        
        <div className="flex justify-end mt-8">
          <Button 
            onClick={handleNext}
            className="bg-[#32CD32] hover:bg-green-600 text-white"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default CompanyDocuments;
