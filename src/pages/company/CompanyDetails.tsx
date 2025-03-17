
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
import StepLayout from '@/components/StepLayout';
import FormField from '@/components/FormField';

const CompanyDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    natureOfBusiness: '',
    taxIdentificationNumber: '',
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
    // In a real app, we would validate the form here
    navigate('/company/documents');
  };

  return (
    <StepLayout title="" backUrl="/account-type">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-lg font-medium mb-4">Enter <span className="text-[#0056D2]">Company Details:</span></h1>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <FormField
            label="Full Name:"
            htmlFor="fullName"
          >
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Business Name:"
            htmlFor="businessName"
          >
            <Input
              id="businessName"
              name="businessName"
              placeholder="Enter your business name"
              value={formData.businessName}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Nature of Business:"
            htmlFor="natureOfBusiness"
          >
            <Select
              onValueChange={(value) => handleSelectChange('natureOfBusiness', value)}
              value={formData.natureOfBusiness}
            >
              <SelectTrigger className="w-full loan-input">
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
          </FormField>
          
          <FormField
            label="Tax Identification Number:"
            htmlFor="taxIdentificationNumber"
          >
            <Input
              id="taxIdentificationNumber"
              name="taxIdentificationNumber"
              placeholder="Enter TIN"
              value={formData.taxIdentificationNumber}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Loan Type:"
            htmlFor="loanType"
          >
            <Select
              onValueChange={(value) => handleSelectChange('loanType', value)}
              value={formData.loanType}
            >
              <SelectTrigger className="w-full loan-input">
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
          </FormField>
          
          <FormField
            label="Type of Entity:"
            htmlFor="entityType"
          >
            <Select
              onValueChange={(value) => handleSelectChange('entityType', value)}
              value={formData.entityType}
            >
              <SelectTrigger className="w-full loan-input">
                <SelectValue placeholder="Select entity type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">Private Limited</SelectItem>
                <SelectItem value="llp">LLP</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="public">Public Limited</SelectItem>
              </SelectContent>
            </Select>
          </FormField>
          
          <FormField
            label="Email ID:"
            htmlFor="email"
          >
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@example.com"
              value={formData.email}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="GSTIN:"
            htmlFor="gstin"
          >
            <Input
              id="gstin"
              name="gstin"
              placeholder="Enter GSTIN"
              value={formData.gstin}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="CIN:"
            htmlFor="cin"
          >
            <Input
              id="cin"
              name="cin"
              placeholder="Enter CIN"
              value={formData.cin}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Udhyam:"
            htmlFor="udhyam"
          >
            <Input
              id="udhyam"
              name="udhyam"
              placeholder="Enter Udhyam"
              value={formData.udhyam}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <FormField
            label="Phone Number:"
            htmlFor="phoneNumber"
          >
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+91 XXXXXXXXXX"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="loan-input"
            />
          </FormField>
          
          <div className="flex justify-end mt-6">
            <Button 
              type="submit"
              className="bg-[#32CD32] hover:bg-green-600 text-white"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </StepLayout>
  );
};

export default CompanyDetails;
