
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Briefcase, Building, Check } from 'lucide-react';
import StepLayout from '@/components/StepLayout';

type AccountType = 'individual' | 'soleProprietor' | 'privateLimited' | null;

const AccountTypeSimple = () => {
  const [accountType, setAccountType] = useState<AccountType>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (accountType) {
      if (accountType === 'individual') {
        navigate('/individual/details');
      } else if (accountType === 'soleProprietor') {
        navigate('/proprietor/details');
      } else {
        // For private limited
        navigate('/company/details');
      }
    }
  };

  const accountTypes = [
    {
      id: 'individual',
      title: 'Individual',
      description: 'For personal use or freelancers',
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'soleProprietor',
      title: 'Sole Proprietor',
      description: 'For small business owners',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      id: 'privateLimited',
      title: 'Private Limited',
      description: 'For registered companies',
      icon: <Building className="h-6 w-6" />
    }
  ];

  return (
    <StepLayout title="" showBack={false}>
      <div className="max-w-md mx-auto">
        {/* Styled header with gradient background */}
        <div className="bg-[#0056D2] text-white p-6 rounded-lg mb-6">
          <h1 className="text-2xl font-bold">Select Your Account Type</h1>
          <p className="text-sm opacity-90 mt-1">
            We need to know what type of account you need
          </p>
        </div>
        
        {/* Account type selection cards */}
        <div className="space-y-4 mb-6">
          {accountTypes.map((type) => (
            <Card
              key={type.id}
              className={`border-2 p-4 cursor-pointer transition-all ${
                accountType === type.id
                  ? 'border-[#0056D2] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setAccountType(type.id as AccountType)}
            >
              <div className="flex items-center">
                <div className="p-2 bg-white rounded-lg border border-gray-100 mr-3">
                  {type.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{type.title}</h3>
                  <p className="text-sm text-gray-500">{type.description}</p>
                </div>
                
                {accountType === type.id && (
                  <Check className="h-5 w-5 text-[#0056D2]" />
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Continue button */}
        <div className="flex justify-center">
          <Button
            onClick={handleContinue}
            disabled={!accountType}
            className="bg-[#32CD32] hover:bg-green-600 text-white font-medium px-8 py-2 rounded-full disabled:opacity-50"
          >
            Continue
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};

export default AccountTypeSimple;
