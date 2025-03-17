
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { ArrowLeft, Menu } from 'lucide-react';

const CompanyDetailsNext = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanType: '',
    entityType: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/company/documents');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
          <ArrowLeft size={20} onClick={() => navigate('/company/details')} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <div className="mb-4">
            <label htmlFor="loanType" className="block text-sm mb-1">Loan Type:</label>
            <Select
              onValueChange={(value) => handleSelectChange('loanType', value)}
              value={formData.loanType}
            >
              <SelectTrigger className="w-full border rounded-md">
                <SelectValue placeholder="Select loan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business Loan</SelectItem>
                <SelectItem value="equipment">Equipment Financing</SelectItem>
                <SelectItem value="working">Working Capital</SelectItem>
                <SelectItem value="expansion">Business Expansion</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="entityType" className="block text-sm mb-1">Type of Entity:</label>
            <Select
              onValueChange={(value) => handleSelectChange('entityType', value)}
              value={formData.entityType}
            >
              <SelectTrigger className="w-full border rounded-md">
                <SelectValue placeholder="Select entity type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">Private Limited</SelectItem>
                <SelectItem value="llp">LLP</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="public">Public Limited</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">Email:</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@example.com"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm mb-1">Phone number:</label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+91 XXXXXXXXXX"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="flex justify-end mt-8">
            <Button 
              type="submit"
              className="rounded-full px-6 bg-red-500 hover:bg-red-600 text-white"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyDetailsNext;
