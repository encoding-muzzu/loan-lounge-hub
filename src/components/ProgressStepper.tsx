
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Step {
  id: number;
  name: string;
  path: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ 
  steps, 
  currentStep 
}) => {
  return (
    <nav className="mx-auto w-full max-w-screen-md my-6">
      <ol className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <li className={cn(
              "flex items-center",
              index === 0 ? "flex-1" : "",
              index === steps.length - 1 ? "flex-1" : "flex-1"
            )}>
              <Link
                to={step.path}
                className={cn(
                  "group flex w-full flex-col items-center",
                  step.status === 'upcoming' && "pointer-events-none"
                )}
                aria-current={step.status === 'current' ? "step" : undefined}
              >
                <span className="flex items-center">
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                      {
                        "bg-loan-green text-white": step.status === 'completed',
                        "bg-loan-red text-white": step.status === 'current',
                        "bg-gray-200 text-gray-400": step.status === 'upcoming',
                      }
                    )}
                  >
                    {step.status === 'completed' ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </span>
                  <span
                    className={cn(
                      "ml-2 text-xs font-medium",
                      {
                        "text-gray-900": step.status === 'completed' || step.status === 'current',
                        "text-gray-500": step.status === 'upcoming',
                      }
                    )}
                  >
                    {step.name}
                  </span>
                </span>
              </Link>
            </li>
            
            {index < steps.length - 1 && (
              <li className="flex-1 flex items-center">
                <div
                  className={cn(
                    "h-0.5 w-full",
                    {
                      "bg-loan-green": step.status === 'completed',
                      "bg-gray-200": step.status === 'current' || step.status === 'upcoming',
                    }
                  )}
                ></div>
                <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressStepper;
