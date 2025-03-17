
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';

const ApplicationNotApproved = () => {
  const navigate = useNavigate();

  return (
    <StepLayout title="Application Status" showBack={false}>
      <div className="flex flex-col items-center max-w-md mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
          <XCircle className="h-10 w-10 text-red-500" />
        </div>
        
        <h2 className="text-xl font-bold mb-2">This offer is not applicable.</h2>
        
        <p className="text-gray-600 mb-8">
          We're sorry, but your application for this offer cannot be processed at this time.
        </p>
        
        <div className="w-full">
          <Button 
            onClick={() => navigate('/available-offers')}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-full py-3 flex items-center justify-center"
          >
            Try a Different Offer
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};

export default ApplicationNotApproved;
