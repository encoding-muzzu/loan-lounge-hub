
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      {/* Mobile container with visible borders */}
      <div className="min-h-screen bg-[#0056D2] flex flex-col max-w-md w-full mx-auto border-2 border-gray-300 shadow-lg rounded-xl overflow-hidden">
        {/* Header with blue background */}
        <div className="p-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/40d781d6-b290-470a-8a3c-949feaef014b.png" 
              alt="EasyLoan logo" 
              className="h-6 invert"
            />
            <h2 className="text-xl font-medium">EasyLoan</h2>
          </div>
        </div>

        {/* Profile Section with descriptive heading */}
        <div className="px-4 pt-2 pb-8 text-white">
          <h1 className="text-3xl font-medium mb-2">EasyLoan</h1>
          <p className="text-sm font-light text-blue-100 mb-4">Simple, fast loan approvals for your financial needs</p>
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
    </div>
  );
};

export default Welcome;
