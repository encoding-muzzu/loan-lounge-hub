
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
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

const CompanyDocuments = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState({
    bankStatement: '',
    fiscalYear: '',
    bankStatementNumber: '',
    bankStatementUpload: null,
    projectionFiscalYear: '',
    projectionNumber: '',
    projectionUpload: null,
    financialStatementNumber: '',
    financialFiscalYear: '',
    financialUpload: null,
    securityType: 'secured',
    purpose: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    // Updated to navigate to the projection page
    navigate('/company/projection');
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
          <h1 className="text-xl font-bold">
            Documents <span className="font-normal">Upload</span>
          </h1>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          {/* Bank Statement Section */}
          <div className="mb-6">
            <h2 className="font-medium mb-2">Bank Statements</h2>
            
            {/* Fiscal Year */}
            <div className="mb-3">
              <Label htmlFor="fiscalYear" className="block text-sm mb-1">Fiscal Year</Label>
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

            {/* Number */}
            <div className="mb-3">
              <Label htmlFor="bankStatementNumber" className="block text-sm mb-1">Number</Label>
              <Input
                id="bankStatementNumber"
                name="bankStatementNumber"
                value={documents.bankStatementNumber}
                onChange={handleChange}
                className="border rounded-md w-full"
              />
            </div>
            
            {/* File attachment */}
            <div className="mb-4">
              <Label htmlFor="bankStatementUpload" className="block text-sm mb-1">File attachment</Label>
              <div className="border rounded-md px-3 py-2 bg-gray-50">
                <Input
                  id="bankStatementUpload"
                  type="file"
                  className="border-0 p-0 bg-transparent"
                  onChange={(e) => handleFileChange(e, 'bankStatementUpload')}
                />
              </div>
            </div>
          </div>

          {/* Projection Section */}
          <div className="mb-6">
            <h2 className="font-medium mb-2">Projection</h2>
            
            {/* Fiscal Year */}
            <div className="mb-3">
              <Label htmlFor="projectionFiscalYear" className="block text-sm mb-1">Fiscal Year</Label>
              <Select
                onValueChange={(value) => handleSelectChange('projectionFiscalYear', value)}
                value={documents.projectionFiscalYear}
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

            {/* Number */}
            <div className="mb-3">
              <Label htmlFor="projectionNumber" className="block text-sm mb-1">Number</Label>
              <Input
                id="projectionNumber"
                name="projectionNumber"
                value={documents.projectionNumber}
                onChange={handleChange}
                className="border rounded-md w-full"
              />
            </div>
            
            {/* File attachment */}
            <div className="mb-4">
              <Label htmlFor="projectionUpload" className="block text-sm mb-1">File attachment</Label>
              <div className="border rounded-md px-3 py-2 bg-gray-50">
                <Input
                  id="projectionUpload"
                  type="file"
                  className="border-0 p-0 bg-transparent"
                  onChange={(e) => handleFileChange(e, 'projectionUpload')}
                />
              </div>
            </div>
          </div>

          {/* Financial Statement Section */}
          <div className="mb-6">
            <h2 className="font-medium mb-2">Financial Statement Number</h2>
            
            {/* Fiscal Year */}
            <div className="mb-3">
              <Label htmlFor="financialFiscalYear" className="block text-sm mb-1">Fiscal Year</Label>
              <Select
                onValueChange={(value) => handleSelectChange('financialFiscalYear', value)}
                value={documents.financialFiscalYear}
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

            {/* Number */}
            <div className="mb-3">
              <Label htmlFor="financialStatementNumber" className="block text-sm mb-1">Number</Label>
              <Input
                id="financialStatementNumber"
                name="financialStatementNumber"
                value={documents.financialStatementNumber}
                onChange={handleChange}
                className="border rounded-md w-full"
              />
            </div>
            
            {/* File attachment */}
            <div className="mb-4">
              <Label htmlFor="financialUpload" className="block text-sm mb-1">File attachment</Label>
              <div className="border rounded-md px-3 py-2 bg-gray-50">
                <Input
                  id="financialUpload"
                  type="file"
                  className="border-0 p-0 bg-transparent"
                  onChange={(e) => handleFileChange(e, 'financialUpload')}
                />
              </div>
            </div>
          </div>

          {/* Type of Security */}
          <div className="mb-4">
            <Label className="block text-sm mb-2 font-medium">Type of security:</Label>
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

          {/* Purpose */}
          <div className="mb-6">
            <Label htmlFor="purpose" className="block text-sm mb-2 font-medium">Purpose:</Label>
            <Textarea
              id="purpose"
              name="purpose"
              value={documents.purpose}
              onChange={handleChange}
              className="w-full border rounded-md"
              placeholder="Add text"
              rows={4}
            />
          </div>
          
          <div className="flex justify-center mt-8 mb-4">
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
