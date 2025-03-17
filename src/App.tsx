
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import AccountType from "./pages/AccountType";
import AccountTypeSimple from "./pages/AccountTypeSimple";
import IndividualDetails from "./pages/individual/IndividualDetails";
import IndividualAddress from "./pages/individual/IndividualAddress";
import IndividualEmployeeDetails from "./pages/individual/IndividualEmployeeDetails";

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
          <Route path="/account-type" element={<AccountTypeSimple />} />
          <Route path="/account-type-details" element={<AccountType />} />
          <Route path="/individual/details" element={<IndividualDetails />} />
          <Route path="/individual/address" element={<IndividualAddress />} />
          <Route path="/individual/employee-details" element={<IndividualEmployeeDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
