
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Menu } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#ff5757] flex items-center justify-center text-white">
              <Calculator className="w-6 h-6" />
            </div>
            <span className="ml-2 font-light text-xl text-[#0056D2]">EasyLoan</span>
          </div>
          <Menu className="w-6 h-6 text-gray-800" />
        </div>
        
        {/* Main Content */}
        <div className="px-6 py-12 flex flex-col items-center">
          <h1 className="text-2xl font-light text-center mb-8">
            Discover the Perfect Loan for You
          </h1>
          
          <div className="w-20 h-20 rounded-full bg-[#ff5757] flex items-center justify-center text-white mb-8">
            <Calculator className="h-8 w-8" />
          </div>
          
          <p className="text-gray-600 text-center mb-10 font-light max-w-xs">
            Let's help you find the best loan offers tailored to your needs with just a few clicks
          </p>
          
          <button 
            onClick={() => navigate('/account-type')}
            className="w-full max-w-xs rounded-md bg-[#ff5757] hover:bg-[#e64a4a] text-white font-light py-3 transition-all duration-300"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
