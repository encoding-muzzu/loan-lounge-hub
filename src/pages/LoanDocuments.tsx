
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Eye, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import MobileContainer from '@/components/MobileContainer';
import { Card, CardContent } from '@/components/ui/card';
import StepLayout from '@/components/StepLayout';

const LoanDocuments = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleViewDocument = (docType: string) => {
    toast.info(`Viewing ${docType} document`);
  };

  const handleSubmit = () => {
    if (termsAccepted) {
      navigate('/e-sign-agreement');
    } else {
      toast.error('Please accept the terms and conditions before proceeding');
    }
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#0056D2] to-[#8EC0E4] text-white p-6">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h1 className="text-2xl font-semibold">Loan Documents</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        <p className="text-sm opacity-90 mt-1">
          Please review the following documents carefully
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2 flex items-center"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <p className="text-gray-600 mb-6">Please review the loan documents carefully before proceeding</p>

        {/* Loan Agreement Document */}
        <Card className="mb-4 border border-gray-200 hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#0056D2]">Loan Agreement</h3>
                <p className="text-sm text-gray-600 mt-1">
                  This document outlines the terms and conditions of your loan, including the loan amount, interest rate, repayment schedule, and other important details.
                </p>
              </div>
            </div>
            <Button 
              variant="outline"
              onClick={() => handleViewDocument('Loan Agreement')}
              className="mt-3 text-[#0056D2] border-[#0056D2] hover:bg-[#0056D2] hover:text-white rounded-full flex items-center gap-2"
              size="sm"
            >
              <Eye size={16} />
              View Document
            </Button>
          </CardContent>
        </Card>

        {/* Terms & Conditions Document */}
        <Card className="mb-4 border border-gray-200 hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#0056D2]">Terms & Conditions</h3>
                <p className="text-sm text-gray-600 mt-1">
                  This document outlines the terms and conditions related to your loan, including the loan amount, interest rate, repayment schedule and other details.
                </p>
              </div>
            </div>
            <Button 
              variant="outline"
              onClick={() => handleViewDocument('Terms & Conditions')}
              className="mt-3 text-[#0056D2] border-[#0056D2] hover:bg-[#0056D2] hover:text-white rounded-full flex items-center gap-2"
              size="sm"
            >
              <Eye size={16} />
              View Document
            </Button>
          </CardContent>
        </Card>

        {/* Privacy & Policy Document */}
        <Card className="mb-6 border border-gray-200 hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#0056D2]">Privacy & Policy</h3>
                <p className="text-sm text-gray-600 mt-1">
                  This document explains how your personal information will be collected, used and protected.
                </p>
              </div>
            </div>
            <Button 
              variant="outline"
              onClick={() => handleViewDocument('Privacy Policy')}
              className="mt-3 text-[#0056D2] border-[#0056D2] hover:bg-[#0056D2] hover:text-white rounded-full flex items-center gap-2"
              size="sm"
            >
              <Eye size={16} />
              View Document
            </Button>
          </CardContent>
        </Card>

        {/* Acceptance Checkbox */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="terms" 
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(!!checked)}
              className="mt-1"
            />
            <label 
              htmlFor="terms" 
              className="text-sm font-medium leading-tight text-gray-700"
            >
              I have read and agree to the terms and conditions specified in the loan documents
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleSubmit}
            disabled={!termsAccepted}
            className="w-full py-6 rounded-full bg-[#32CD32] hover:bg-[#0056D2] text-white font-medium text-base shadow-md"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default LoanDocuments;
