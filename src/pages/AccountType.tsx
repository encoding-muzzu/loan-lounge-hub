
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, User, Briefcase, Building } from 'lucide-react';
import MobileContainer from '@/components/MobileContainer';

type AccountType = 'individual' | 'soleProprietor' | 'privateLimited' | null;

const AccountType = () => {
  const [selectedType, setSelectedType] = useState<AccountType>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType) {
      // Navigate to the appropriate route based on account type
      if (selectedType === 'individual') {
        navigate('/individual/details');
      } else if (selectedType === 'soleProprietor') {
        navigate('/proprietor/details');
      } else {
        // For private limited
        navigate('/company/details');
      }
    }
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#0056D2] to-[#0078FF] text-white p-6">
        <h1 className="text-2xl font-semibold">Account Type</h1>
        <p className="text-sm opacity-90 mt-1">
          Select the type of account that best fits your needs
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/welcome')}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2"
        >
          Back
        </Button>
        
        <div className="flex flex-col items-center font-light">
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
            className={`w-full max-w-sm bg-[#32CD32] hover:bg-green-600 text-white rounded-full h-12 font-medium ${!selectedType ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
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
        selected ? 'border-[#0056D2] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-white rounded-lg border border-gray-100">
          {icon}
        </div>
        {selected && <Check className="h-5 w-5 text-[#0056D2]" />}
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Card>
  );
};

export default AccountType;
