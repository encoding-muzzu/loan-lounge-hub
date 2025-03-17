
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '@/components/StepLayout';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <StepLayout title="" showBack={false}>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-72px)] px-4 md:px-0">
        <h1 className="text-2xl font-bold text-center w-full mb-8 text-[#0056D2]">Discover the Perfect Loan for You</h1>
        
        <div className="w-20 h-20 rounded-full bg-[#0056D2] flex items-center justify-center text-white mb-6">
          <img 
            src="/lovable-uploads/40d781d6-b290-470a-8a3c-949feaef014b.png" 
            alt="gro logo" 
            className="h-10 invert"
          />
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-xs">
          Let's help you find the best loan offers tailored to your needs with just a few clicks
        </p>
        
        <button 
          onClick={() => navigate('/account-type')}
          className="w-full max-w-xs rounded-md bg-[#32CD32] hover:bg-green-600 text-white font-medium py-3"
        >
          Get Started Now
        </button>
      </div>
    </StepLayout>
  );
};

export default Welcome;
