
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Loader } from 'lucide-react';

const FindingBestOffers = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Analyzing credit profile...');

  useEffect(() => {
    // Simulate progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          // Navigate to welcome screen after completion
          setTimeout(() => navigate('/welcome'), 500);
          return 100;
        }
        
        // Update status message based on progress
        if (prevProgress > 30 && prevProgress < 50) {
          setStatusMessage('Matching your profile...');
        } else if (prevProgress > 70) {
          setStatusMessage('Finalizing best offers...');
        }
        
        return prevProgress + 2;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="bg-red-500 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
          <Loader className="w-12 h-12 text-white animate-spin" />
        </div>

        <h1 className="text-2xl font-bold mb-4">Finding Best Offers</h1>
        
        <p className="text-gray-600 mb-6">
          Please wait while we match your profile with the best available offers...
        </p>
        
        <div className="w-full mb-4">
          <Progress value={progress} className="h-2 bg-gray-200" />
        </div>
        
        <p className="text-sm text-gray-500">{statusMessage}</p>
      </div>
    </div>
  );
};

export default FindingBestOffers;
