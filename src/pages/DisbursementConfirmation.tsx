
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Download, Home, ArrowRight } from 'lucide-react';
import StepLayout from '@/components/StepLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MobileContainer from '@/components/MobileContainer';

const DisbursementConfirmation = () => {
  const navigate = useNavigate();
  
  const content = (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-50 p-4">
        <h1 className="text-lg font-light text-[#32CD32]">Loan Disbursement Confirmation</h1>
        <p className="text-sm text-gray-600 font-light">Your loan has been processed successfully</p>
      </div>
      
      <div className="p-4 max-w-md mx-auto animate-fade-in">
        {/* Success Message */}
        <div className="bg-green-50 p-4 rounded-lg mb-6 shadow-sm">
          <h2 className="text-[#32CD32] font-light">Disbursement Request Submitted</h2>
          <p className="text-gray-600 font-light">Your loan is now being processed for disbursement</p>
        </div>
        
        {/* Success Icon */}
        <div className="flex justify-center my-8">
          <div className="w-20 h-20 rounded-full bg-[#32CD32] flex items-center justify-center hover-scale">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
        </div>
        
        {/* Disbursement Timeline */}
        <div className="bg-green-50 p-4 rounded-lg text-center mb-8 shadow-sm">
          <p className="text-gray-600 font-light">
            Your loan will be disbursed to your bank account within 2-3 business days.
          </p>
        </div>
        
        {/* Next Steps */}
        <Card className="mb-8 border-gray-200 shadow-sm rounded-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-light text-gray-700">Next Steps</CardTitle>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-gray-600 font-light">
                You will receive an SMS notification when the funds are disbursed
              </li>
              <li className="text-gray-600 font-light">
                Your first EMI will be due 30 days after disbursement
              </li>
              <li className="text-gray-600 font-light">
                You can view your repayment schedule in the app
              </li>
              <li className="text-gray-600 font-light">
                For any queries, please contact our customer support
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Back to Home Button */}
        <Button 
          onClick={() => navigate('/welcome')}
          className="w-full bg-[#0056D2] hover:bg-[#004bb9] text-white rounded-full font-light"
        >
          Back to Home
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
  
  return <MobileContainer>{content}</MobileContainer>;
};

export default DisbursementConfirmation;
