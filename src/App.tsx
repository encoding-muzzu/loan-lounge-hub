
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import all pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import AccountType from "./pages/AccountType";
import IndividualDetails from "./pages/individual/IndividualDetails";
import IndividualAddress from "./pages/individual/IndividualAddress";
import IndividualEmployeeDetails from "./pages/individual/IndividualEmployeeDetails";
import ProprietorDetails from "./pages/proprietor/ProprietorDetails";
import ProprietorAddress from "./pages/proprietor/ProprietorAddress";
import ProprietorRevenue from "./pages/proprietor/ProprietorRevenue";
import CompanyDetails from "./pages/company/CompanyDetails";
import CompanyDetailsNext from "./pages/company/CompanyDetailsNext";
import CompanyDocuments from "./pages/company/CompanyDocuments";
import CompanyProjection from "./pages/company/CompanyProjection";
import FindingBestOffers from "./pages/FindingBestOffers";
import AvailableOffers from "./pages/AvailableOffers";
import AlternativeOffers from "./pages/AlternativeOffers";
import KYCVerification from "./pages/KYCVerification";
import KYBVerification from "./pages/KYBVerification";
import UploadDocuments from "./pages/UploadDocuments";
import DocumentVerification from "./pages/DocumentVerification";
import ApplicationInProcess from "./pages/ApplicationInProcess";
import AdditionalInfoNeeded from "./pages/AdditionalInfoNeeded";
import ApplicationApproved from "./pages/ApplicationApproved";
import ApplicationNotApproved from "./pages/ApplicationNotApproved";
import LoanDocuments from "./pages/LoanDocuments";
import ESignAgreement from "./pages/ESignAgreement";
import NACHSetup from "./pages/NACHSetup";
import DisbursementConfirmation from "./pages/DisbursementConfirmation";
import DisbursementDetailsConfirmation from "./pages/DisbursementDetailsConfirmation";
import AadhaarAuth from "./pages/AadhaarAuth";
import AadhaarOtp from "./pages/AadhaarOtp";
import AadhaarSuccess from "./pages/AadhaarSuccess";
import ESignTransaction from "./pages/ESignTransaction";
import CompanyKYC from "./pages/company/CompanyKYC";
import AccountTypeSimple from "./pages/AccountTypeSimple";

const queryClient = new QueryClient();

const App = () => {
  // Initialize session storage for account type if not already set
  if (!sessionStorage.getItem('accountType')) {
    sessionStorage.setItem('accountType', 'individual');
  }
  
  // Initialize verification count if not set
  if (!sessionStorage.getItem('verificationCount')) {
    sessionStorage.setItem('verificationCount', '0');
  }

  // Determine which verification route to use based on the count
  const VerificationRoute = () => {
    const count = parseInt(sessionStorage.getItem('verificationCount') || '0');
    console.log(`Verification count is: ${count}`);
    
    return count === 1 ? <Navigate to="/kyb-verification" /> : <Navigate to="/kyc-verification" />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/account-type" element={<AccountType />} />
            <Route path="/account-type-simple" element={<AccountTypeSimple />} />
            
            {/* Individual account type routes */}
            <Route path="/individual/details" element={<IndividualDetails />} />
            <Route path="/individual/address" element={<IndividualAddress />} />
            <Route path="/individual/employee-details" element={<IndividualEmployeeDetails />} />
            
            {/* Sole Proprietor account type routes */}
            <Route path="/proprietor/details" element={<ProprietorDetails />} />
            <Route path="/proprietor/address" element={<ProprietorAddress />} />
            <Route path="/proprietor/revenue" element={<ProprietorRevenue />} />
            
            {/* Private Limited account type routes */}
            <Route path="/company/details" element={<CompanyDetails />} />
            <Route path="/company/details-next" element={<CompanyDetailsNext />} />
            <Route path="/company/documents" element={<CompanyDocuments />} />
            <Route path="/company/projection" element={<CompanyProjection />} />
            <Route path="/company/kyc" element={<CompanyKYC />} />
            
            {/* Finding Best Offers screen */}
            <Route path="/finding-best-offers" element={<FindingBestOffers />} />
            
            {/* New screens after Finding Best Offers */}
            <Route path="/available-offers" element={<AvailableOffers />} />
            <Route path="/alternative-offers" element={<AlternativeOffers />} />
            
            {/* Verification routes - the route will be determined dynamically */}
            <Route path="/verification" element={<VerificationRoute />} />
            <Route path="/kyc-verification" element={<KYCVerification />} />
            <Route path="/kyb-verification" element={<KYBVerification />} />
            
            <Route path="/upload-documents" element={<UploadDocuments />} />
            <Route path="/document-verification" element={<DocumentVerification />} />
            
            {/* Application Status Screens */}
            <Route path="/application-in-process" element={<ApplicationInProcess />} />
            <Route path="/additional-info-needed" element={<AdditionalInfoNeeded />} />
            <Route path="/application-approved" element={<ApplicationApproved />} />
            <Route path="/application-not-approved" element={<ApplicationNotApproved />} />
            
            {/* Loan Agreement, NACH Setup, and Disbursement Screens */}
            <Route path="/loan-documents" element={<LoanDocuments />} />
            <Route path="/e-sign-agreement" element={<ESignAgreement />} />
            
            {/* Aadhaar authentication screens */}
            <Route path="/aadhaar-auth" element={<AadhaarAuth />} />
            <Route path="/aadhaar-otp" element={<AadhaarOtp />} />
            <Route path="/aadhaar-success" element={<AadhaarSuccess />} />
            <Route path="/e-sign-transaction" element={<ESignTransaction />} />
            
            {/* Disbursement screens */}
            <Route path="/nach-setup" element={<NACHSetup />} />
            <Route path="/disbursement-confirmation" element={<DisbursementConfirmation />} />
            <Route path="/disbursement-details-confirmation" element={<DisbursementDetailsConfirmation />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
