
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

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

  return (
    <div className="min-h-screen bg-white flex flex-col p-4 font-ubuntu">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">Loan Documents</h1>
      <p className="text-gray-600 mb-6">Please review the loan documents carefully before proceeding</p>

      {/* Loan Agreement Document */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
        <h3 className="font-medium mb-1">Loan Agreement</h3>
        <p className="text-sm text-gray-600 mb-2">This document outlines the terms and conditions of your loan, including the loan amount, interest rate, repayment schedule, and other important details.</p>
        <button 
          className="bg-white border border-[#0056D2] text-[#0056D2] text-sm rounded px-4 py-1"
          onClick={() => handleViewDocument('Loan Agreement')}
        >
          View Document
        </button>
      </div>

      {/* Terms & Conditions Document */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
        <h3 className="font-medium mb-1">Terms & Conditions</h3>
        <p className="text-sm text-gray-600 mb-2">This document outlines the terms and conditions related to your loan, including the loan amount, interest rate, repayment schedule and other details.</p>
        <button 
          className="bg-white border border-[#0056D2] text-[#0056D2] text-sm rounded px-4 py-1"
          onClick={() => handleViewDocument('Terms & Conditions')}
        >
          View Document
        </button>
      </div>

      {/* Privacy & Policy Document */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <h3 className="font-medium mb-1">Privacy & Policy</h3>
        <p className="text-sm text-gray-600 mb-2">This document explains how your personal information will be collected, used and protected.</p>
        <button 
          className="bg-white border border-[#0056D2] text-[#0056D2] text-sm rounded px-4 py-1"
          onClick={() => handleViewDocument('Privacy Policy')}
        >
          View Document
        </button>
      </div>

      {/* Acceptance Checkbox */}
      <div className="flex items-center space-x-2 mb-6">
        <Checkbox 
          id="terms" 
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(!!checked)}
        />
        <label 
          htmlFor="terms" 
          className="text-xs font-medium leading-none"
        >
          I have read and agree to the terms and conditions specified in the loan documents
        </label>
      </div>

      {/* Submit Button */}
      <Button 
        onClick={handleSubmit}
        disabled={!termsAccepted}
        className="w-full bg-[#FF6B6B] text-white rounded-md py-2"
      >
        Submit
      </Button>
    </div>
  );
};

export default LoanDocuments;
