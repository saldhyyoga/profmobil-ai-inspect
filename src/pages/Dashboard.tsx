
import React from 'react';
import NavBar from '@/components/NavBar';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { LogIn } from "lucide-react";
import Cookies from 'js-cookie';
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    Cookies.remove('profmobil-access');
    toast({
      title: "Logout Berhasil",
      description: "Anda telah keluar dari akun ProfMobil AI.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-automotive-50 to-tech-50">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <Button onClick={handleLogout} variant="outline" className="gap-2">
              <LogIn className="h-4 w-4" />
              Logout
            </Button>
          </div>
          
          <div className="bg-automotive-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Selamat Datang di ProfMobil AI</h2>
            <p className="text-gray-600">
              Ini adalah halaman dashboard Anda. Di sini Anda dapat mengakses semua fitur dari ProfMobil AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-automotive-100 to-automotive-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-gray-800 mb-2">Inspeksi Mobil</h3>
              <p className="text-gray-600 mb-4 text-sm">Jadwalkan inspeksi mobil bekas menggunakan teknologi AI</p>
              <Button size="sm" className="bg-automotive-600 hover:bg-automotive-700">Jadwalkan</Button>
            </div>
            
            <div className="bg-gradient-to-br from-tech-100 to-tech-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-gray-800 mb-2">Riwayat Inspeksi</h3>
              <p className="text-gray-600 mb-4 text-sm">Lihat semua riwayat inspeksi mobil Anda</p>
              <Button size="sm" variant="outline" className="border-tech-600 text-tech-600">Lihat Semua</Button>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg text-gray-800 mb-2">Surat Perjanjian</h3>
              <p className="text-gray-600 mb-4 text-sm">Kelola surat perjanjian digital Anda</p>
              <Button size="sm" variant="outline" className="border-amber-600 text-amber-600">Kelola</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
