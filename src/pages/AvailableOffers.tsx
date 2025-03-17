
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu } from 'lucide-react';

const AvailableOffers = () => {
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  const handleOfferSelect = (offerId: number) => {
    setSelectedOffer(offerId);
  };

  const handleProceed = () => {
    if (selectedOffer !== null) {
      navigate('/kyc-verification');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-loan-blue text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-xl font-bold mb-6">Available Offers</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div 
            className={`p-4 rounded-md border cursor-pointer ${
              selectedOffer === 1 ? 'border-loan-green bg-green-50' : 'border-gray-200'
            }`}
            onClick={() => handleOfferSelect(1)}
          >
            <h3 className="font-medium text-center">Offer 1</h3>
          </div>
          
          <div 
            className={`p-4 rounded-md border cursor-pointer ${
              selectedOffer === 2 ? 'border-loan-green bg-green-50' : 'border-gray-200'
            }`}
            onClick={() => handleOfferSelect(2)}
          >
            <h3 className="font-medium text-center">Offer 2</h3>
          </div>
        </div>
        
        <div className="flex justify-center mt-auto">
          <Button 
            onClick={handleProceed}
            disabled={selectedOffer === null}
            className="loan-button w-full"
          >
            Proceed with selected Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvailableOffers;
