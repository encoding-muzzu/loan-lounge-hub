
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
      <div className="flex flex-col items-center max-w-md mx-auto animate-fade-in">
        <Card className="w-full border-purple-100 shadow-md rounded-lg">
          <CardContent className="pt-8 pb-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <XCircle className="h-12 w-12 text-purple-500" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-3">This offer is not applicable</h2>
            
            <p className="text-gray-600 mb-6 max-w-xs">
              We're sorry, but your application for this offer cannot be processed at this time.
            </p>
            
            <div className="bg-purple-50 w-full p-4 rounded-lg mb-6">
              <p className="text-sm text-purple-700">
                You may still be eligible for our other loan products with different terms.
                We encourage you to explore alternative options.
              </p>
            </div>
            
            <div className="w-full">
              <Button 
                onClick={() => navigate('/alternative-offers', { 
                  state: { from: 'application-not-approved', fromRejection: true } 
                })}
                className="w-full text-white bg-[#32CD32] hover:bg-[#0056D2] rounded-full flex items-center justify-center"
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
