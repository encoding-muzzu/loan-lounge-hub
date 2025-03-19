
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileContainer from '@/components/MobileContainer';

const ESignAgreement = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/aadhaar-auth');
  };

  const handleViewDocument = () => {
    // This would open the document for viewing
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col p-4 font-ubuntu">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center pb-16">
        {/* PDF Icon */}
        <div className="mb-6">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="10" width="80" height="100" fill="white" stroke="black" strokeWidth="2"/>
            <path d="M70 30 L100 30 L70 0 Z" fill="black"/>
            <text x="40" y="70" fontWeight="bold" fontSize="16" fill="black">PDF</text>
          </svg>
        </div>

        <h2 className="text-2xl font-bold mb-8">E-sign agreement</h2>
        
        <button 
          onClick={handleViewDocument}
          className="bg-white border border-[#0056D2] text-[#0056D2] rounded-md px-6 py-2 mb-6"
        >
          View Document
        </button>

        <Button 
          onClick={handleProceed}
          className="w-full max-w-md bg-[#0056D2] text-white rounded-md py-3"
        >
          Proceed
        </Button>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default ESignAgreement;
