
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, FileText, Wrench, Cog } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface StandardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StandardCard = ({ icon, title, description }: StandardCardProps) => (
  <Card className="h-full transition-all duration-300 hover:shadow-md border-l-4 border-l-automotive-600">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div className="bg-automotive-100 rounded-full p-2 text-automotive-600">
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
    <section id="standards" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Standar Inspeksi ProfMobil AI
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            150+ Poin Inspeksi dengan Kecerdasan Buatan untuk Hasil yang Lengkap & Akurat
          </p>
          <div className="flex justify-center mt-6">
            <Separator className="w-24 bg-automotive-600 h-1 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <StandardCard
              key={index}
              icon={standard.icon}
              title={standard.title}
              description={standard.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspectionStandardsSection;
