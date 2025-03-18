
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '@/components/StepLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Landmark, CheckCircle, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FormField from '@/components/FormField';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const NACHSetup = () => {
  const navigate = useNavigate();
  const [bankDetails, setBankDetails] = useState({
    accountHolder: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    accountType: 'savings'
  });
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleAccountTypeChange = (value: string) => {
    setBankDetails(prev => ({ ...prev, accountType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful NACH setup
    setIsComplete(true);
  };

  return (
    <StepLayout title="Set Up Auto-Debit" backUrl="/loan-agreement">
      <div className="max-w-md mx-auto">
        {!isComplete ? (
          <form onSubmit={handleSubmit}>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Landmark className="h-5 w-5 text-[#0056D2]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Bank Account Details</h3>
                    <p className="text-sm text-gray-500">For EMI auto-debit setup</p>
                  </div>
                </div>
                
                <FormField label="Account Holder Name" htmlFor="accountHolder">
                  <Input
                    id="accountHolder"
                    name="accountHolder"
                    value={bankDetails.accountHolder}
                    onChange={handleChange}
                    className="loan-input"
                    required
                  />
                </FormField>
                
                <FormField label="Account Number" htmlFor="accountNumber">
                  <Input
                    id="accountNumber"
                    name="accountNumber"
                    value={bankDetails.accountNumber}
                    onChange={handleChange}
                    className="loan-input"
                    required
                  />
                </FormField>
                
                <FormField label="IFSC Code" htmlFor="ifscCode">
                  <Input
                    id="ifscCode"
                    name="ifscCode"
                    value={bankDetails.ifscCode}
                    onChange={handleChange}
                    className="loan-input"
                    required
                  />
                </FormField>
                
                <FormField label="Bank Name" htmlFor="bankName">
                  <Input
                    id="bankName"
                    name="bankName"
                    value={bankDetails.bankName}
                    onChange={handleChange}
                    className="loan-input"
                    required
                  />
                </FormField>
                
                <FormField label="Account Type" htmlFor="accountType">
                  <RadioGroup
                    value={bankDetails.accountType}
                    onValueChange={handleAccountTypeChange}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="savings" id="savings" />
                      <Label htmlFor="savings">Savings</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="current" id="current" />
                      <Label htmlFor="current">Current</Label>
                    </div>
                  </RadioGroup>
                </FormField>
              </CardContent>
            </Card>
            
            <div className="text-sm text-gray-600 mb-6">
              <p className="mb-2">
                By proceeding, you authorize the bank to debit your account for loan EMIs as per the schedule.
              </p>
              <p>
                The auto-debit mandate will remain active until the loan is fully repaid.
              </p>
            </div>
            
            <Button type="submit" className="w-full loan-button">
              Authorize NACH Mandate
            </Button>
          </form>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">NACH Setup Complete</h2>
            <p className="text-gray-600 mb-6">
              Your auto-debit mandate has been successfully set up for EMI payments.
            </p>
            <Button 
              onClick={() => navigate('/disbursement-confirmation')}
              className="loan-button inline-flex items-center"
            >
              Proceed to Disbursement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </StepLayout>
  );
};

export default NACHSetup;
