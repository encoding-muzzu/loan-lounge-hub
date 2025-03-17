
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoanHeader from './LoanHeader';

interface StepLayoutProps {
  title: string;
  showBack?: boolean;
  backUrl?: string;
  children: React.ReactNode;
}

const StepLayout: React.FC<StepLayoutProps> = ({ 
  title, 
  showBack = true, 
  backUrl,
  children 
}) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    if (backUrl) {
      navigate(backUrl);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LoanHeader />
      
      <div className="flex-1 container mx-auto py-6 px-4">
        {showBack && (
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-2 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
        )}
        
        {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
        
        {children}
      </div>
    </div>
  );
};

export default StepLayout;
