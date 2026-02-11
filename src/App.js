import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LiveChat from "./components/LiveChat";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BullexAI from "./pages/BullexAI";
import Tutorials from "./pages/Tutorials";
import Backtesting from "./pages/Backtesting";
import Pricing from "./pages/Pricing";
import Affiliates from "./pages/Affiliates";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import RiskDisclaimer from "./pages/RiskDisclaimer";
import Features from "./pages/Features";
import Documentation from "./pages/Documentation";
import CookiePolicy from "./pages/CookiePolicy";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import Profile from "./pages/Profile";
import ApiSettings from "./pages/ApiSettings";
import AdminLogin from "./pages/AdminLogin";
import SuperAdmin from "./pages/SuperAdmin";
import WorkflowManagement from "./pages/WorkflowManagement";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <div className="App">
          <BrowserRouter future={{ v7_startTransition: true }}>
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/bullex-ai" element={<BullexAI />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/backtesting" element={<Backtesting />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/affiliates" element={<Affiliates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
                <Route path="/features" element={<Features />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/api-settings" element={<ApiSettings />} />
                
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route 
                  path="/superadmin" 
                  element={
                    <ProtectedAdminRoute>
                      <SuperAdmin />
                    </ProtectedAdminRoute>
                  } 
                />
                <Route 
                  path="/superadmin/workflows" 
                  element={
                    <ProtectedAdminRoute>
                      <WorkflowManagement />
                    </ProtectedAdminRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
            <LiveChat />
            <Toaster />
          </BrowserRouter>
        </div>
      </AdminAuthProvider>
    </AuthProvider>
  );
}

export default App;
