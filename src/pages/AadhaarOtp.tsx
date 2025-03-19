
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MobileContainer from '@/components/MobileContainer';

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
    <div className="min-h-screen bg-white flex flex-col p-4 font-ubuntu">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate(-1)} />
        </div>
        <div className="flex items-center">
          <img src="/lovable-uploads/26e8ad22-a12d-4ac8-9206-8c5fe8dcef79.png" alt="Protean Logo" className="h-8" />
        </div>
      </div>

      <div className="mt-4 bg-white border border-gray-200 rounded-md shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src="/lovable-uploads/26e8ad22-a12d-4ac8-9206-8c5fe8dcef79.png" alt="Protean Logo" className="h-8 mr-2" />
            <div>
              <h3 className="text-sm font-semibold">Systech Technologies Private Limited</h3>
              <p className="text-xs text-gray-600">has requested to Digitally Sign the document</p>
              <p className="text-xs text-gray-600">Transaction ID: UIDC.xyz.xyz.9911232 dated 2023-12-27T10:58:58</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-xs bg-[#0056D2] text-white px-4 py-1 rounded">Select Lang</button>
            <button className="text-xs bg-[#0056D2] text-white px-4 py-1 rounded">Help Guide</button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 pb-2">
          <div className="text-xs mb-4">
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Use my Aadhaar / Virtual ID details (as applicable) through Systech Technologies Limited for document authentication which involves my Aadhaar Number, Demographic details, Photograph, Mobile Number (if available), email (if available), Fingerprint, Signature, Iris etc. via aadhaar authentication services.</li>
              <li>Use my Aadhaar authentication details for authentication of digitally signing the document through the National Authentication System.</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col items-center">
          <div className="bg-gray-100 border border-gray-200 rounded-md p-3 w-full max-w-md mb-4">
            <label className="block text-sm mb-1">VID/Aadhaar</label>
            <div className="flex items-center border border-gray-300 bg-white rounded">
              <Input 
                value="XXXX XXXX 1234"
                readOnly
                className="border-0"
              />
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-md p-3 w-full max-w-md mb-4">
            <label className="block text-sm mb-1">Enter OTP received on mobile</label>
            <div className="flex items-center border border-gray-300 bg-white rounded">
              <Input 
                type={showOtp ? "text" : "password"}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="******"
                className="border-0"
              />
              <button 
                onClick={() => setShowOtp(!showOtp)} 
                className="px-2 text-gray-500"
              >
                <Eye size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex gap-4 w-full max-w-md">
            <Button 
              onClick={handleVerifyOtp}
              disabled={!otp}
              className="flex-1 bg-[#0056D2] text-white rounded-md"
            >
              SEND OTP
            </Button>
            <Button 
              onClick={handleCancel}
              variant="outline"
              className="flex-1 border-[#0056D2] text-[#0056D2] rounded-md"
            >
              CANCEL
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-auto mb-4">
        <img src="/lovable-uploads/26e8ad22-a12d-4ac8-9206-8c5fe8dcef79.png" alt="NSDL Logo" className="h-6 mx-2" />
        <span className="text-sm font-semibold mx-2">NSDL e-Gov</span>
        <img src="/lovable-uploads/26e8ad22-a12d-4ac8-9206-8c5fe8dcef79.png" alt="Protean Logo" className="h-6 mx-2" />
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default AadhaarOtp;
