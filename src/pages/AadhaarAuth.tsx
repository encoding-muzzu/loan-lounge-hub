
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import MobileContainer from '@/components/MobileContainer';

const AadhaarAuth = () => {
  const navigate = useNavigate();
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 12) {
      setAadhaarNumber(value);
      setError('');
    }
  };

  const handleSendOtp = () => {
    if (aadhaarNumber.length !== 12) {
      setError('Please enter a valid 12-digit Aadhaar number');
      return;
    }
    navigate('/aadhaar-otp');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col font-ubuntu text-[#333]">
      {/* Header with Protean logo */}
      <div className="bg-white p-4 border-b">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/98650108-79a0-4a2d-8de9-01ac6cc631b2.png" 
            alt="Protean Logo" 
            className="h-12" 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-1">
        {/* Transaction details section */}
        <div className="text-center mb-4">
          <p className="font-semibold text-sm">Syntizen Technologies Private Limited</p>
          <p className="text-xs">has requested to Digitally sign the document</p>
          <p className="text-xs mb-3">Transaction ID: UKC-eSign:991332 dated 2024-12-31T15:59:45</p>
          
          {/* Audio control buttons */}
          <div className="flex justify-center gap-2 mb-4">
            <button className="bg-[#FFC107] text-black px-4 py-1 text-sm rounded-sm">
              Pause audio
            </button>
            <button className="bg-[#FFA000] text-black px-4 py-1 text-sm rounded-sm">
              Stop audio
            </button>
          </div>
        </div>
        
        {/* Form section */}
        <div className="space-y-4">
          <p className="text-[#0056D2] text-xs text-center">
            Please click on the checkbox and enter Aadhaar/Virtual ID
          </p>
          
          {/* Checkbox with agreement text */}
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="termsCheck" 
              className="mt-1 h-4 w-4 rounded-sm"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <label htmlFor="termsCheck" className="text-xs">
              I hereby authorize Protean eGov Technologies Limited (formerly NSDL e-Governance Infrastructure Limited) to:
            </label>
          </div>
          
          {/* Numbered list */}
          <div className="text-xs ml-6 space-y-3">
            <div className="flex">
              <span className="mr-2">1.</span>
              <p>Use my Aadhaar / Virtual ID details (as applicable) for/with Syntizen Technologies Private Limited and authenticate my identity through the Aadhaar Authentication system (Aadhaar based e-KYC services of UIDAI) as per the provisions of the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016 and the allied rules and regulations specified thereunder for the afore purpose.</p>
            </div>
            
            <div className="flex">
              <span className="mr-2">2.</span>
              <p>Authenticate my Aadhaar / Virtual ID through OTP or Biometric for authenticating my identity through the Aadhaar Authentication system via eSign service in OTP/Biometric mode.</p>
            </div>
          </div>
          
          {/* Input field */}
          <div className="pt-2">
            <label className="block text-xs mb-1">VID/Aadhaar:</label>
            <Input 
              value={aadhaarNumber}
              onChange={handleAadhaarChange}
              placeholder="Enter 12-digit Aadhaar number"
              className="border border-gray-300 h-9 text-sm"
              maxLength={12}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-center gap-2 pt-4">
            <button 
              onClick={handleSendOtp}
              disabled={!agreed || aadhaarNumber.length !== 12}
              className={`bg-[#4c91cd] text-white px-6 py-2 rounded-md text-sm font-medium ${
                (!agreed || aadhaarNumber.length !== 12) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              SEND OTP
            </button>
            <button 
              onClick={handleCancel}
              className="bg-[#f79646] text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              CANCEL
            </button>
          </div>
          
          {/* Help text */}
          <div className="text-center text-[#0056D2] text-xs pt-2">
            <a href="#" className="underline">Click Here</a> to generate Virtual ID. <a href="#" className="underline">Download Instructions</a> to generate Virtual ID in lieu of Aadhaar.
          </div>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default AadhaarAuth;
