
import { Zap, Shield, Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, index }) => (
  <div 
    className={cn(
      "relative flex gap-x-6 p-6 rounded-2xl transition-all duration-300",
      index % 2 === 0 ? "bg-gradient-to-br from-automotive-50 to-white" : "bg-white",
      "hover:shadow-lg border border-gray-100"
    )}
  >
    <div className={cn(
      "flex h-12 w-12 flex-none items-center justify-center rounded-full",
      index % 2 === 0 ? "bg-automotive-600 text-white" : "bg-automotive-100 text-automotive-600"
    )}>
      {icon}
    </div>
    <div className="flex-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-automotive-600 text-white rounded-full text-sm font-bold">
      {index + 1}
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Inspeksi Cerdas AI",
      description: "Teknologi AI kami memindai dan mendeteksi kerusakan fisik, memprediksi masalah potensial, dan memberikan analisis mendetail tentang kondisi mobil."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Laporan Digital",
      description: "Akses laporan inspeksi digital yang komprehensif secara instan melalui aplikasi atau platform web kami dengan analisis dan rekomendasi mendetail."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Analisis Anti Penipuan",
      description: "Kami memperkenalkan fitur Fraud Analysis / Analisis Anti Penipuan — sistem yang dirancang khusus untuk melindungi transaksi Anda."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Rekomendasi Cerdas",
      description: "Terima rekomendasi mobil yang dipersonalisasi berdasarkan preferensi, anggaran, dan hasil inspeksi Anda yang didukung oleh AI kami."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
            Fitur Didukung AI
            <div className="absolute -bottom-2 left-0 h-1 w-1/2 bg-automotive-600"></div>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Teknologi mutakhir kami menyediakan analisis dan wawasan kendaraan yang komprehensif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
