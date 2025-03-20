
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Check, Download } from 'lucide-react';
import StepLayout from '@/components/StepLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const LoanAgreement = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [signatureComplete, setSignatureComplete] = useState(false);
  
  const handleDownloadDoc = () => {
    toast.success("Document downloaded successfully");
  };
  
  const handleAcceptTerms = (checked: boolean) => {
    setTermsAccepted(checked);
  };
  
  const handleESign = () => {
    // In a real app, this would trigger the e-signature process
    toast.success("E-signature completed successfully");
    setSignatureComplete(true);
  };
  
  const handleProceedToNACH = () => {
    navigate('/nach-setup');
  };

  return (
    <StepLayout title="Loan Agreement" backUrl="/application-approved">
      <div className="flex flex-col max-w-2xl mx-auto">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <h2 className="text-[#0056D2] font-bold text-lg mb-2 flex items-center">
            <FileText className="h-5 w-5 mr-2" /> 
            Loan Agreement Documentation
          </h2>
          <p className="text-gray-700">
            Please review the loan agreement carefully before proceeding with e-signing.
          </p>
        </div>
        
        <Card className="mb-6 border-gray-200 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Loan Agreement Document</h3>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center rounded-full hover:bg-[#0056D2] hover:text-white"
                onClick={handleDownloadDoc}
              >
                <Download className="h-4 w-4 mr-1" /> Download
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4 border border-gray-200">
              <div className="text-sm text-gray-700">
                <h4 className="font-medium mb-2">LOAN AGREEMENT</h4>
                <p className="mb-2">This Loan Agreement ("Agreement") is made and entered into on [Date], by and between:</p>
                <p className="mb-2"><strong>LENDER:</strong> GRO Finance Services Pvt. Ltd.</p>
                <p className="mb-2"><strong>BORROWER:</strong> [Borrower Name]</p>
                <p className="mb-4">For a loan amount of ₹3,00,000 with an interest rate of 10.5% per annum for a term of 60 months.</p>
                
                <h5 className="font-medium mb-1">1. LOAN DETAILS</h5>
                <p className="mb-2">- Principal Amount: ₹3,00,000</p>
                <p className="mb-2">- Interest Rate: 10.5% per annum</p>
                <p className="mb-2">- Term: 60 months</p>
                <p className="mb-2">- Monthly EMI: ₹6,500</p>
                <p className="mb-4">- Processing Fee: ₹3,000</p>
                
                <h5 className="font-medium mb-1">2. REPAYMENT SCHEDULE</h5>
                <p className="mb-2">The Borrower shall repay the loan in 60 equal monthly installments of ₹6,500 starting from [Start Date].</p>
                
                <h5 className="font-medium mb-1">3. PREPAYMENT</h5>
                <p className="mb-2">The Borrower may prepay the loan in part or in full, subject to a prepayment penalty of 2% on the amount prepaid.</p>
                
                <h5 className="font-medium mb-1">4. DEFAULT</h5>
                <p className="mb-2">In the event of default, a late payment fee of 2% per month shall be charged on the outstanding amount.</p>
                
                <p className="mt-4">By signing this agreement, the Borrower acknowledges having read, understood, and accepted all terms and conditions stated herein.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-6">
              <Checkbox 
                id="terms" 
                checked={termsAccepted}
                onCheckedChange={handleAcceptTerms}
              />
              <label 
                htmlFor="terms" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have read and agree to the terms and conditions
              </label>
            </div>
            
            <Button
              onClick={handleESign}
              disabled={!termsAccepted || signatureComplete}
              className="w-full bg-[#32CD32] hover:bg-[#0056D2] rounded-full mb-4"
            >
              {signatureComplete ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> E-Signature Completed
                </>
              ) : (
                "Complete E-Signature"
              )}
            </Button>
            
            <Button
              onClick={handleProceedToNACH}
              disabled={!signatureComplete}
              className="w-full bg-[#32CD32] hover:bg-[#0056D2] text-white rounded-full"
            >
              Proceed to NACH Setup
            </Button>
          </CardContent>
        </Card>
      </div>
    </StepLayout>
  );
};

export default LoanAgreement;
