
import React from 'react';
import LoanHeader from './LoanHeader';
import ProgressStepper, { Step } from './ProgressStepper';
import { useLocation } from 'react-router-dom';

interface StepLayoutProps {
  title: string;
  children: React.ReactNode;
  showBack?: boolean;
  previousPath?: string;
}

const StepLayout: React.FC<StepLayoutProps> = ({ 
  title, 
  children, 
  showBack,
  previousPath
}) => {
  const location = useLocation();
  
  // Application steps
  const steps: Step[] = [
    { id: 1, name: 'Account', path: '/account-type', status: 'upcoming' },
    { id: 2, name: 'Details', path: '/details', status: 'upcoming' },
    { id: 3, name: 'Offers', path: '/loan-matches', status: 'upcoming' },
    { id: 4, name: 'Documents', path: '/upload-documents', status: 'upcoming' },
    { id: 5, name: 'KYC', path: '/kyc', status: 'upcoming' },
    { id: 6, name: 'Status', path: '/application-status', status: 'upcoming' }
  ];

  // Determine current step
  let currentStep = 1;
  const pathToStepMap: Record<string, number> = {
    '/welcome': 1,
    '/account-type': 1,
    '/details': 2,
    '/loan-matches': 3,
    '/offer-selection': 3,
    '/upload-documents': 4,
    '/kyc': 5,
    '/application-status': 6,
    '/notification': 6,
    '/review-agreement': 6,
    '/setup-emi': 6,
    '/disbursement': 6,
    '/support': 6,
  };

  if (location.pathname in pathToStepMap) {
    currentStep = pathToStepMap[location.pathname];
  }

  // Update step statuses
  const updatedSteps = steps.map((step, index) => {
    if (index + 1 < currentStep) {
      return { ...step, status: 'completed' as const };
    } else if (index + 1 === currentStep) {
      return { ...step, status: 'current' as const };
    } else {
      return { ...step, status: 'upcoming' as const };
    }
  });

  return (
    <div className="min-h-screen bg-white pb-10">
      <div className="max-w-screen-lg mx-auto px-4 md:px-6 pt-6">
        <LoanHeader title={title} showBack={showBack} previousPath={previousPath} />
        {location.pathname !== '/welcome' && <ProgressStepper steps={updatedSteps} currentStep={currentStep} />}
        <div className="max-w-screen-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StepLayout;
