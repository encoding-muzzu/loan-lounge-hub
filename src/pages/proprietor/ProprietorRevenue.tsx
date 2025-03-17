
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu } from 'lucide-react';
import { Label } from '@/components/ui/label';

const ProprietorRevenue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gstRegistered: '',
    monthlyTurnover: '',
    bankAccountNumber: '',
    bankName: '',
    ifscCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Navigate to finding best offers page instead of KYC
    navigate('/finding-best-offers');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate('/proprietor/address')} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-6">
          <p className="text-base">Enter your <span className="font-bold">Revenue Details</span></p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <div className="mb-4">
            <Label htmlFor="gstRegistered" className="block text-sm mb-1">GST Registered:</Label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gstRegistered"
                  value="yes"
                  checked={formData.gstRegistered === 'yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gstRegistered"
                  value="no"
                  checked={formData.gstRegistered === 'no'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          
          <div className="mb-4">
            <Label htmlFor="monthlyTurnover" className="block text-sm mb-1">Monthly Turnover:</Label>
            <div className="relative">
              <Input
                id="monthlyTurnover"
                name="monthlyTurnover"
                placeholder="Enter amount"
                value={formData.monthlyTurnover}
                onChange={handleChange}
                className="border rounded-md w-full pl-8"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
            </div>
          </div>
          
          <div className="mb-4">
            <Label htmlFor="bankAccountNumber" className="block text-sm mb-1">Bank Account Number:</Label>
            <Input
              id="bankAccountNumber"
              name="bankAccountNumber"
              placeholder="Enter your account number"
              value={formData.bankAccountNumber}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="bankName" className="block text-sm mb-1">Bank Name:</Label>
            <Input
              id="bankName"
              name="bankName"
              placeholder="Enter your bank name"
              value={formData.bankName}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="ifscCode" className="block text-sm mb-1">IFSC Code:</Label>
            <Input
              id="ifscCode"
              name="ifscCode"
              placeholder="Enter IFSC code"
              value={formData.ifscCode}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="flex justify-end mt-8">
            <Button 
              type="submit"
              className="rounded-md px-6 bg-[#32CD32] hover:bg-green-600 text-white"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProprietorRevenue;
