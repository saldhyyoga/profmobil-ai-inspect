
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InspeksiMobilAiPage from "./pages/InspeksiMobilAi";
import SuratPerjanjianDigitalPage from "./pages/SuratPerjanjianDigital";
import MediatorTransaksi from "./pages/MediatorTransaksi";
import InspeksiStandarDetail from "./pages/InspeksiStandarDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/standar-inspeksi/:category" element={<InspeksiStandarDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
