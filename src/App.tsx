
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Index from "./pages/Index";
import InspeksiMobilAiPage from "./pages/InspeksiMobilAi";
import SuratPerjanjianDigitalPage from "./pages/SuratPerjanjianDigital";
import MediatorTransaksi from "./pages/MediatorTransaksi";
import InspeksiStandarDetail from "./pages/InspeksiStandarDetail";
import NotFound from "./pages/NotFound";
import CaraKerjaProfMobilAi from "./pages/CaraKerjaProfMobilAi";
import KenapaHarusProfMobilAi from "./pages/KenapaHarusProfMobilAi";
import PusatBantuan from "./pages/PusatBantuan";
import TentangProfMobilAi from "./pages/TentangProfMobilAi";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/inspeksi-mobil-ai" element={<InspeksiMobilAiPage />} />
              <Route path="/surat-perjanjian-digital" element={<SuratPerjanjianDigitalPage />} />
              <Route path="/mediator-transaksi" element={<MediatorTransaksi />} />
              <Route path="/standar-inspeksi" element={<InspeksiStandarDetail />} />
              <Route path="/cara-kerja" element={<CaraKerjaProfMobilAi />} />
              <Route path="/kenapa-harus-profmobil" element={<KenapaHarusProfMobilAi />} />
              <Route path="/pusat-bantuan" element={<PusatBantuan />} />
              <Route path="/tentang-profmobil" element={<TentangProfMobilAi />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
