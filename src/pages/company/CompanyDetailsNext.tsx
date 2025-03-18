
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
import { ArrowLeft, Menu, Building, FileText } from 'lucide-react';
import { Label } from '@/components/ui/label';

const CompanyDetailsNext = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanType: '',
    entityType: '',
    email: '',
    gstin: '',
    cin: '',
    udhyam: '',
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
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={() => navigate('/company/details')} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Building className="h-5 w-5 text-[#0056D2]" />
          <h1 className="text-xl font-semibold">Private Limited <span className="text-[#0056D2]">Additional Information</span></h1>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <FileText className="h-5 w-5 text-[#0056D2]" />
          <p className="text-gray-600">Please provide your company's registration and contact details</p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <div className="mb-4">
            <Label htmlFor="loanType" className="block text-sm mb-1">Loan Type:</Label>
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
            <Label htmlFor="entityType" className="block text-sm mb-1">Type of Entity:</Label>
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
            <Label htmlFor="email" className="block text-sm mb-1">Email:</Label>
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
            <Label htmlFor="gstin" className="block text-sm mb-1">GSTIN:</Label>
            <Input
              id="gstin"
              name="gstin"
              placeholder="Enter GSTIN number"
              value={formData.gstin}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="cin" className="block text-sm mb-1">CIN:</Label>
            <Input
              id="cin"
              name="cin"
              placeholder="Enter CIN number"
              value={formData.cin}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="udhyam" className="block text-sm mb-1">Udhyam:</Label>
            <Input
              id="udhyam"
              name="udhyam"
              placeholder="Enter Udhyam number"
              value={formData.udhyam}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="phoneNumber" className="block text-sm mb-1">Phone number:</Label>
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

export default CompanyDetailsNext;
