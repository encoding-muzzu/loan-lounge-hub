
import React from 'react';
import { Link } from 'react-router-dom';

const LoanHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-loan-red text-white flex items-center justify-center font-bold">L</div>
          <span className="font-bold text-xl">Loan Lounge</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/welcome" className="text-gray-600 hover:text-loan-red transition-colors">Home</Link>
          <Link to="/support" className="text-gray-600 hover:text-loan-red transition-colors">Support</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-loan-red hover:text-red-700 transition-colors font-medium">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default LoanHeader;
