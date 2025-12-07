import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import BrandStrip from "./components/BrandStrip";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import StatsStrip from "./components/StatsStrip";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Cookies from "./components/Cookies";
import CookieBanner from "./components/CookieBanner";

/**
 * ZELIT — Improved landing page
 * Enhanced palette with gradients and better contrast
 * Improved layout and typography
 */
function Home() {
  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{
        // CSS tokens
        // @ts-ignore CSS Custom Props
        "--green-500": "#2F9959",
        // @ts-ignore
        "--green-600": "#2A8A50",
        // @ts-ignore
        "--green-100": "#E8F5E8",
        // @ts-ignore
        "--border": "#E5E7EB",
        // @ts-ignore
        "--gray-50": "#F9FAFB",
      }}
    >
      <style>{`
        :root { 
          --green-500:#2F9959; 
          --green-600:#2A8A50; 
          --green-100:#E8F5E8;
          --border:#E5E7EB; 
          --gray-50:#F9FAFB;
        }
        .font-head { font-family: 'Poppins','Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; }
        .font-body { font-family: 'Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; }
        .bg-gradient-green { background: linear-gradient(135deg, var(--green-500) 0%, var(--green-600) 100%); }
        .bg-gradient-hero { background: linear-gradient(135deg, #ffffff 0%, var(--gray-50) 100%); }
      `}</style>

      <Navigation />
      <HeroSection />
      <BrandStrip />
      <HowWeWork />
      <Services />
      <WhyUs />
      <StatsStrip />
      <Pricing />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/polityka-cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  );
}