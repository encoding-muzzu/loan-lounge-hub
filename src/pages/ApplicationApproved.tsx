
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import { Card, CardContent } from '@/components/ui/card';

const ApplicationApproved = () => {
  const navigate = useNavigate();

  return (
    <StepLayout title="Application Status" showBack={false}>
      <div className="flex flex-col items-center max-w-md mx-auto">
        <Card className="w-full border-green-100 shadow-sm">
          <CardContent className="pt-8 pb-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3">Application Approved!</h2>
            
            <p className="text-gray-600 mb-6 max-w-xs">
              Congratulations! Your loan application has been approved. Please review the loan details below.
            </p>
            
            <div className="bg-gray-50 w-full p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Lender</span>
                <span className="font-semibold">Aditya Birla Finance Limited</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Loan Amount</span>
                <span className="font-semibold">₹6,00,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Interest Rate</span>
                <span className="font-semibold">16%</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tenure</span>
                <span className="font-semibold">36 months</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Monthly EMI</span>
                <span className="font-semibold">₹21,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee</span>
                <span className="font-semibold">₹3,000</span>
              </div>
            </div>
            
            <div className="w-full">
              <Button 
                onClick={() => navigate('/loan-documents')}
                className="w-full bg-[#32CD32] hover:bg-[#0056D2] text-white font-medium rounded-full py-3 flex items-center justify-center transition-colors"
              >
                Continue to Loan Documents
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </StepLayout>
  );
};

export default ApplicationApproved;
