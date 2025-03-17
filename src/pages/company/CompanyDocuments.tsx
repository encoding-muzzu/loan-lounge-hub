
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
import { ArrowLeft, Menu, Upload } from 'lucide-react';
import { Label } from '@/components/ui/label';
import FormField from '@/components/FormField';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const CompanyDocuments = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState({
    bankStatement: '',
    bankStatementUpload: null,
    invoiceNumber: '',
    invoiceUpload: null,
    projectionNumber: '',
    projectionUpload: null,
    financialStatementNumber: '',
    fiscalYear: '',
    financialUpload: null,
    securityType: 'secured',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDocuments(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setDocuments(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments(prev => ({ 
        ...prev, 
        [fieldName]: e.target.files ? e.target.files[0] : null 
      }));
    }
  };

  const handleRadioChange = (value: string) => {
    setDocuments(prev => ({ ...prev, securityType: value }));
  };

  const handleNext = () => {
    navigate('/company/kyc');
  };

  const handleBack = () => {
    navigate('/company/details-next');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0056D2] text-white">
          <ArrowLeft size={20} onClick={handleBack} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-xl font-medium">
            Documents <span className="font-bold">Upload</span>
          </h1>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          {/* Bank Statement */}
          <div className="mb-4">
            <label htmlFor="bankStatement" className="block text-sm mb-1">Bank Statement:</label>
            <Select
              onValueChange={(value) => handleSelectChange('bankStatement', value)}
              value={documents.bankStatement}
            >
              <SelectTrigger className="w-full border rounded-md">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="statement1">Statement 1</SelectItem>
                <SelectItem value="statement2">Statement 2</SelectItem>
                <SelectItem value="statement3">Statement 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bank Statement Upload */}
          <div className="mb-4">
            <Label htmlFor="bankStatementUpload" className="block text-sm mb-1">File attachment:</Label>
            <div className="flex gap-2">
              <Input
                id="bankStatementUpload"
                type="file"
                className="border rounded-md w-full"
                onChange={(e) => handleFileChange(e, 'bankStatementUpload')}
              />
            </div>
          </div>

          {/* Invoice Number */}
          <div className="mb-4">
            <Label htmlFor="invoiceNumber" className="block text-sm mb-1">Number:</Label>
            <Input
              id="invoiceNumber"
              name="invoiceNumber"
              value={documents.invoiceNumber}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>

          {/* Invoice Upload */}
          <div className="mb-4">
            <Label htmlFor="invoiceUpload" className="block text-sm mb-1">File attachment:</Label>
            <div className="flex gap-2">
              <Input
                id="invoiceUpload"
                type="file"
                className="border rounded-md w-full"
                onChange={(e) => handleFileChange(e, 'invoiceUpload')}
              />
            </div>
          </div>

          {/* Projection Number */}
          <div className="mb-4">
            <Label htmlFor="projectionNumber" className="block text-sm mb-1">Number:</Label>
            <Input
              id="projectionNumber"
              name="projectionNumber"
              value={documents.projectionNumber}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>

          {/* Projection Upload */}
          <div className="mb-4">
            <Label htmlFor="projectionUpload" className="block text-sm mb-1">File attachment:</Label>
            <div className="flex gap-2">
              <Input
                id="projectionUpload"
                type="file"
                className="border rounded-md w-full"
                onChange={(e) => handleFileChange(e, 'projectionUpload')}
              />
            </div>
          </div>

          {/* Financial Statement Number */}
          <div className="mb-4">
            <Label htmlFor="financialStatementNumber" className="block text-sm mb-1">Financial Statement Number:</Label>
            <Input
              id="financialStatementNumber"
              name="financialStatementNumber"
              value={documents.financialStatementNumber}
              onChange={handleChange}
              className="border rounded-md w-full"
            />
          </div>

          {/* Fiscal Year */}
          <div className="mb-4">
            <Label htmlFor="fiscalYear" className="block text-sm mb-1">Fiscal Year:</Label>
            <Select
              onValueChange={(value) => handleSelectChange('fiscalYear', value)}
              value={documents.fiscalYear}
            >
              <SelectTrigger className="w-full border rounded-md">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Financial Statement Upload */}
          <div className="mb-4">
            <Label htmlFor="financialUpload" className="block text-sm mb-1">File attachment:</Label>
            <div className="flex gap-2">
              <Input
                id="financialUpload"
                type="file"
                className="border rounded-md w-full"
                onChange={(e) => handleFileChange(e, 'financialUpload')}
              />
            </div>
          </div>

          {/* Type of Security */}
          <div className="mb-6">
            <Label className="block text-sm mb-2">Type of security:</Label>
            <RadioGroup 
              defaultValue={documents.securityType}
              className="flex gap-4"
              onValueChange={handleRadioChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="secured" id="secured" />
                <Label htmlFor="secured">Secured</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unsecured" id="unsecured" />
                <Label htmlFor="unsecured">Unsecured</Label>
              </div>
            </RadioGroup>
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

export default CompanyDocuments;
