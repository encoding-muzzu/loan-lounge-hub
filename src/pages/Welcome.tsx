
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '@/components/StepLayout';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0056D2] flex flex-col">
      {/* Header with blue background */}
      <div className="p-4 flex justify-between items-center text-white">
        <h2 className="text-xl font-medium">My Dashboard</h2>
        <div className="w-8 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-4 pt-2 pb-6 text-white">
        <h1 className="text-lg font-light mb-0">EasyLoan</h1>
        <p className="text-sm font-light text-blue-100 mb-4">Discover the Perfect Loan for You</p>
        
        <div className="w-full bg-blue-600 h-1 mb-1 rounded-full overflow-hidden">
          <div className="bg-[#32CD32] h-1 w-1/4 rounded-full"></div>
        </div>
        <p className="text-xs text-blue-100">Application Progress: 25% Complete</p>
      </div>

      {/* White Content Area with Cards */}
      <div className="flex-1 bg-white rounded-t-3xl p-6">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 rounded-full bg-[#0056D2] flex items-center justify-center text-white mx-auto mb-6">
            <img 
              src="/lovable-uploads/40d781d6-b290-470a-8a3c-949feaef014b.png" 
              alt="gro logo" 
              className="h-10 invert"
            />
          </div>
          
          <h1 className="text-2xl font-light text-center w-full mb-8 text-[#0056D2]">Discover the Perfect Loan for You</h1>
          
          <p className="text-gray-600 text-center mb-8 max-w-xs mx-auto font-light">
            Let's help you find the best loan offers tailored to your needs with just a few clicks
          </p>
          
          <button 
            onClick={() => navigate('/account-type')}
            className="w-full max-w-xs rounded-md bg-[#32CD32] hover:bg-green-600 text-white font-medium py-3 mx-auto block shadow-md"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
