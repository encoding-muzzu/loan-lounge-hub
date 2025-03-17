
import React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label?: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  htmlFor, 
  error, 
  className, 
  children 
}) => {
  return (
    <div className={cn("mb-4", className)}>
      {label && <label htmlFor={htmlFor} className="loan-label">{label}</label>}
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;
