
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, FileText, Wrench, Cog, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface StandardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StandardCard = ({ icon, title, description }: StandardCardProps) => (
  <Card className="h-full transition-all duration-300 hover:shadow-md border-l-4 border-l-automotive-600 group">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div className="bg-automotive-100 rounded-full p-2 text-automotive-600 group-hover:bg-automotive-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600 text-sm">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

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
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-automotive-100 opacity-50"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-automotive-50 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-automotive-600 text-white p-8 rounded-2xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Standar Inspeksi ProfMobil AI
          </h2>
          <div className="mt-3 flex items-center">
            <ShieldCheck className="h-8 w-8 mr-3" />
            <p className="text-xl">
              150+ Poin Inspeksi dengan Kecerdasan Buatan untuk Hasil yang Lengkap & Akurat
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <StandardCard
              key={index}
              icon={standard.icon}
              title={standard.title}
              description={standard.description}
            />
          ))}
        </div>
        
        <div className="mt-16 p-6 border-2 border-dashed border-automotive-300 rounded-xl bg-gray-50">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Standar Tinggi, Hasil Terpercaya</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-automotive-600 mb-2">150+</div>
              <p className="text-gray-600">Poin Inspeksi</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-automotive-600 mb-2">98%</div>
              <p className="text-gray-600">Tingkat Akurasi</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-automotive-600 mb-2">5000+</div>
              <p className="text-gray-600">Inspeksi Sukses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionStandardsSection;
