
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Percent, Calendar, CreditCard, ArrowRight, CircleDollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import MobileContainer from '@/components/MobileContainer';

const AvailableOffers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);
  const [isFromRejection, setIsFromRejection] = useState(false);

  // Check if the user is coming from the application-not-approved page
  useEffect(() => {
    const prevPath = location.state?.from;
    if (prevPath === '/application-not-approved') {
      setIsFromRejection(true);
    }
  }, [location]);

  // Automatically redirect to application-approved when an offer is selected
  // and the user came from the not-approved page
  useEffect(() => {
    if (selectedOffer !== null && isFromRejection) {
      const timer = setTimeout(() => {
        navigate('/application-approved');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedOffer, isFromRejection, navigate]);

  const handleOfferSelect = (offerId: number) => {
    setSelectedOffer(offerId);
  };

  const handleProceed = () => {
    if (selectedOffer !== null) {
      if (isFromRejection) {
        navigate('/application-approved');
      } else {
        navigate('/kyc-verification');
      }
    }
  };

  const offers = [
    {
      id: 1,
      bank: 'ABC Bank',
      amount: '₹5,00,000',
      interestRate: '10.5%',
      tenure: '36 months',
      emi: '₹16,200',
      color: 'loan-blue',
    },
    {
      id: 2,
      bank: 'XYZ Finance',
      amount: '₹4,50,000',
      interestRate: '11%',
      tenure: '36 months',
      emi: '₹14,700',
      color: 'loan-green',
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
              <CircleDollarSign size={18} className="text-white" />
            </span>
            Available Offers
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
                selectedOffer === offer.id ? `border-${offer.color}` : 'border-transparent'
              }`}>
                <div className={`p-4 bg-${offer.color} text-white`}>
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
                      <CircleDollarSign size={18} />
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
            className="loan-button w-full max-w-md rounded-full flex items-center justify-center gap-2 py-6"
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

export default AvailableOffers;
