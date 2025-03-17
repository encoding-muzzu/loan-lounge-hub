
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, User, Briefcase, Building } from 'lucide-react';
import StepLayout from '@/components/StepLayout';

type AccountType = 'individual' | 'soleProprietor' | 'privateLimited' | null;

const AccountType = () => {
  const [selectedType, setSelectedType] = useState<AccountType>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType) {
      // In a real app, you would save this to state management or context
      navigate('/details');
    }
  };

  return (
    <StepLayout title="Select Account Type" previousPath="/welcome">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-medium text-center mb-6">What type of account do you need?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
          <AccountTypeCard
            type="individual"
            title="Individual"
            description="Personal loans for your needs"
            icon={<User className="h-6 w-6" />}
            selected={selectedType === 'individual'}
            onClick={() => setSelectedType('individual')}
          />
          
          <AccountTypeCard
            type="soleProprietor"
            title="Sole Proprietor"
            description="For small business owners"
            icon={<Briefcase className="h-6 w-6" />}
            selected={selectedType === 'soleProprietor'}
            onClick={() => setSelectedType('soleProprietor')}
          />
          
          <AccountTypeCard
            type="privateLimited"
            title="Private Limited"
            description="For registered companies"
            icon={<Building className="h-6 w-6" />}
            selected={selectedType === 'privateLimited'}
            onClick={() => setSelectedType('privateLimited')}
          />
        </div>
        
        <Button
          onClick={handleContinue}
          disabled={!selectedType}
          className={`loan-button w-full max-w-sm ${!selectedType ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Continue
        </Button>
      </div>
    </StepLayout>
  );
};

interface AccountTypeCardProps {
  type: AccountType;
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const AccountTypeCard: React.FC<AccountTypeCardProps> = ({
  type,
  title,
  description,
  icon,
  selected,
  onClick
}) => {
  return (
    <Card
      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
        selected ? 'border-loan-red bg-red-50' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-white rounded-lg border border-gray-100">
          {icon}
        </div>
        {selected && <Check className="h-5 w-5 text-loan-red" />}
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Card>
  );
};

export default AccountType;
