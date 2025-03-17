
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const LoanHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#ff5252] text-white flex items-center justify-center font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
              <line x1="12" x2="12" y1="18" y2="18" />
              <line x1="8" x2="16" y1="6" y2="6" />
              <line x1="8" x2="16" y1="10" y2="10" />
              <line x1="8" x2="16" y1="14" y2="14" />
            </svg>
          </div>
          <span className="font-bold text-xl">EasyLoan</span>
        </Link>
        
        <div className="flex items-center">
          <Menu className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
};

export default LoanHeader;
