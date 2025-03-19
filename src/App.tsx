
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import KYCVerification from "./pages/KYCVerification";
import UploadDocuments from "./pages/UploadDocuments";
import DocumentVerification from "./pages/DocumentVerification";
import ApplicationInProcess from "./pages/ApplicationInProcess";
import AdditionalInfoNeeded from "./pages/AdditionalInfoNeeded";
import ApplicationApproved from "./pages/ApplicationApproved";
import ApplicationNotApproved from "./pages/ApplicationNotApproved";
import LoanDocuments from "./pages/LoanDocuments";
import ESignAgreement from "./pages/ESignAgreement";
// import LoanAgreement from "./pages/LoanAgreement"; // Temporarily removed
import NACHSetup from "./pages/NACHSetup";
import DisbursementConfirmation from "./pages/DisbursementConfirmation";
import AadhaarAuth from "./pages/AadhaarAuth";
import AadhaarOtp from "./pages/AadhaarOtp";
import AadhaarSuccess from "./pages/AadhaarSuccess";
import ESignTransaction from "./pages/ESignTransaction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/account-type" element={<AccountType />} />
          
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
          
          {/* Finding Best Offers screen */}
          <Route path="/finding-best-offers" element={<FindingBestOffers />} />
          
          {/* New screens after Finding Best Offers */}
          <Route path="/available-offers" element={<AvailableOffers />} />
          <Route path="/kyc-verification" element={<KYCVerification />} />
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
          
          {/* Temporarily commented out LoanAgreement route */}
          {/* <Route path="/loan-agreement" element={<LoanAgreement />} /> */}
          
          <Route path="/nach-setup" element={<NACHSetup />} />
          <Route path="/disbursement-confirmation" element={<DisbursementConfirmation />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
