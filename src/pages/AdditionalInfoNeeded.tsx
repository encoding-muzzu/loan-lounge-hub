
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import StepLayout from '@/components/StepLayout';

const AdditionalInfoNeeded = () => {
  const navigate = useNavigate();
  
  // For demo purposes, automatically navigate to the next screen after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/application-not-approved');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
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
        
        <Card className="mt-8 border-amber-100 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h4 className="font-bold text-lg text-center mb-6">Required Documents</h4>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 bg-amber-50 p-3 rounded-lg">
                <div className="min-w-4 mt-1">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <p className="font-medium">Bank Statements</p>
                  <p className="text-sm text-gray-600">Last 3 months' statements from all accounts</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-amber-50 p-3 rounded-lg">
                <div className="min-w-4 mt-1">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <p className="font-medium">Utility Bill</p>
                  <p className="text-sm text-gray-600">Recent bill (not older than 3 months) as address proof</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-amber-50 p-3 rounded-lg">
                <div className="min-w-4 mt-1">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <p className="font-medium">Identity Verification</p>
                  <p className="text-sm text-gray-600">Selfie with your PAN card for verification</p>
                </div>
              </li>
            </ul>
            
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Please provide these documents as soon as possible to avoid delays in processing your application.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </StepLayout>
  );
};

export default AdditionalInfoNeeded;
