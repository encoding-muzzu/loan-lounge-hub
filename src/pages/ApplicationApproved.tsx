
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Calendar, Percent, CreditCard, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import { Card } from '@/components/ui/card';

const ApplicationApproved = () => {
  const navigate = useNavigate();

  const loanTerms = [
    { label: 'Loan Amount', value: '₹3,00,000', icon: <CreditCard className="h-4 w-4" /> },
    { label: 'Interest Rate', value: '10.5%', icon: <Percent className="h-4 w-4" /> },
    { label: 'Monthly EMI', value: '₹6,500', icon: <Calendar className="h-4 w-4" /> },
    { label: 'Tenure', value: '60 months', icon: <Clock className="h-4 w-4" /> },
  ];
  
  return (
    <StepLayout title="" showBack={false}>
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Header with green background */}
        <div className="w-full bg-green-50 rounded-t-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-green-600 mb-1">
            <Check size={24} className="text-green-600" />
            <h2 className="text-xl font-bold">Application Approved!</h2>
          </div>
          <p className="text-green-600">Congratulations! Your loan has been approved</p>
        </div>
        
        {/* Checkmark icon in circle */}
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center -mt-4 z-10 shadow-lg">
          <Check size={32} className="text-white" />
        </div>
        
        {/* Loan terms section */}
        <Card className="w-full mt-6 p-6 border-green-100 shadow-sm">
          <h3 className="font-bold text-center text-xl mb-5">Loan Terms</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {loanTerms.map((term, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-green-600">
                    {term.icon}
                  </div>
                  <p className="text-sm text-gray-500">{term.label}</p>
                </div>
                <p className="font-bold text-lg">{term.value}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-5 bg-green-50 p-4 rounded-lg text-sm text-green-700 border border-green-200">
            <p className="flex items-center">
              <Check size={16} className="mr-2 shrink-0" />
              The funds will be disbursed to your account within 2-3 business days.
            </p>
          </div>
        </Card>
        
        {/* Button to proceed */}
        <div className="w-full mt-8">
          <Button 
            onClick={() => navigate('/welcome')}
            className="w-full bg-[#32CD32] hover:bg-green-600 text-white font-medium rounded-full py-3 flex items-center justify-center"
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
