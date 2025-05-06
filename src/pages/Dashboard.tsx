
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Calendar, ChevronRight, FileText, LogIn, Settings, User, Users } from "lucide-react";
import Cookies from 'js-cookie';
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeRole, setActiveRole] = useState<'user' | 'cs' | 'admin' | 'superuser'>('user');

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-xl shadow-lg p-4">
            <div className="space-y-1">
              <h2 className="font-semibold text-gray-700 mb-4">Role</h2>
              <RoleButton 
                active={activeRole === 'user'} 
                onClick={() => setActiveRole('user')}
                icon={<User className="h-4 w-4 mr-2" />}
                label="User"
              />
              <RoleButton 
                active={activeRole === 'cs'} 
                onClick={() => setActiveRole('cs')}
                icon={<Users className="h-4 w-4 mr-2" />}
                label="Customer Service"
              />
              <RoleButton 
                active={activeRole === 'admin'} 
                onClick={() => setActiveRole('admin')}
                icon={<Settings className="h-4 w-4 mr-2" />}
                label="Admin"
              />
              <RoleButton 
                active={activeRole === 'superuser'} 
                onClick={() => setActiveRole('superuser')}
                icon={<User className="h-4 w-4 mr-2" />}
                label="Superuser"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button onClick={handleLogout} variant="outline" className="w-full justify-start text-left">
                <LogIn className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-automotive-600 to-automotive-700 text-white">
                <h1 className="text-xl font-semibold">
                  {activeRole === 'user' && 'Dashboard Pengguna'}
                  {activeRole === 'cs' && 'Dashboard Customer Service'}
                  {activeRole === 'admin' && 'Dashboard Admin'}
                  {activeRole === 'superuser' && 'Dashboard Superuser'}
                </h1>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {activeRole === 'user' && <UserDashboard />}
                {activeRole === 'cs' && <CustomerServiceDashboard />}
                {activeRole === 'admin' && <AdminDashboard />}
                {activeRole === 'superuser' && <SuperuserDashboard />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Role Button Component
const RoleButton = ({ active, onClick, icon, label }: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode;
  label: string;
}) => (
  <button 
    onClick={onClick}
    className={`flex items-center w-full px-3 py-2 rounded-md text-sm transition-colors ${
      active 
        ? 'bg-automotive-100 text-automotive-700 font-medium' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {icon}
    {label}
  </button>
);

// User Dashboard Content
const UserDashboard = () => {
  const inspections = [
    { 
      id: "INS-001", 
      vehicle: "Toyota Avanza 2018", 
      date: "12 Mei 2023", 
      status: "Selesai",
      score: 87
    },
    { 
      id: "INS-002", 
      vehicle: "Honda Jazz 2020", 
      date: "20 Apr 2023", 
      status: "Diproses",
      score: null
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard 
          title="Pemesanan Inspeksi"
          icon={<Calendar className="h-5 w-5 text-automotive-600" />}
          description="Jadwalkan inspeksi mobil bekas"
          link="#"
        />
        <DashboardCard 
          title="Riwayat Inspeksi"
          icon={<FileText className="h-5 w-5 text-automotive-600" />}
          description="Lihat hasil inspeksi sebelumnya"
          link="#"
          count={inspections.length}
        />
        <DashboardCard 
          title="Pengaturan Akun"
          icon={<Settings className="h-5 w-5 text-automotive-600" />}
          description="Kelola informasi akun Anda"
          link="#"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Inspeksi Terbaru</h2>
        <div className="bg-white rounded-md border">
          <Table>
            <TableCaption>Daftar inspeksi mobil bekas Anda.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID Inspeksi</TableHead>
                <TableHead>Kendaraan</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Skor</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inspections.map((inspection) => (
                <TableRow key={inspection.id}>
                  <TableCell className="font-medium">{inspection.id}</TableCell>
                  <TableCell>{inspection.vehicle}</TableCell>
                  <TableCell>{inspection.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      inspection.status === 'Selesai' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {inspection.status}
                    </span>
                  </TableCell>
                  <TableCell>{inspection.score ?? '-'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

// Customer Service Dashboard Content
const CustomerServiceDashboard = () => {
  const pendingRequests = [
    { 
      id: "REQ-001", 
      customer: "Ahmad Surya", 
      vehicle: "Toyota Innova 2019", 
      date: "14 Mei 2023", 
      type: "Perubahan Jadwal"
    },
    { 
      id: "REQ-002", 
      customer: "Budi Santoso", 
      vehicle: "Honda CR-V 2020", 
      date: "15 Mei 2023", 
      type: "Pembatalan"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard 
          title="Permintaan Tertunda"
          icon={<Calendar className="h-5 w-5 text-automotive-600" />}
          description="Permintaan yang membutuhkan tindakan"
          link="#"
          count={pendingRequests.length}
          urgent
        />
        <DashboardCard 
          title="Komunikasi"
          icon={<Users className="h-5 w-5 text-automotive-600" />}
          description="Pesan dari pengguna"
          link="#"
          count={3}
        />
        <DashboardCard 
          title="Jadwal Inspeksi"
          icon={<FileText className="h-5 w-5 text-automotive-600" />}
          description="Inspeksi yang dijadwalkan hari ini"
          link="#"
          count={5}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Permintaan Tertunda</h2>
        <div className="bg-white rounded-md border">
          <Table>
            <TableCaption>Daftar permintaan yang membutuhkan tindakan.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Pelanggan</TableHead>
                <TableHead>Kendaraan</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Tipe</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.customer}</TableCell>
                  <TableCell>{request.vehicle}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      request.type === 'Pembatalan' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {request.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Proses
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

// Admin Dashboard Content
const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard 
          title="Manajemen Pengguna"
          icon={<Users className="h-5 w-5 text-automotive-600" />}
          description="Kelola akun pengguna"
          link="#"
          count={124}
        />
        <DashboardCard 
          title="Inspeksi Aktif"
          icon={<Calendar className="h-5 w-5 text-automotive-600" />}
          description="Inspeksi yang sedang berjalan"
          link="#"
          count={18}
        />
        <DashboardCard 
          title="Laporan"
          icon={<FileText className="h-5 w-5 text-automotive-600" />}
          description="Laporan transaksi dan keuangan"
          link="#"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Statistik Inspeksi</h2>
        <div className="bg-white p-4 rounded-md border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard title="Inspeksi Total" value="287" change="+12%" positive />
            <StatCard title="Bulan Ini" value="42" change="+8%" positive />
            <StatCard title="Menunggu Inspeksi" value="8" change="-3%" positive={false} />
            <StatCard title="Tingkat Konversi" value="68%" change="+5%" positive />
          </div>
        </div>
      </div>
    </div>
  );
};

// Superuser Dashboard Content
const SuperuserDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard 
          title="Kontrol Akses"
          icon={<Settings className="h-5 w-5 text-automotive-600" />}
          description="Kelola peran dan hak akses"
          link="#"
        />
        <DashboardCard 
          title="Statistik & Analisis"
          icon={<FileText className="h-5 w-5 text-automotive-600" />}
          description="Laporan lengkap dan tren data"
          link="#"
        />
        <DashboardCard 
          title="Sistem & Keamanan"
          icon={<User className="h-5 w-5 text-automotive-600" />}
          description="Pengaturan platform dan keamanan"
          link="#"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Performa Sistem</h2>
        <div className="bg-white p-4 rounded-md border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard title="Pengguna Aktif" value="1,287" change="+22%" positive />
            <StatCard title="Tingkat Konversi" value="76%" change="+5%" positive />
            <StatCard title="Waktu Respons" value="1.2s" change="-0.3s" positive />
            <StatCard title="Peringkat" value="4.8/5" change="+0.2" positive />
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  count, 
  urgent = false 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  link: string;
  count?: number;
  urgent?: boolean;
}) => (
  <a 
    href={link} 
    className={`block p-4 rounded-lg border ${
      urgent ? 'border-amber-200 bg-amber-50' : 'border-gray-200 bg-white'
    } hover:shadow-md transition-shadow`}
  >
    <div className="flex justify-between items-start">
      <div className="rounded-full p-2 bg-gray-100">
        {icon}
      </div>
      {count !== undefined && (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          urgent ? 'bg-amber-200 text-amber-800' : 'bg-gray-200 text-gray-800'
        }`}>
          {count}
        </span>
      )}
    </div>
    <h3 className="mt-3 text-lg font-medium text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-500">{description}</p>
    <div className="mt-4 flex items-center text-sm text-automotive-600 font-medium">
      <span>Lihat Detail</span>
      <ChevronRight className="ml-1 h-4 w-4" />
    </div>
  </a>
);

// Statistics Card Component
const StatCard = ({ 
  title, 
  value, 
  change, 
  positive 
}: { 
  title: string; 
  value: string; 
  change: string;
  positive: boolean;
}) => (
  <div className="p-4 border rounded-lg">
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <div className="flex items-baseline mt-1">
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <p className={`ml-2 text-xs font-medium ${
        positive ? 'text-green-600' : 'text-red-600'
      }`}>
        {change}
      </p>
    </div>
  </div>
);

export default Dashboard;
