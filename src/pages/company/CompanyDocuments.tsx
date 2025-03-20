
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
import { ArrowLeft, Menu, Building, FileText, ChevronLeft, Upload } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import MobileContainer from '@/components/MobileContainer';

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
    securityType: 'unsecured', // Changed default to 'unsecured'
    purpose: '',
    collateralUpload: null
  });
  const [consentChecked, setConsentChecked] = useState(false);

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
    navigate('/company/projection');
  };

  const handleBack = () => {
    navigate('/company/details-next');
  };

  const FileUploadBox = ({ id, onChange, label }: { id: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; label: string }) => (
    <div className="mb-4">
      <Label htmlFor={id} className="block text-sm mb-1">{label}</Label>
      <div className="border rounded-md p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer text-center">
        <label htmlFor={id} className="w-full cursor-pointer flex flex-col items-center">
          <Upload className="h-5 w-5 text-gray-500 mb-2" />
          <span className="text-sm text-gray-500">Click to select file</span>
          <Input
            id={id}
            type="file"
            className="hidden"
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );

  const content = (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-gradient-to-r from-[#0056D2] to-[#0078FF] text-white p-6">
        <div className="flex items-center gap-2 mb-1">
          <Building className="h-5 w-5" />
          <h1 className="text-2xl font-semibold">Private Limited Account Type</h1>
        </div>
        <p className="text-sm opacity-90 mt-1">
          Please provide required financial documents
        </p>
      </div>
      
      <div className="flex-1 container mx-auto py-6 px-4">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-6 -ml-2 text-gray-600 hover:text-black hover:bg-transparent p-2 flex items-center"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Building className="h-5 w-5 text-[#0056D2]" />
            <h1 className="text-xl font-semibold">Private Limited <span className="text-[#0056D2]">Document Upload</span></h1>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-[#0056D2]" />
            <p className="text-gray-600">Please provide required financial documents</p>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="mb-6">
              <h2 className="font-medium mb-2">Bank Statements</h2>
              
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
              
              <FileUploadBox 
                id="bankStatementUpload" 
                onChange={(e) => handleFileChange(e, 'bankStatementUpload')} 
                label="File attachment" 
              />
            </div>

            <div className="mb-6">
              <h2 className="font-medium mb-2">Projection</h2>
              
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
              
              <FileUploadBox 
                id="projectionUpload" 
                onChange={(e) => handleFileChange(e, 'projectionUpload')} 
                label="File attachment" 
              />
            </div>

            <div className="mb-6">
              <h2 className="font-medium mb-2">Financial Statement Number</h2>
              
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
              
              <FileUploadBox 
                id="financialUpload" 
                onChange={(e) => handleFileChange(e, 'financialUpload')} 
                label="File attachment" 
              />
            </div>

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

            {/* Collateral Documents Section - Only shown when "Secured" is selected */}
            {documents.securityType === 'secured' && (
              <div className="mb-6 p-4 border rounded-md bg-gray-50">
                <h2 className="font-medium mb-2">Collateral Documents</h2>
                <p className="text-sm text-gray-600 mb-3">
                  Please upload documents related to the collateral you're offering as security for this loan.
                </p>
                <FileUploadBox 
                  id="collateralUpload" 
                  onChange={(e) => handleFileChange(e, 'collateralUpload')} 
                  label="Collateral document" 
                />
              </div>
            )}

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
            
            <div className="mb-6 flex items-start gap-2">
              <Checkbox 
                id="consent" 
                checked={consentChecked}
                onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="consent" className="text-sm">
                I consent to provide these document details and understand they will be used for loan processing
              </Label>
            </div>
            
            <div className="flex justify-center mt-8 mb-4">
              <Button 
                type="submit"
                disabled={!consentChecked}
                className="bg-[#32CD32] hover:bg-[#0056D2] text-white rounded-md"
                variant="next"
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default CompanyDocuments;
