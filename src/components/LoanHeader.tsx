
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoanHeaderProps {
  title: string;
  showBack?: boolean;
  previousPath?: string;
}

const LoanHeader: React.FC<LoanHeaderProps> = ({ 
  title, 
  showBack = true, 
  previousPath 
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (previousPath) {
      navigate(previousPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
        )}
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </div>
      <div className="w-12 h-12 rounded-full bg-loan-red flex items-center justify-center text-white font-bold">
        L
      </div>
    </div>
  );
};

export default LoanHeader;
