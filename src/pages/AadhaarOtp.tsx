
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import MobileContainer from '@/components/MobileContainer';
import { Eye } from 'lucide-react';

const AadhaarOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleVerifyOtp = () => {
    navigate('/aadhaar-success');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const content = (
    <div className="min-h-screen bg-white flex flex-col font-ubuntu text-[#333]">
      {/* Header with Protean logo */}
      <div className="bg-white p-4 border-b">
        <div className="flex justify-start">
          <img 
            src="/lovable-uploads/c3422ba9-a0c1-42ff-b9fd-01338f80150b.png" 
            alt="Protean Logo" 
            className="h-8" 
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
            Please enter the OTP sent to your registered mobile number
          </p>
          
          {/* Numbered list for authorization */}
          <div className="text-xs ml-6 space-y-3">
            <div className="flex">
              <span className="mr-2">1.</span>
              <p>Use my Aadhaar / Virtual ID details (as applicable) for/with Syntizen Technologies Private Limited and authenticate my identity through the Aadhaar Authentication system (Aadhaar based e-KYC services of UIDAI) as per the provisions of the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016 and the allied rules and regulations specified thereunder for the afore purpose.</p>
            </div>
            
            <div className="flex">
              <span className="mr-2">2.</span>
              <p>Authenticate my Aadhaar / Virtual ID through OTP for authenticating my identity through the Aadhaar Authentication system via eSign service in OTP mode.</p>
            </div>
          </div>
          
          {/* Masked Aadhaar display */}
          <div className="pt-2">
            <label className="block text-xs mb-1">VID/Aadhaar:</label>
            <Input 
              value="XXXX XXXX 1234"
              readOnly
              className="border border-gray-300 h-9 text-sm bg-gray-100"
            />
          </div>
          
          {/* OTP Input field */}
          <div className="pt-2">
            <label className="block text-xs mb-1">Enter OTP received on mobile:</label>
            <div className="relative">
              <Input 
                type={showOtp ? "text" : "password"}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="border border-gray-300 h-9 text-sm pr-10"
              />
              <button 
                onClick={() => setShowOtp(!showOtp)} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                type="button"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-center gap-2 pt-4">
            <button 
              onClick={handleVerifyOtp}
              disabled={!otp}
              className="bg-[#4c91cd] text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              VERIFY OTP
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

export default AadhaarOtp;
