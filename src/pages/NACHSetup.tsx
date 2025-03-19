
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Info, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const NACHSetup = () => {
  const navigate = useNavigate();
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    ifscCode: '',
  });
  const [upiId, setUpiId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'upi'>('bank');
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleUpiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpiId(e.target.value);
  };

  const handleSubmit = () => {
    // Process submission and navigate
    navigate('/disbursement-confirmation');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-50 p-4">
        <h1 className="text-lg font-semibold text-[#32CD32]">NACH Setup</h1>
        <p className="text-sm text-gray-600">Set up auto-debit authorization for EMI payments</p>
      </div>
      
      <div className="p-4 max-w-3xl mx-auto">
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700">
            NACH (National Automated Clearing House) allows automatic deduction of your EMI from your bank account on the due date. This ensures timely payments and helps you avoid late fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column - Bank Account Form */}
          <div>
            <h2 className="font-medium mb-3">Bank Account</h2>
            
            <div className="mb-4">
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Bank Account Number
              </label>
              <Input 
                id="accountNumber"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleChange}
                placeholder="Enter account number"
                className="border-gray-300"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700 mb-1">
                IFSC Code
              </label>
              <Input 
                id="ifscCode"
                name="ifscCode"
                value={bankDetails.ifscCode}
                onChange={handleChange}
                placeholder="Enter IFSC code"
                className="border-gray-300"
              />
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Important Information</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Auto-debit will occur on your EMI due date each month</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>You can cancel the NACH mandate at any time by contacting customer support</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Ensure sufficient balance in your account to avoid payment failures</span>
                </li>
              </ul>
            </div>
            
            <Button
              onClick={handleSubmit} 
              disabled={!bankDetails.accountNumber || !bankDetails.ifscCode}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white rounded-full"
            >
              Submit for Disbursement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right column - UPI Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-medium mb-4">UPI</h2>
            
            <div className="mb-4">
              <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                UPI ID
              </label>
              <Input
                id="upiId"
                name="upiId"
                value={upiId}
                onChange={handleUpiChange}
                placeholder="username@bankname"
                className="border-gray-300"
              />
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Important Information</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Auto-debit will occur on your EMI due date each month</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>You can cancel the NACH mandate at any time by contacting customer support</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Ensure sufficient balance in your account to avoid payment failures</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-2 mt-6 mb-6">
              <Checkbox 
                id="terms" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <label 
                htmlFor="terms" 
                className="text-sm leading-none"
              >
                I understand and agree to the auto-debit terms
              </label>
            </div>
            
            <Button
              onClick={handleSubmit}
              disabled={!upiId || !agreed}
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full"
            >
              Submit for Disbursement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NACHSetup;
