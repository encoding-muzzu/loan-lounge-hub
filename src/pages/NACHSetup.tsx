
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertCircle, CreditCard, CheckCircle, BankIcon } from 'lucide-react';
import StepLayout from '@/components/StepLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const NACHSetup = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('netbanking');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIFSCCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bankName || !accountNumber || !ifscCode) {
      toast.error("Please fill all the required fields");
      return;
    }
    
    // In a real app, this would send data to the backend
    toast.success("NACH mandate authorized successfully");
    setIsAuthorized(true);
  };
  
  const handleSubmitForDisbursement = () => {
    navigate('/disbursement-confirmation');
  };

  return (
    <StepLayout title="NACH Setup" backUrl="/loan-agreement">
      <div className="flex flex-col max-w-2xl mx-auto">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <h2 className="text-[#0056D2] font-bold text-lg mb-2 flex items-center">
            <BankIcon className="h-5 w-5 mr-2" /> 
            Auto-Debit Authorization
          </h2>
          <p className="text-gray-700">
            Set up automatic EMI payments from your bank account through National Automated Clearing House (NACH).
          </p>
        </div>
        
        {!isAuthorized ? (
          <Card className="mb-6 border-gray-200 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-4 bg-amber-50 p-3 rounded-lg">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                <p className="text-sm text-amber-800">
                  Your EMIs will be automatically debited from your bank account on the due date. Please provide your bank account details.
                </p>
              </div>
              
              <form onSubmit={handleAuthorize}>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Select Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Label htmlFor="netbanking" className="cursor-pointer">Net Banking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="debit-card" id="debit-card" />
                      <Label htmlFor="debit-card" className="cursor-pointer">Debit Card</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input
                      id="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      placeholder="Enter your bank name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input
                      id="accountNumber"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="Enter your account number"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="ifscCode">IFSC Code</Label>
                    <Input
                      id="ifscCode"
                      value={ifscCode}
                      onChange={(e) => setIFSCCode(e.target.value)}
                      placeholder="Enter IFSC code"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-[#0056D2] hover:bg-blue-700"
                  >
                    Authorize NACH Mandate
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-6 border-green-100 shadow-sm">
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-bold text-lg mb-2">NACH Mandate Authorized</h3>
              <p className="text-gray-600 mb-6 text-center">
                Your auto-debit setup is complete. EMIs will be automatically debited from your account on the due dates.
              </p>
              
              <div className="bg-gray-50 w-full p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Bank Name:</span>
                  <span className="font-medium">{bankName}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Account Number:</span>
                  <span className="font-medium">XXXX{accountNumber.slice(-4)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">IFSC Code:</span>
                  <span className="font-medium">{ifscCode}</span>
                </div>
              </div>
              
              <Button
                onClick={handleSubmitForDisbursement}
                className="w-full bg-[#32CD32] hover:bg-green-600 text-white"
              >
                Submit for Disbursement
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </StepLayout>
  );
};

export default NACHSetup;
