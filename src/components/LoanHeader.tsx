
import React from 'react';
import { Link } from 'react-router-dom';

const LoanHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/40d781d6-b290-470a-8a3c-949feaef014b.png" 
            alt="EasyLoan logo" 
            className="h-8"
          />
          <span className="font-bold text-xl text-[#0056D2]">EasyLoan</span>
        </Link>
      </div>
    </header>
  );
};

export default LoanHeader;
