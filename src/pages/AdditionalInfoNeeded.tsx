
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import StepLayout from '@/components/StepLayout';

const AdditionalInfoNeeded = () => {
  const navigate = useNavigate();
  
  return (
    <StepLayout title="Application Status" showBack={false}>
      <div className="flex flex-col max-w-2xl mx-auto">
        <Alert className="bg-amber-50 border-amber-100 mb-4">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <AlertTitle className="text-amber-700 font-bold">Additional Information Needed</AlertTitle>
          <AlertDescription className="text-gray-700">
            The lender requires more information to process your application.
          </AlertDescription>
        </Alert>
        
        <Card className="mt-8 border-amber-100">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h4 className="font-bold mb-4">Required Documents:</h4>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="min-w-4 mt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                </div>
                <span>Last 3 months' bank statements</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 mt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                </div>
                <span>Recent utility bill (not older than 3 months)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 mt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                </div>
                <span>Selfie with your PAN card</span>
              </li>
            </ul>
            
            <p className="text-sm text-gray-700 mb-4">
              Please provide these documents as soon as possible to avoid delays.
            </p>
            
            <Button 
              onClick={() => navigate('/upload-documents')}
              className="w-full loan-button"
            >
              Upload Documents
            </Button>
          </CardContent>
        </Card>
      </div>
    </StepLayout>
  );
};

export default AdditionalInfoNeeded;
