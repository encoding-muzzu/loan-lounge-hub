
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, AlertTriangle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ApplicationStatus = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="max-w-4xl mx-auto w-full pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left section - Application In Process */}
          <div className="flex flex-col">
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
              
              <p className="text-gray-700 max-w-xs mb-4">
                Please wait while we process your application. This typically takes 24-48 hours.
              </p>
              
              <div className="flex gap-1 mt-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-loan-blue"></div>
                <div className="w-2 h-2 rounded-full bg-loan-blue"></div>
                <div className="w-2 h-2 rounded-full bg-loan-blue"></div>
              </div>
              
              <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          
          {/* Connecting arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center">
              <div className="h-0.5 w-12 bg-gray-300"></div>
              <div className="h-4 w-4 border-t border-r border-gray-300 transform rotate-45 -ml-2"></div>
            </div>
          </div>
          
          {/* Right section - Additional Information Needed */}
          <div className="flex flex-col">
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
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
