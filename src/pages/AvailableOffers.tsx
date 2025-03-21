
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, Percent, Calendar, CreditCard, ArrowRight, IndianRupee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import MobileContainer from '@/components/MobileContainer';

const AvailableOffers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);
  const [isFromRejection, setIsFromRejection] = useState(false);
  const [rejectedOffers, setRejectedOffers] = useState<number[]>([]);

  // Check if the user is coming from application-not-approved page
  useEffect(() => {
    const prevPath = location.state?.from;
    
    if (prevPath === 'application-not-approved' || location.state?.fromRejection) {
      setIsFromRejection(true);
      
      // If there's a rejected offer in the state, add it to the rejected offers
      if (location.state?.rejectedOffer) {
        setRejectedOffers(prev => 
          prev.includes(location.state.rejectedOffer) 
            ? prev 
            : [...prev, location.state.rejectedOffer]
        );
      }
    }
  }, [location]);

  const handleOfferSelect = (offerId: number) => {
    setSelectedOffer(offerId);
  };

  const handleProceed = () => {
    if (selectedOffer !== null) {
      // First navigate to application in process screen
      navigate('/application-in-process', { 
        state: { 
          selectedOffer,
          // Only approve if Aditya Birla Finance is selected (offer ID 2)
          shouldApprove: selectedOffer === 2,
          rejectedOffers: [...rejectedOffers, selectedOffer !== 2 ? selectedOffer : null].filter(Boolean)
        } 
      });
    }
  };

  // All available offers
  const allOffers = [
    {
      id: 1,
      bank: 'Tata Capital',
      amount: '₹8,00,000',
      interestRate: '13.5%',
      tenure: '36 months',
      emi: '₹27,200',
      color: 'bg-blue-500',
      borderColor: 'border-blue-500',
    },
    {
      id: 2,
      bank: 'Aditya Birla Finance Limited',
      amount: '₹6,00,000',
      interestRate: '16%',
      tenure: '36 months',
      emi: '₹21,500',
      color: 'bg-purple-500',
      borderColor: 'border-purple-500',
    },
    {
      id: 3,
      bank: 'Bajaj Finance Limited',
      amount: '₹3,00,000',
      interestRate: '18%',
      tenure: '36 months',
      emi: '₹10,800',
      color: 'bg-orange-500',
      borderColor: 'border-orange-500',
    },
  ];

  // Filter out rejected offers
  const offers = allOffers.filter(offer => !rejectedOffers.includes(offer.id));

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
            Available Offers
          </h1>
        </div>
        
        <div className="space-y-6 mb-8">
          {offers.length > 0 ? (
            offers.map((offer) => (
              <div 
                key={offer.id}
                onClick={() => handleOfferSelect(offer.id)}
                className={`cursor-pointer transition-all duration-300 transform ${selectedOffer === offer.id ? 'scale-[1.02]' : ''}`}
              >
                <Card className={`overflow-hidden rounded-xl border-2 ${
                  selectedOffer === offer.id ? offer.borderColor : 'border-transparent'
                }`}>
                  <div className={`p-4 ${offer.color} text-white`}>
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
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No more offers available at this time.</p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-[#32CD32] hover:bg-[#0056D2] transition-colors rounded-full"
              >
                Return to Home
              </Button>
            </div>
          )}
        </div>
        
        {offers.length > 0 && (
          <div className="flex justify-center mt-auto mb-4">
            <Button 
              onClick={handleProceed}
              disabled={selectedOffer === null}
              className="w-full max-w-md flex items-center justify-center gap-2 py-6 bg-[#32CD32] hover:bg-[#0056D2] rounded-full transition-colors"
            >
              <span>Proceed with Selected Offer</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default AvailableOffers;
