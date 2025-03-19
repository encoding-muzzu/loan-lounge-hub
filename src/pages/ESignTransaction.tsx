
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileContainer from '@/components/MobileContainer';

const ESignTransaction = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/nach-setup');
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col p-4 font-ubuntu">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">eSign Transaction Details</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center pb-16">
        {/* Success Icon */}
        <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
          <Check className="h-8 w-8 text-[#32CD32]" />
        </div>

        {/* Success Message */}
        <div className="text-center mb-10">
          <h3 className="text-[#32CD32] font-medium mb-1">
            eSign transaction completed successfully
          </h3>
          <p className="text-sm text-red-500 max-w-xs mx-auto">
            Click on Proceed button to continue. Do not refresh the page or close the application
          </p>
        </div>
        
        {/* Proceed Button */}
        <Button 
          onClick={handleProceed}
          className="w-full max-w-xs bg-[#0056D2] hover:bg-[#004BB9] text-white rounded-md py-3"
        >
          Proceed
        </Button>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default ESignTransaction;
