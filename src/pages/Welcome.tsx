
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <StepLayout title="Welcome" showBack={false}>
      <div className="flex flex-col items-center justify-center pb-10 px-4 md:px-0">
        <div className="w-24 h-24 rounded-full bg-loan-red flex items-center justify-center text-white mb-6">
          <span className="text-4xl font-bold">L</span>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">Welcome to Loan Lounge</h1>
        <p className="text-gray-600 text-center mb-8 max-w-md">
          Find the perfect loan tailored to your needs. Compare offers from multiple lenders and get approved quickly.
        </p>
        
        <div className="w-full max-w-md bg-loan-lightgray rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How it works</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-loan-red text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
              <p>Complete your profile with personal or business details</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-loan-red text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
              <p>Get matched with loan offers from multiple lenders</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-loan-red text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
              <p>Complete verification and receive funds quickly</p>
            </li>
          </ol>
        </div>
        
        <Button 
          onClick={() => navigate('/account-type')}
          className="loan-button px-8 py-6 text-base flex items-center gap-2"
        >
          Get Started <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </StepLayout>
  );
};

export default Welcome;
