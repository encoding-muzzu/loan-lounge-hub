
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileContainerProps {
  children: React.ReactNode;
}

const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  const isMobile = useIsMobile();

  // On mobile devices, don't add the container styling
  if (isMobile) {
    return <>{children}</>;
  }

  // On desktop, wrap content in mobile-like container with borders
  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="min-h-screen max-w-md w-full mx-auto border-2 border-gray-300 shadow-lg rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;
