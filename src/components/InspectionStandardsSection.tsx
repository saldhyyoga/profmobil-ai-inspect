
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, FileText, Wrench, Cog, ShieldCheck, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface StandardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const StandardCard = ({ icon, title, description, index }: StandardCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Different gradient backgrounds for each card
  const gradients = [
    "bg-gradient-to-br from-automotive-50 to-automotive-200",
    "bg-gradient-to-br from-blue-50 to-blue-200",
    "bg-gradient-to-br from-green-50 to-green-200",
    "bg-gradient-to-br from-amber-50 to-amber-200"
  ];

  return (
    <Card 
      className={cn(
        "h-full transition-all duration-300 overflow-hidden relative group",
        isHovered ? "shadow-xl transform -translate-y-1" : "shadow-md",
        gradients[index % gradients.length]
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mt-12 -mr-12"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -mb-8 -ml-8"></div>
      
      <CardHeader className="flex flex-row items-center gap-4 pb-2 relative z-10">
        <div className={cn(
          "rounded-full p-4 transition-all duration-300",
          isHovered 
            ? "bg-automotive-600 text-white" 
            : "bg-white text-automotive-600"
        )}>
          {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8" })}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-gray-700 text-sm leading-relaxed">
          {description}
        </CardDescription>
        
        <div className={cn(
          "mt-4 flex items-center text-automotive-600 font-medium transition-all",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <span>Lihat Detail</span>
          <Check className="ml-2 h-4 w-4" />
        </div>
      </CardContent>
      
      {/* Bottom accent bar */}
      <div className={cn(
        "h-1 w-full bg-automotive-600 absolute bottom-0 left-0 transition-all duration-300",
        isHovered ? "opacity-100" : "opacity-50"
      )}></div>
    </Card>
  );
};

const InspectionStandardsSection = () => {
  const standards = [
    {
      icon: <Car className="h-5 w-5" />,
      title: "Eksterior",
      description: "Analisis panel bodi, cat, dan struktur rangka untuk mendeteksi tanda-tanda tabrakan, karat, atau penyok."
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Interior",
      description: "Inspeksi kabin menyeluruh - trim, dasbor, fitur elektronik, dan indikasi kerusakan akibat banjir atau kerusakan tersembunyi."
    },
    {
      icon: <Cog className="h-5 w-5" />,
      title: "Mesin & Transmisi",
      description: "Evaluasi komponen mekanis - mesin, transmisi, rem, suspensi."
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Dokumen & Riwayat",
      description: "Verifikasi kelengkapan dokumen, riwayat servis, dan data kendaraan."
    }
  ];

  return (
    <section id="standards" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration - enhanced with more elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-automotive-100 opacity-50 blur-xl"></div>
      <div className="absolute top-40 left-1/4 w-20 h-20 rounded-full bg-blue-100 opacity-40 blur-lg"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-automotive-50 opacity-60 blur-xl"></div>
      <div className="absolute bottom-40 right-1/4 w-28 h-28 rounded-full bg-green-100 opacity-30 blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-automotive-600 to-automotive-700 text-white p-8 rounded-2xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Standar Inspeksi ProfMobil AI
          </h2>
          <div className="mt-3 flex items-center">
            <ShieldCheck className="h-8 w-8 mr-3" />
            <p className="text-xl">
              150+ Poin Inspeksi dengan Kecerdasan Buatan untuk Hasil yang Lengkap & Akurat
            </p>
          </div>
          
          <div className="mt-4 bg-white/10 h-1 rounded-full"></div>
          
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Teknologi AI</span>
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Inspektor Tersertifikasi</span>
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Laporan Digital</span>
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Analisis Komprehensif</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((standard, index) => (
            <StandardCard
              key={index}
              icon={standard.icon}
              title={standard.title}
              description={standard.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 border border-automotive-200 rounded-xl bg-gradient-to-br from-gray-50 to-automotive-50 shadow-inner">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Standar Tinggi, Hasil Terpercaya</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-automotive-100 text-automotive-600 mb-4">
                <span className="text-2xl font-bold">150+</span>
              </div>
              <div className="text-2xl font-bold text-automotive-600 mb-2">Poin Inspeksi</div>
              <p className="text-gray-600">Inspeksi menyeluruh dari eksterior hingga dokumen</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-automotive-100 text-automotive-600 mb-4">
                <span className="text-2xl font-bold">98%</span>
              </div>
              <div className="text-2xl font-bold text-automotive-600 mb-2">Tingkat Akurasi</div>
              <p className="text-gray-600">Dengan dukungan AI dan inspektor profesional</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-automotive-100 text-automotive-600 mb-4">
                <span className="text-2xl font-bold">5000+</span>
              </div>
              <div className="text-2xl font-bold text-automotive-600 mb-2">Inspeksi Sukses</div>
              <p className="text-gray-600">Membantu ribuan konsumen membuat keputusan tepat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionStandardsSection;
