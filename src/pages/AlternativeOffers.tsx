
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Percent, Calendar, CreditCard, ArrowRight, IndianRupee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import MobileContainer from '@/components/MobileContainer';

const AlternativeOffers = () => {
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  const handleOfferSelect = (offerId: number) => {
    setSelectedOffer(offerId);
  };

  const handleProceed = () => {
    if (selectedOffer !== null) {
      // Get verification count from sessionStorage to determine the correct route
      const verificationCount = parseInt(sessionStorage.getItem('verificationCount') || '0');
      console.log("AlternativeOffers: verificationCount =", verificationCount);
      
      if (verificationCount === 1) {
        // For Private Limited companies
        console.log("AlternativeOffers: Navigating to KYB verification");
        navigate('/kyb-verification');
      } else {
        // For individual and sole proprietor
        console.log("AlternativeOffers: Navigating to KYC verification");
        navigate('/kyc-verification');
      }
    }
  };

  const offers = [
    {
      id: 1,
      bank: 'DEF Finance',
      amount: '₹3,00,000',
      interestRate: '10.5%',
      tenure: '60 months',
      emi: '₹6,500',
      bgColor: 'bg-orange-500',
      borderColor: 'border-orange-500',
    },
    {
      id: 2,
      bank: 'GHI Bank',
      amount: '₹2,50,000',
      interestRate: '9.75%',
      tenure: '48 months',
      emi: '₹6,300',
      bgColor: 'bg-purple-500',
      borderColor: 'border-purple-500',
    },
  ];

  const content = (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-center mb-8 flex justify-center items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#0056D2] flex items-center justify-center">
              <IndianRupee size={18} className="text-white" />
            </span>
            Offers
          </h1>
        </div>
        
        <div className="space-y-6 mb-8">
          {offers.map((offer) => (
            <div 
              key={offer.id}
              onClick={() => handleOfferSelect(offer.id)}
              className={`cursor-pointer transition-all duration-300 transform ${selectedOffer === offer.id ? 'scale-[1.02]' : ''}`}
            >
              <Card className={`overflow-hidden rounded-xl border-2 ${
                selectedOffer === offer.id ? offer.borderColor : 'border-transparent'
              }`}>
                <div className={`p-4 ${offer.bgColor} text-white`}>
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCard size={20} />
                    <span className="text-lg font-medium">{offer.bank}</span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{offer.amount}</div>
                  <div className="text-sm opacity-90">Maximum Loan Amount</div>
                </div>
                
                <CardContent className="p-4 space-y-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Percent size={18} />
                      <span>Interest Rate</span>
                    </div>
                    <div className="font-semibold">{offer.interestRate}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      <span>Tenure</span>
                    </div>
                    <div className="font-semibold">{offer.tenure}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <IndianRupee size={18} />
                      <span>Monthly EMI</span>
                    </div>
                    <div className="font-semibold">{offer.emi}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-auto mb-4">
          <Button 
            onClick={handleProceed}
            disabled={selectedOffer === null}
            className="w-full max-w-md flex items-center justify-center gap-2 py-6 bg-[#32CD32] hover:bg-[#0056D2] rounded-full"
          >
            <span>Proceed with Selected Offer</span>
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default AlternativeOffers;
