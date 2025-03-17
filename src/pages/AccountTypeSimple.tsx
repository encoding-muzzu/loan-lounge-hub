
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import StepLayout from '@/components/StepLayout';

type AccountType = 'individual' | 'soleProprietor' | 'privateLimited' | null;

const AccountTypeSimple = () => {
  const [accountType, setAccountType] = useState<AccountType>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (accountType) {
      if (accountType === 'individual') {
        navigate('/individual/details');
      } else {
        // For future implementation
        navigate('/details');
      }
    }
  };

  return (
    <StepLayout title="" showBack={false}>
      <div className="flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto">
        <h1 className="text-xl font-medium text-center mb-6">
          <span className="text-[#E53935]">Select</span> Your Account Type
        </h1>
        
        <div className="w-full mb-6">
          <Select onValueChange={(value) => setAccountType(value as AccountType)}>
            <SelectTrigger className="w-full border rounded-md">
              <SelectValue placeholder="Individual" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="soleProprietor">Sole Proprietor</SelectItem>
              <SelectItem value="privateLimited">Private Limited</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex w-full justify-end">
          <Button 
            onClick={handleContinue} 
            disabled={!accountType}
            className="loan-button"
          >
            Continue
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};

export default AccountTypeSimple;
