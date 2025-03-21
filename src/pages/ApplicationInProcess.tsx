
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import StepLayout from '@/components/StepLayout';

const ApplicationInProcess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { text: "Verifying your information" },
    { text: "Checking loan eligibility" },
    { text: "Preparing loan offer" }
  ];

  // Get routing info from location state
  const shouldApprove = location.state?.shouldApprove || false;
  const selectedOffer = location.state?.selectedOffer || null;
  
  console.log("Should approve:", shouldApprove);
  console.log("Selected offer:", selectedOffer);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);
    
    // For demo purposes, navigate to the appropriate screen based on shouldApprove flag
    const timer = setTimeout(() => {
      if (shouldApprove) {
        navigate('/application-approved');
      } else {
        navigate('/application-not-approved');
      }
    }, 7000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate, shouldApprove]);

  return (
    <StepLayout title="Application Status" showBack={false}>
      <div className="flex flex-col max-w-2xl mx-auto">
        <Alert className="bg-blue-50 border-blue-100 mb-4">
          <Clock className="h-5 w-5 text-[#0056D2]" />
          <AlertTitle className="text-[#0056D2] font-bold">Application In Process</AlertTitle>
          <AlertDescription className="text-gray-700">
            Your application is being reviewed by the lender
          </AlertDescription>
        </Alert>
        
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-8">
          <div className="w-16 h-16 rounded-full bg-[#0056D2] flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-white" />
          </div>
          
          <p className="text-gray-700 max-w-md mb-4">
            Please wait while we process your application. This typically takes 24-48 hours.
          </p>
          
          <p className="text-[#0056D2] font-medium mb-4">
            {steps[activeStep].text}
          </p>
          
          <div className="flex gap-6 mt-2 mb-8">
            {steps.map((step, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeStep ? 'bg-[#0056D2] scale-125' : 'bg-gray-300'}`}
                onClick={() => setActiveStep(index)}
                aria-label={`Step ${index + 1}: ${step.text}`}
              />
            ))}
          </div>
          
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="bg-[#0056D2] h-full transition-all duration-500 ease-in-out"
              style={{ width: `${(activeStep + 1) * (100 / steps.length)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default ApplicationInProcess;
