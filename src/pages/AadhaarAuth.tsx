
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const AadhaarAuth = () => {
  const navigate = useNavigate();
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSendOtp = () => {
    navigate('/aadhaar-otp');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
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
          <div className="flex items-start mb-4">
            <Checkbox 
              id="termsCheck" 
              className="mt-1 mr-2"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <div>
              <label htmlFor="termsCheck" className="text-xs">
                I have read the aadhaar and other statutory benefits of authenticating with Systech Technologies Limited. I hereby state that I have no objection in authenticating myself with Systech Technologies Limited to:
              </label>
              <ol className="list-decimal list-inside text-xs mt-2 ml-2 space-y-2">
                <li>Get my Aadhaar / Virtual ID details (as applicable) through Systech Technologies Limited for document authentication which involves my Aadhaar Number, Demographic details, Photograph, Mobile Number (if available), email (if available), Fingerprint, Signature, Iris etc. via aadhaar authentication services.</li>
                <li>Use my Aadhaar authentication details for authentication of digitally signing the document through the National Authentication System.</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col items-center">
          <div className="bg-gray-100 border border-gray-200 rounded-md p-3 w-full max-w-md mb-4">
            <label className="block text-sm mb-1">VID/Aadhaar</label>
            <Input 
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value)}
              placeholder="Enter VID/Aadhaar"
              className="border border-gray-300"
            />
          </div>
          
          <div className="flex gap-4 w-full max-w-md">
            <Button 
              onClick={handleSendOtp}
              disabled={!agreed || !aadhaarNumber}
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
          
          <p className="text-xs text-gray-600 mt-4">
            Click here to generate Virtual ID. Download Instructions to generate Virtual ID in lieu of Aadhaar
          </p>
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-auto mb-4">
        <img src="/lovable-uploads/26e8ad22-a12d-4ac8-9206-8c5fe8dcef79.png" alt="NSDL Logo" className="h-6 mx-2" />
        <span className="text-sm font-semibold mx-2">NSDL e-Gov</span>
        <img src="/lovable-uploads/26e8ad22-a12d-4ac8-9206-8c5fe8dcef79.png" alt="Protean Logo" className="h-6 mx-2" />
      </div>
    </div>
  );
};

export default AadhaarAuth;
