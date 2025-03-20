
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import MobileContainer from '@/components/MobileContainer';

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

  const content = (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-50 p-4">
        <h1 className="text-lg font-semibold text-[#32CD32]">NACH Setup</h1>
        <p className="text-sm text-gray-600">Set up auto-debit authorization for EMI payments</p>
      </div>
      
      <div className="p-4 max-w-3xl mx-auto animate-fade-in">
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700">
            NACH (National Automated Clearing House) allows automatic deduction of your EMI from your bank account on the due date. This ensures timely payments and helps you avoid late fees.
          </p>
        </div>
        
        {/* Toggle between Bank Account and UPI */}
        <div className="flex justify-center mb-6">
          <ToggleGroup 
            type="single" 
            value={paymentMethod}
            onValueChange={(value: 'bank' | 'upi') => {
              if (value) setPaymentMethod(value);
            }}
            className="border rounded-md overflow-hidden"
          >
            <ToggleGroupItem 
              value="bank" 
              className="px-8 py-2 data-[state=on]:bg-[#0056D2] data-[state=on]:text-white"
            >
              Bank Account
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="upi" 
              className="px-8 py-2 data-[state=on]:bg-[#0056D2] data-[state=on]:text-white"
            >
              UPI
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {/* Conditional rendering based on selected payment method */}
        {paymentMethod === 'bank' ? (
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
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
                  <AlertCircle className="h-4 w-4 text-[#0056D2] flex-shrink-0 mt-0.5" />
                  <span>Auto-debit will occur on your EMI due date each month</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-[#0056D2] flex-shrink-0 mt-0.5" />
                  <span>You can cancel the NACH mandate at any time by contacting customer support</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-[#0056D2] flex-shrink-0 mt-0.5" />
                  <span>Ensure sufficient balance in your account to avoid payment failures</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-2 mt-6 mb-6">
              <Checkbox 
                id="terms-bank" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <label 
                htmlFor="terms-bank" 
                className="text-sm leading-none"
              >
                I understand and agree to the auto-debit terms
              </label>
            </div>
            
            <Button
              onClick={handleSubmit} 
              disabled={!bankDetails.accountNumber || !bankDetails.ifscCode || !agreed}
              className="w-full bg-[#32CD32] hover:bg-[#0056D2] text-white rounded-full"
            >
              Submit for Disbursement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-medium mb-3">UPI</h2>
            
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
                  <AlertCircle className="h-4 w-4 text-[#0056D2] flex-shrink-0 mt-0.5" />
                  <span>Auto-debit will occur on your EMI due date each month</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-[#0056D2] flex-shrink-0 mt-0.5" />
                  <span>You can cancel the NACH mandate at any time by contacting customer support</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-[#0056D2] flex-shrink-0 mt-0.5" />
                  <span>Ensure sufficient balance in your account to avoid payment failures</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-2 mt-6 mb-6">
              <Checkbox 
                id="terms-upi" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <label 
                htmlFor="terms-upi" 
                className="text-sm leading-none"
              >
                I understand and agree to the auto-debit terms
              </label>
            </div>
            
            <Button
              onClick={handleSubmit}
              disabled={!upiId || !agreed}
              className="w-full bg-[#32CD32] hover:bg-[#0056D2] text-white rounded-full"
            >
              Submit for Disbursement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default NACHSetup;
