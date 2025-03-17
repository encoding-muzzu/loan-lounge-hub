
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';

const ApplicationApproved = () => {
  const navigate = useNavigate();

  const loanTerms = [
    { label: 'Loan Amount', value: '₹3,00,000' },
    { label: 'Interest Rate', value: '10.5%' },
    { label: 'Monthly EMI', value: '₹6,500' },
    { label: 'Tenure', value: '60 months' },
  ];
  
  return (
    <StepLayout title="" showBack={false}>
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Header with green background */}
        <div className="w-full bg-green-50 rounded-t-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Check size={24} className="text-green-600" />
            <h2 className="text-xl font-bold">Application Approved!</h2>
          </div>
          <p className="text-green-600">Congratulations! Your loan has been approved</p>
        </div>
        
        {/* Checkmark icon in circle */}
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center -mt-4 z-10">
          <Check size={32} className="text-white" />
        </div>
        
        {/* Loan terms section */}
        <div className="w-full mt-6 text-center">
          <h3 className="font-bold text-lg mb-3">Loan Terms</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {loanTerms.map((term, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">{term.label}</p>
                <p className="font-bold text-lg">{term.value}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 bg-green-50 p-3 rounded-lg text-sm text-green-700">
            The funds will be disbursed to your account within 2-3 business days.
          </div>
        </div>
        
        {/* Button to proceed */}
        <div className="w-full mt-8">
          <Button 
            onClick={() => navigate('/welcome')}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-full py-3 flex items-center justify-center"
          >
            Proceed to Loan Agreement
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};

export default ApplicationApproved;
