
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import MobileContainer from '@/components/MobileContainer';
import { useToast } from '@/hooks/use-toast';

const AadhaarSuccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Show toast notification
    toast({
      title: "Redirecting...",
      description: "Please wait while we redirect you to eSign Transaction page",
      duration: 3000,
    });

    // Redirect after 3 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/e-sign-transaction');
    }, 3000);

    // Clear the timeout when component unmounts
    return () => clearTimeout(redirectTimer);
  }, [navigate, toast]);

  const content = (
    <div className="min-h-screen bg-white flex flex-col font-ubuntu text-[#333]">
      {/* Header with Protean logo */}
      <div className="bg-white p-4 border-b">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/98650108-79a0-4a2d-8de9-01ac6cc631b2.png" 
            alt="Protean Logo" 
            className="h-12" 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-1">
        {/* Transaction details section */}
        <div className="text-center mb-4">
          <p className="font-semibold text-sm">Syntizen Technologies Private Limited</p>
          <p className="text-xs">has requested to Digitally sign the document</p>
          <p className="text-xs mb-3">Transaction ID: UKC-eSign:991332 dated 2024-12-31T15:59:45</p>
        </div>
        
        {/* Success message */}
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle size={48} className="text-[#32CD32]" />
          </div>
          <p className="text-lg font-semibold text-center">Success! OTP verified.</p>
          <p className="text-sm text-gray-600 text-center">
            Your Aadhaar authentication was successful. You are being redirected to the next step.
          </p>
        </div>
        
        {/* Help text */}
        <div className="text-center text-[#0056D2] text-xs pt-6">
          <a href="#" className="underline">Click Here</a> to generate Virtual ID. <a href="#" className="underline">Download Instructions</a> to generate Virtual ID in lieu of Aadhaar.
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-gray-500 border-t">
        <p>Copyright © 2023 | Protean eGov Technologies Limited</p>
        <p>(Formerly NSDL e-Governance Infrastructure Limited)</p>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default AadhaarSuccess;
