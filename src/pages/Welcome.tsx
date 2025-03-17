
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '@/components/StepLayout';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <StepLayout title="" showBack={false}>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-72px)] px-4 md:px-0">
        <h1 className="text-2xl font-bold text-center w-full mb-8">Discover the Perfect Loan for You</h1>
        
        <div className="w-20 h-20 rounded-full bg-[#E53935] flex items-center justify-center text-white mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="8" x2="16" y1="10" y2="10" />
            <line x1="8" x2="16" y1="14" y2="14" />
            <line x1="8" x2="16" y1="18" y2="18" />
          </svg>
        </div>
        
        <p className="text-gray-600 text-center mb-8 max-w-xs">
          Let's help you find the best loan offers tailored to your needs with just a few clicks
        </p>
        
        <button 
          onClick={() => navigate('/account-type')}
          className="w-full max-w-xs rounded-md bg-[#E53935] text-white font-medium py-3"
        >
          Get Started Now
        </button>
      </div>
    </StepLayout>
  );
};

export default Welcome;
