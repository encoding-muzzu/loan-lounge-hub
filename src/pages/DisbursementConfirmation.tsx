
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Download, Home } from 'lucide-react';
import StepLayout from '@/components/StepLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DisbursementConfirmation = () => {
  const navigate = useNavigate();
  
  // Sample repayment schedule data
  const repaymentSchedule = [
    { installment: 1, dueDate: '10 Jun 2023', amount: '₹6,500', principal: '₹4,375', interest: '₹2,125', balance: '₹2,95,625' },
    { installment: 2, dueDate: '10 Jul 2023', amount: '₹6,500', principal: '₹4,406', interest: '₹2,094', balance: '₹2,91,219' },
    { installment: 3, dueDate: '10 Aug 2023', amount: '₹6,500', principal: '₹4,437', interest: '₹2,063', balance: '₹2,86,782' },
    { installment: 4, dueDate: '10 Sep 2023', amount: '₹6,500', principal: '₹4,469', interest: '₹2,031', balance: '₹2,82,313' },
    { installment: 5, dueDate: '10 Oct 2023', amount: '₹6,500', principal: '₹4,500', interest: '₹2,000', balance: '₹2,77,813' },
  ];

  return (
    <StepLayout title="Disbursement Confirmation" showBack={false}>
      <div className="flex flex-col max-w-3xl mx-auto">
        {/* Success Message */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-center">Loan Successfully Disbursed!</h2>
          <p className="text-gray-600 text-center">
            Your loan amount of ₹3,00,000 has been disbursed and will reflect in your account within 24 hours.
          </p>
        </div>
        
        {/* Loan Details */}
        <Card className="mb-6 border-green-100 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-[#0056D2]">Loan Details</CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Loan Amount</p>
                <p className="font-bold text-lg">₹3,00,000</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Interest Rate</p>
                <p className="font-bold text-lg">10.5%</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Monthly EMI</p>
                <p className="font-bold text-lg">₹6,500</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Tenure</p>
                <p className="font-bold text-lg">60 months</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-[#0056D2] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[#0056D2]">First EMI Due Date</h4>
                  <p className="text-gray-700">10th June 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Repayment Schedule */}
        <Card className="mb-6 border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle>Repayment Schedule</CardTitle>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>EMI</TableHead>
                    <TableHead>Principal</TableHead>
                    <TableHead>Interest</TableHead>
                    <TableHead>Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {repaymentSchedule.map((row) => (
                    <TableRow key={row.installment}>
                      <TableCell>{row.installment}</TableCell>
                      <TableCell>{row.dueDate}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.principal}</TableCell>
                      <TableCell>{row.interest}</TableCell>
                      <TableCell>{row.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 text-center">
              Showing first 5 installments. Download full schedule for complete details.
            </div>
          </CardContent>
        </Card>
        
        {/* Thank you message */}
        <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-8">
          <h3 className="font-medium text-green-800 mb-2">Thank you for choosing GRO Finance!</h3>
          <p className="text-green-700">
            If you have any questions or need assistance, please contact our customer support at 
            <a href="mailto:support@grofinance.com" className="underline ml-1">support@grofinance.com</a> or 
            call us at <span className="font-medium">1800-123-4567</span>.
          </p>
        </div>
        
        <Button 
          onClick={() => navigate('/welcome')}
          className="bg-[#32CD32] hover:bg-green-600 text-white"
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </StepLayout>
  );
};

export default DisbursementConfirmation;
