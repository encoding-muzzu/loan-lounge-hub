
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  ArrowRight, 
  Calendar, 
  CreditCard, 
  BarChart, 
  Info, 
  Phone, 
  Mail, 
  MessageSquare 
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import MobileContainer from '@/components/MobileContainer';

const DisbursementConfirmation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("confirmation");
  
  const handleViewLoanDetails = () => {
    setActiveTab("loanDetails");
  };
  
  const content = (
    <div className="min-h-screen bg-gray-50">
      <Tabs 
        defaultValue="confirmation" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="bg-white p-4">
          <TabsList className="grid grid-cols-3 bg-gray-100 rounded-full p-1 w-full">
            <TabsTrigger 
              value="confirmation" 
              className="data-[state=active]:bg-white data-[state=active]:shadow rounded-full"
            >
              Confirmation
            </TabsTrigger>
            <TabsTrigger 
              value="loanDetails" 
              className="data-[state=active]:bg-white data-[state=active]:shadow rounded-full"
            >
              Loan Details
            </TabsTrigger>
            <TabsTrigger 
              value="support" 
              className="data-[state=active]:bg-white data-[state=active]:shadow rounded-full"
            >
              Support
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Confirmation Tab */}
        <TabsContent value="confirmation" className="m-0 p-4">
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <Check className="text-[#32CD32] h-5 w-5" />
              <h2 className="text-[#32CD32] text-xl font-bold">Disbursement Successful</h2>
            </div>
            <p className="text-green-700 pl-7">
              Your loan amount has been successfully disbursed to your account
            </p>
          </div>
          
          <div className="flex justify-center my-6">
            <div className="w-20 h-20 rounded-full bg-[#32CD32] flex items-center justify-center">
              <Check className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold">₹2,50,000</h3>
            <p className="text-gray-500">has been disbursed to your account</p>
          </div>
          
          <Card className="mb-6">
            <CardContent className="p-4 grid grid-cols-2 gap-2">
              <div className="text-gray-600">Account Number</div>
              <div className="text-right font-medium">XXXX XXXX 1234</div>
              
              <div className="text-gray-600">Disbursement Date</div>
              <div className="text-right font-medium">10 July 2024</div>
              
              <div className="text-gray-600">Loan ID</div>
              <div className="text-right font-medium">LN20240710001</div>
            </CardContent>
          </Card>
          
          <div className="bg-green-50 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-700">
              Your first EMI payment of ₹11,689 is scheduled for 10 August 2024
            </p>
          </div>
          
          <Button 
            onClick={handleViewLoanDetails} 
            className="w-full bg-[#ff4757] hover:bg-[#0056D2] text-white rounded-full px-6 py-3 flex items-center justify-center"
          >
            View Loan Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </TabsContent>
        
        {/* Loan Details Tab */}
        <TabsContent value="loanDetails" className="m-0">
          <div className="bg-[#EEF3FF] p-4">
            <h2 className="text-[#0056D2] font-bold flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-[#0056D2]" />
              Loan Details
            </h2>
            <p className="text-sm text-gray-600 ml-7">Complete information about your loan and repayment schedule</p>
          </div>
          
          <div className="p-4 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <CreditCard className="h-6 w-6 text-gray-500 mb-1" />
                <p className="text-gray-600 text-sm">Loan Amount</p>
                <p className="font-bold text-lg">₹2,50,000</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <Calendar className="h-6 w-6 text-gray-500 mb-1" />
                <p className="text-gray-600 text-sm">Tenure</p>
                <p className="font-bold text-lg">24 months</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <BarChart className="h-6 w-6 text-gray-500 mb-1" />
                <p className="text-gray-600 text-sm">Interest Rate</p>
                <p className="font-bold text-lg">11.5% p.a.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <Calendar className="h-6 w-6 text-gray-500 mb-1" />
                <p className="text-gray-600 text-sm">Monthly EMI</p>
                <p className="font-bold text-lg">₹11,689</p>
              </div>
            </div>
          </div>
          
          <div className="px-4">
            <h3 className="font-medium mb-2">Repayment Schedule</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-600 border-b">
                    <th className="py-2 text-left">Month</th>
                    <th className="py-2 text-left">Due Date</th>
                    <th className="py-2 text-right">Principal</th>
                    <th className="py-2 text-right">Interest</th>
                    <th className="py-2 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">1</td>
                    <td className="py-2">10 August 2024</td>
                    <td className="py-2 text-right">₹9,564</td>
                    <td className="py-2 text-right">₹2,125</td>
                    <td className="py-2 text-right">₹2,40,436</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">2</td>
                    <td className="py-2">10 September 2024</td>
                    <td className="py-2 text-right">₹9,645</td>
                    <td className="py-2 text-right">₹2,044</td>
                    <td className="py-2 text-right">₹2,30,791</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">3</td>
                    <td className="py-2">10 October 2024</td>
                    <td className="py-2 text-right">₹9,727</td>
                    <td className="py-2 text-right">₹1,962</td>
                    <td className="py-2 text-right">₹2,21,064</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">4</td>
                    <td className="py-2">10 November 2024</td>
                    <td className="py-2 text-right">₹9,810</td>
                    <td className="py-2 text-right">₹1,879</td>
                    <td className="py-2 text-right">₹2,11,254</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">5</td>
                    <td className="py-2">10 December 2024</td>
                    <td className="py-2 text-right">₹9,893</td>
                    <td className="py-2 text-right">₹1,796</td>
                    <td className="py-2 text-right">₹2,01,361</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">6</td>
                    <td className="py-2">10 January 2025</td>
                    <td className="py-2 text-right">₹9,977</td>
                    <td className="py-2 text-right">₹1,712</td>
                    <td className="py-2 text-right">₹1,91,384</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 text-center my-2">Showing first 6 months of 24 months</p>
            </div>
          </div>
          
          <div className="p-4 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-sm">Total Interest</p>
                <p className="font-bold text-lg">₹30,536</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-sm">Total Repayment</p>
                <p className="font-bold text-lg">₹2,80,536</p>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <Button 
              onClick={() => setActiveTab("support")} 
              className="w-full bg-[#ff4757] hover:bg-[#0056D2] text-white rounded-full px-6 py-3 flex items-center justify-center"
            >
              Need Help?
              <Info className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        {/* Support Tab */}
        <TabsContent value="support" className="m-0">
          <div className="bg-[#EEF3FF] p-4">
            <h2 className="text-[#0056D2] font-bold flex items-center gap-2">
              <Info className="h-5 w-5 text-[#0056D2]" />
              Support Information
            </h2>
            <p className="text-sm text-gray-600 ml-7">We're here to help if you have any questions</p>
          </div>
          
          <div className="p-4">
            <div className="text-center mb-6">
              <h3 className="font-bold text-lg">Thank You for Choosing Us!</h3>
              <p className="text-gray-600">We appreciate your trust in our services</p>
            </div>
            
            <div className="bg-[#EEF3FF] p-4 rounded-lg mb-6">
              <p className="text-gray-700 text-sm">
                If you have any questions or need assistance with your loan, our customer support team is available to help you through multiple channels.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                <Phone className="h-5 w-5 text-[#0056D2] mt-1" />
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-gray-700">1800-XXX-XXXX (Toll Free)</p>
                  <p className="text-xs text-gray-500">Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                <Mail className="h-5 w-5 text-[#0056D2] mt-1" />
                <div>
                  <h4 className="font-medium">Email Support</h4>
                  <p className="text-gray-700">support@loanabc.com</p>
                  <p className="text-xs text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                <MessageSquare className="h-5 w-5 text-[#0056D2] mt-1" />
                <div>
                  <h4 className="font-medium">Live Chat</h4>
                  <p className="text-gray-700">Chat with our support agents</p>
                  <p className="text-xs text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>How do I check my EMI payment status?</li>
                <li>Can I make partial prepayment of my loan?</li>
                <li>How to update my personal information?</li>
                <li>What happens if I miss an EMI payment?</li>
              </ul>
            </div>
            
            <Button 
              onClick={() => navigate('/welcome')} 
              className="w-full bg-[#ff4757] hover:bg-[#0056D2] text-white rounded-full px-6 py-3 flex items-center justify-center"
            >
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
  
  return <MobileContainer>{content}</MobileContainer>;
};

export default DisbursementConfirmation;
