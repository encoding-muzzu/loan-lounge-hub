
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

const CompanyProjection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectionFiscalYear: '',
    projectionNumber: '',
    projectionUpload: null,
    financialFiscalYear: '',
    financialStatementNumber: '',
    financialUpload: null
  });

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ 
        ...prev, 
        [fieldName]: e.target.files ? e.target.files[0] : null 
      }));
    }
  };

  const handleNext = () => {
    // Navigate to finding best offers page instead of welcome
    navigate('/finding-best-offers');
  };

  const handleBack = () => {
    navigate('/company/documents');
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
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          {/* Projection Section */}
          <div className="mb-6">
            <h2 className="font-medium mb-4">Projection</h2>
            
            {/* Fiscal Year */}
            <div className="mb-3">
              <Label htmlFor="projectionFiscalYear" className="block text-sm mb-1">Fiscal Year</Label>
              <Select
                onValueChange={(value) => handleSelectChange('projectionFiscalYear', value)}
                value={formData.projectionFiscalYear}
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
              <Select
                onValueChange={(value) => handleSelectChange('projectionNumber', value)}
                value={formData.projectionNumber}
              >
                <SelectTrigger className="w-full border rounded-md">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* File attachment */}
            <div className="mb-6">
              <Label htmlFor="projectionUpload" className="block text-sm mb-1">File attachment</Label>
              <div className="border rounded-md px-3 py-2 bg-gray-50">
                <Input
                  id="projectionUpload"
                  type="file"
                  className="border-0 p-0 bg-transparent"
                  placeholder="Drag and drop your file here"
                  onChange={(e) => handleFileChange(e, 'projectionUpload')}
                />
              </div>
            </div>
          </div>

          {/* Financial Statement Section */}
          <div className="mb-6">
            <h2 className="font-medium mb-4">Financial Statement Number</h2>
            
            {/* Fiscal Year */}
            <div className="mb-3">
              <Label htmlFor="financialFiscalYear" className="block text-sm mb-1">Fiscal Year</Label>
              <Select
                onValueChange={(value) => handleSelectChange('financialFiscalYear', value)}
                value={formData.financialFiscalYear}
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
              <Select
                onValueChange={(value) => handleSelectChange('financialStatementNumber', value)}
                value={formData.financialStatementNumber}
              >
                <SelectTrigger className="w-full border rounded-md">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* File attachment */}
            <div className="mb-6">
              <Label htmlFor="financialUpload" className="block text-sm mb-1">File attachment</Label>
              <div className="border rounded-md px-3 py-2 bg-gray-50">
                <Input
                  id="financialUpload"
                  type="file"
                  className="border-0 p-0 bg-transparent"
                  placeholder="Drag and drop your file here"
                  onChange={(e) => handleFileChange(e, 'financialUpload')}
                />
              </div>
            </div>
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

export default CompanyProjection;
