
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileContainer from '@/components/MobileContainer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Check, CreditCard, Calendar, BarChart3, Phone, Mail, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const DisbursementDetailsConfirmation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("confirmation");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const content = (
    <div className="min-h-screen bg-gray-50">
      <Tabs 
        defaultValue="confirmation" 
        className="w-full"
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <div className="bg-white px-4 py-3">
          <TabsList className="grid grid-cols-3 w-full bg-gray-100 rounded-full p-1">
            <TabsTrigger 
              value="confirmation" 
              className={`rounded-full text-sm ${activeTab === "confirmation" ? "bg-white shadow-sm" : ""}`}
            >
              Confirmation
            </TabsTrigger>
            <TabsTrigger 
              value="loan-details"
              className={`rounded-full text-sm ${activeTab === "loan-details" ? "bg-white shadow-sm" : ""}`}
            >
              Loan Details
            </TabsTrigger>
            <TabsTrigger 
              value="support"
              className={`rounded-full text-sm ${activeTab === "support" ? "bg-white shadow-sm" : ""}`}
            >
              Support
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Confirmation Tab Content */}
        <TabsContent value="confirmation" className="p-4">
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 h-6 w-6" />
              <div>
                <h2 className="text-green-700 text-xl font-semibold">Disbursement Successful</h2>
                <p className="text-green-600 text-sm">Your loan amount has been successfully disbursed to your account</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-8">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="h-10 w-10 text-white" />
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">₹2,50,000</h2>
            <p className="text-gray-500">has been disbursed to your account</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Account Number</span>
              <span className="font-medium">XXXX XXXX 1234</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Disbursement Date</span>
              <span className="font-medium">10 July 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Loan ID</span>
              <span className="font-medium">LN20240710001</span>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-700">
              Your first EMI payment of ₹11,689 is scheduled for 10 August 2024
            </p>
          </div>

          <Button 
            className="w-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:bg-[#0056D2] text-white py-3"
            onClick={() => setActiveTab("loan-details")}
          >
            View Loan Details <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </TabsContent>

        {/* Loan Details Tab Content */}
        <TabsContent value="loan-details" className="p-4">
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <CreditCard className="text-blue-600 mr-2 h-5 w-5" />
              <div>
                <h2 className="text-blue-700 font-semibold">Loan Details</h2>
                <p className="text-blue-600 text-sm">Complete information about your loan and repayment schedule</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <CreditCard className="text-gray-500 h-5 w-5 mb-2" />
              <div>
                <span className="text-gray-600 text-sm">Loan Amount</span>
                <p className="font-bold text-lg">₹2,50,000</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <Calendar className="text-gray-500 h-5 w-5 mb-2" />
              <div>
                <span className="text-gray-600 text-sm">Tenure</span>
                <p className="font-bold text-lg">24 months</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <BarChart3 className="text-gray-500 h-5 w-5 mb-2" />
              <div>
                <span className="text-gray-600 text-sm">Interest Rate</span>
                <p className="font-bold text-lg">11.5% p.a.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <Calendar className="text-gray-500 h-5 w-5 mb-2" />
              <div>
                <span className="text-gray-600 text-sm">Monthly EMI</span>
                <p className="font-bold text-lg">₹11,689</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Repayment Schedule</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-600 border-b">
                    <th className="text-left py-2">Month</th>
                    <th className="text-left py-2">Due Date</th>
                    <th className="text-right py-2">Principal</th>
                    <th className="text-right py-2">Interest</th>
                    <th className="text-right py-2">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">1</td>
                    <td>10 August 2024</td>
                    <td className="text-right">₹9,564</td>
                    <td className="text-right">₹2,125</td>
                    <td className="text-right">₹2,40,436</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">2</td>
                    <td>10 September 2024</td>
                    <td className="text-right">₹9,645</td>
                    <td className="text-right">₹2,044</td>
                    <td className="text-right">₹2,30,791</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">3</td>
                    <td>10 October 2024</td>
                    <td className="text-right">₹9,727</td>
                    <td className="text-right">₹1,962</td>
                    <td className="text-right">₹2,21,064</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">4</td>
                    <td>10 November 2024</td>
                    <td className="text-right">₹9,810</td>
                    <td className="text-right">₹1,879</td>
                    <td className="text-right">₹2,11,254</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">5</td>
                    <td>10 December 2024</td>
                    <td className="text-right">₹9,893</td>
                    <td className="text-right">₹1,796</td>
                    <td className="text-right">₹2,01,361</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">6</td>
                    <td>10 January 2025</td>
                    <td className="text-right">₹9,977</td>
                    <td className="text-right">₹1,712</td>
                    <td className="text-right">₹1,91,384</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">Showing first 6 months of 24 months</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <span className="text-gray-600 text-sm">Total Interest</span>
              <p className="font-bold text-lg">₹30,536</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <span className="text-gray-600 text-sm">Total Repayment</span>
              <p className="font-bold text-lg">₹2,80,536</p>
            </div>
          </div>

          <Button 
            className="w-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:bg-[#0056D2] text-white py-3"
            onClick={() => setActiveTab("support")}
          >
            Need Help? <HelpCircle className="ml-1 h-4 w-4" />
          </Button>
        </TabsContent>

        {/* Support Tab Content */}
        <TabsContent value="support" className="p-4">
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <HelpCircle className="text-blue-600 mr-2 h-5 w-5" />
              <div>
                <h2 className="text-blue-700 font-semibold">Support Information</h2>
                <p className="text-blue-600 text-sm">We're here to help if you have any questions</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-1">Thank You for Choosing Us!</h2>
            <p className="text-gray-600">We appreciate your trust in our services</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700">
              If you have any questions or need assistance with your loan, our customer support team is available to help you through multiple channels.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
              <Phone className="text-gray-500 h-5 w-5 mr-3" />
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-gray-600 text-sm">1800-XXX-XXXX (Toll Free)</p>
                <p className="text-gray-500 text-xs">Mon-Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
              <Mail className="text-gray-500 h-5 w-5 mr-3" />
              <div>
                <h3 className="font-medium">Email Support</h3>
                <p className="text-gray-600 text-sm">support@loanabc.com</p>
                <p className="text-gray-500 text-xs">We respond within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
              <MessageSquare className="text-gray-500 h-5 w-5 mr-3" />
              <div>
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-gray-600 text-sm">Chat with our support agents</p>
                <p className="text-gray-500 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>How do I check my EMI payment status?</li>
              <li>Can I make partial prepayment of my loan?</li>
              <li>How to update my personal information?</li>
              <li>What happens if I miss an EMI payment?</li>
            </ul>
          </div>

          <Button 
            className="w-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:bg-[#0056D2] text-white py-3"
            onClick={() => navigate('/welcome')}
          >
            Back to Home <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );

  return <MobileContainer>{content}</MobileContainer>;
};

export default DisbursementDetailsConfirmation;
