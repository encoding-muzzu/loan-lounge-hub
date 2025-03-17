
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

const CompanyDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    natureOfBusiness: '',
    taxIdentificationNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/company/details-next');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
          <ArrowLeft size={20} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-6">
          <p className="text-base">Enter your <span className="font-bold">Details</span></p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm mb-1">Full Name:</label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Ex: John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm mb-1">Business Name:</label>
            <Input
              id="businessName"
              name="businessName"
              placeholder="Enter your business name"
              value={formData.businessName}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="natureOfBusiness" className="block text-sm mb-1">Nature Of Business:</label>
            <Select
              onValueChange={(value) => handleSelectChange('natureOfBusiness', value)}
              value={formData.natureOfBusiness}
            >
              <SelectTrigger className="w-full border rounded-md">
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="trading">Trading</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="taxIdentificationNumber" className="block text-sm mb-1">Tax Identification Number:</label>
            <Input
              id="taxIdentificationNumber"
              name="taxIdentificationNumber"
              placeholder="XX"
              value={formData.taxIdentificationNumber}
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

export default CompanyDetails;
