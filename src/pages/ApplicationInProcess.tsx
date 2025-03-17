
import React from 'react';
import { Clock } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import StepLayout from '@/components/StepLayout';

const ApplicationInProcess = () => {
  return (
    <StepLayout title="Application Status" showBack={false}>
      <div className="flex flex-col max-w-2xl mx-auto">
        <Alert className="bg-blue-50 border-blue-100 mb-4">
          <Clock className="h-5 w-5 text-loan-blue" />
          <AlertTitle className="text-loan-blue font-bold">Application In Process</AlertTitle>
          <AlertDescription className="text-gray-700">
            Your application is being reviewed by the lender
          </AlertDescription>
        </Alert>
        
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-8">
          <div className="w-16 h-16 rounded-full bg-loan-blue flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-white" />
          </div>
          
          <p className="text-gray-700 max-w-md mb-4">
            Please wait while we process your application. This typically takes 24-48 hours.
          </p>
          
          <div className="flex gap-1 mt-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-loan-blue animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-loan-blue animate-pulse delay-150"></div>
            <div className="w-2 h-2 rounded-full bg-loan-blue animate-pulse delay-300"></div>
          </div>
          
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-loan-blue h-full w-1/3 animate-progress"></div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default ApplicationInProcess;
