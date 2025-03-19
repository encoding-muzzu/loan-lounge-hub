
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const AadhaarSuccess = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/e-sign-transaction');
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

        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={48} className="text-[#32CD32]" />
          </div>
          <p className="text-lg font-semibold mb-1">Success! OTP verified.</p>
          <div className="text-center mt-6">
            <p className="text-xs text-gray-600">
              Click here to generate Virtual ID. Download Instructions to generate Virtual ID in lieu of Aadhaar
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <button 
          onClick={handleContinue}
          className="bg-[#0056D2] text-white rounded-md px-8 py-2"
        >
          Continue to eSign Transaction
        </button>
      </div>
      
      <div className="flex justify-center items-center mt-auto mb-4">
        <div className="text-xs text-center text-gray-500">
          <p>Copyright © 2023 | Protean eGov Technologies Limited</p>
          <p>(Formerly NSDL e-Governance Infrastructure Limited)</p>
        </div>
      </div>
    </div>
  );
};

export default AadhaarSuccess;
