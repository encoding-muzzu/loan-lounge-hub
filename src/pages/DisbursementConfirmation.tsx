
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Phone, Mail, MessageSquare, CreditCard, ArrowRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import MobileContainer from '@/components/MobileContainer';

const DisbursementConfirmation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("confirmation");
  
  const content = (
    <div className="min-h-screen bg-blue-50/30">
      <div className="p-4 pb-20">
        {/* Tabs Navigation */}
        <Tabs defaultValue="confirmation" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full bg-white rounded-full p-1 mb-5">
            <TabsTrigger value="confirmation" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md">
              Confirmation
            </TabsTrigger>
            <TabsTrigger value="loan-details" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md">
              Loan Details
            </TabsTrigger>
            <TabsTrigger value="support" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md">
              Support
            </TabsTrigger>
          </TabsList>

          {/* Confirmation Tab Content */}
          <TabsContent value="confirmation" className="mt-0 animate-fade-in">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-[#32CD32]" />
                <div>
                  <h2 className="text-[#32CD32] text-xl font-bold">Disbursement Successful</h2>
                  <p className="text-green-700">Your loan amount has been successfully disbursed to your account</p>
                </div>
              </div>
            </div>

            {/* Success Icon */}
            <div className="flex justify-center my-8">
              <div className="w-20 h-20 rounded-full bg-[#32CD32] flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
            </div>
            
            {/* Amount */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold">₹2,50,000</h2>
              <p className="text-gray-600">has been disbursed to your account</p>
            </div>
            
            {/* Account Details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Account Number</span>
                <span className="font-medium">XXXX XXXX 1234</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Disbursement Date</span>
                <span className="font-medium">10 July 2024</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Loan ID</span>
                <span className="font-medium">LN20240710001</span>
              </div>
            </div>
            
            {/* EMI Info */}
            <div className="bg-green-50 p-4 rounded-lg text-center mb-8">
              <p className="text-green-700">
                Your first EMI payment of ₹11,689 is scheduled for 10 August 2024
              </p>
            </div>
            
            {/* View Loan Details Button */}
            <Button 
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-[#0056D2] hover:to-[#0056D2] text-white rounded-full"
              onClick={() => setActiveTab("loan-details")}
            >
              View Loan Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>

          {/* Loan Details Tab Content */}
          <TabsContent value="loan-details" className="mt-0 animate-fade-in">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h2 className="text-[#0056D2] text-xl font-bold flex items-center">
                <CreditCard className="mr-2 h-5 w-5" /> Loan Details
              </h2>
              <p className="text-blue-600 text-sm">Complete information about your loan and repayment schedule</p>
            </div>
            
            {/* Loan Summary */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-center mb-2">
                  <CreditCard className="h-6 w-6 text-gray-500" />
                </div>
                <p className="text-center text-gray-600 text-sm">Loan Amount</p>
                <p className="text-center font-bold">₹2,50,000</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-6 w-6 text-gray-500" />
                </div>
                <p className="text-center text-gray-600 text-sm">Tenure</p>
                <p className="text-center font-bold">24 months</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-center mb-2">
                  <svg className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12H2M22 6H2M22 18H2" />
                  </svg>
                </div>
                <p className="text-center text-gray-600 text-sm">Interest Rate</p>
                <p className="text-center font-bold">11.5% p.a.</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-6 w-6 text-gray-500" />
                </div>
                <p className="text-center text-gray-600 text-sm">Monthly EMI</p>
                <p className="text-center font-bold">₹11,689</p>
              </div>
            </div>
            
            {/* Repayment Schedule */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">Repayment Schedule</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 text-left font-medium text-gray-600">Month</th>
                      <th className="p-2 text-left font-medium text-gray-600">Due Date</th>
                      <th className="p-2 text-left font-medium text-gray-600">Principal</th>
                      <th className="p-2 text-left font-medium text-gray-600">Interest</th>
                      <th className="p-2 text-left font-medium text-gray-600">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">1</td>
                      <td className="p-2">10 August 2024</td>
                      <td className="p-2">₹9,564</td>
                      <td className="p-2">₹2,125</td>
                      <td className="p-2">₹2,40,436</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">2</td>
                      <td className="p-2">10 September 2024</td>
                      <td className="p-2">₹9,645</td>
                      <td className="p-2">₹2,044</td>
                      <td className="p-2">₹2,30,791</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">3</td>
                      <td className="p-2">10 October 2024</td>
                      <td className="p-2">₹9,727</td>
                      <td className="p-2">₹1,962</td>
                      <td className="p-2">₹2,21,064</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">4</td>
                      <td className="p-2">10 November 2024</td>
                      <td className="p-2">₹9,810</td>
                      <td className="p-2">₹1,879</td>
                      <td className="p-2">₹2,11,254</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">5</td>
                      <td className="p-2">10 December 2024</td>
                      <td className="p-2">₹9,893</td>
                      <td className="p-2">₹1,796</td>
                      <td className="p-2">₹2,01,361</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">6</td>
                      <td className="p-2">10 January 2025</td>
                      <td className="p-2">₹9,977</td>
                      <td className="p-2">₹1,712</td>
                      <td className="p-2">₹1,91,384</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-1 text-right">Showing first 6 months of 24 months</p>
              </div>
            </div>
            
            {/* Totals */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-center text-gray-600 text-sm">Total Interest</p>
                <p className="text-center font-bold">₹30,536</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-center text-gray-600 text-sm">Total Repayment</p>
                <p className="text-center font-bold">₹2,80,536</p>
              </div>
            </div>
            
            {/* Need Help Button */}
            <Button 
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-[#0056D2] hover:to-[#0056D2] text-white rounded-full"
              onClick={() => setActiveTab("support")}
            >
              Need Help?
              <svg width="16" height="16" viewBox="0 0 24 24" className="ml-2" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </Button>
          </TabsContent>

          {/* Support Tab Content */}
          <TabsContent value="support" className="mt-0 animate-fade-in">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#0056D2]" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div>
                  <h2 className="text-[#0056D2] font-bold text-xl">Support Information</h2>
                  <p className="text-blue-600">We're here to help if you have any questions</p>
                </div>
              </div>
            </div>
            
            {/* Thank You Message */}
            <div className="text-center mb-6">
              <h3 className="font-bold text-lg">Thank You for Choosing Us!</h3>
              <p className="text-gray-600">We appreciate your trust in our services</p>
            </div>
            
            {/* Support Info */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                If you have any questions or need assistance with your loan, our customer support team is available to help you through multiple channels.
              </p>
            </div>
            
            {/* Contact Options */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="bg-gray-200 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-sm text-gray-600">1800-XXX-XXXX (Toll Free)</p>
                  <p className="text-xs text-gray-500">Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="bg-gray-200 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email Support</h4>
                  <p className="text-sm text-gray-600">support@loanabc.com</p>
                  <p className="text-xs text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="bg-gray-200 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium">Live Chat</h4>
                  <p className="text-sm text-gray-600">Chat with our support agents</p>
                  <p className="text-xs text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
            
            {/* FAQs */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">Frequently Asked Questions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">How do I check my EMI payment status?</li>
                <li className="text-gray-700">Can I make partial prepayment of my loan?</li>
                <li className="text-gray-700">How to update my personal information?</li>
                <li className="text-gray-700">What happens if I miss an EMI payment?</li>
              </ul>
            </div>
            
            {/* Back to Home Button */}
            <Button 
              onClick={() => navigate('/welcome')} 
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-[#0056D2] hover:to-[#0056D2] text-white rounded-full"
            >
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
  
  return <MobileContainer>{content}</MobileContainer>;
};

export default DisbursementConfirmation;
