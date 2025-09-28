// src/App.tsx
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Products from "./pages/Products";
import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import ProductDetails from "./pages/ProductDetails";
import ComparePage from "./pages/comparePage"; // added compare page

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />

            {/* list page */}
            <Route path="/products" element={<Products />} />

            {/* category filtering — changed path so it doesn't clash with product details */}
            <Route path="/products/category/:category" element={<Products />} />

            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* product detail route */}
            <Route path="/products/:id" element={<ProductDetails />} />

            {/* compare routes */}
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/compare/:id" element={<ComparePage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
