
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';
import { Card, CardContent } from '@/components/ui/card';

const ApplicationNotApproved = () => {
  const navigate = useNavigate();

  return (
    <StepLayout title="Application Status" showBack={false}>
      <div className="flex flex-col items-center max-w-md mx-auto">
        <Card className="w-full border-red-100 shadow-sm">
          <CardContent className="pt-8 pb-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
              <XCircle className="h-12 w-12 text-red-500" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3">This offer is not applicable</h2>
            
            <p className="text-gray-600 mb-6 max-w-xs">
              We're sorry, but your application for this offer cannot be processed at this time.
            </p>
            
            <div className="bg-red-50 w-full p-4 rounded-lg mb-6">
              <p className="text-sm text-red-700">
                You may still be eligible for our other loan products with different terms.
                We encourage you to explore alternative options.
              </p>
            </div>
            
            <div className="w-full">
              <Button 
                onClick={() => navigate('/available-offers')}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-full py-3 flex items-center justify-center"
              >
                Try a Different Offer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </StepLayout>
  );
};

export default ApplicationNotApproved;
