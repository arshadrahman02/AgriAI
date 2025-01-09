import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Buy from "./pages/services/Buy";
import Sell from "./pages/services/Sell";
import SignInForm from "./pages/SignIn";
import SignUpForm from "./pages/SignUp";
import Services from "./pages/Services";
import Course from "./pages/Course";
import Technology from "./pages/services/Technology";
import CropCare from "./pages/services/CropCare";
import OrganicFarming from "./pages/services/OrganicFarming";
import MarketAccess from "./pages/services/MarketAccess";
import Equipment from "./pages/services/Equipment";
import Training from "./pages/services/Training";
import Admin from "./pages/Admin";
import { ProductProvider } from "./context/product-context";
import ProductDetails from "./pages/services/ProductDetails";
import CropCareDetails from "./pages/services/CropCareDetails";
import OrganicFarmingDetails from "./pages/services/OrganicFarmingDetails";
import FAQSection from "./components/landing/FAQSection";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ProductProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/analyze" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/services/buy" element={<Buy />} />
                    <Route path="/services/sell" element={<Sell />} />
                    <Route path="/sign-in" element={<SignInForm />} />
                    <Route path="/sign-up" element={<SignUpForm />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/services/technology" element={<Technology />} />
                    <Route path="/services/crop-care" element={<CropCare />} />
                    <Route path="/services/crop-care/:blogId" element={<CropCareDetails />} />
                    <Route path="/services/organic-farming" element={<OrganicFarming />} />
                    <Route path="/services/organic-farming/:blogId" element={<OrganicFarmingDetails />} />
                    <Route path="/services/market-access" element={<MarketAccess />} />
                    <Route path="/services/equipment" element={<Equipment />} />
                    <Route path="/services/training" element={<Training />} />
                    <Route path="/admin/*" element={<Admin />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </ProductProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
