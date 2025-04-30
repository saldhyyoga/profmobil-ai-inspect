
import { Camera, Search, Check, FileCheck } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-automotive-100 p-3 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6 text-automotive-600" />,
      title: "Inspeksi Cerdas AI",
      description: "Teknologi AI kami memindai dan mendeteksi kerusakan fisik, memprediksi masalah potensial, dan memberikan analisis mendetail tentang kondisi mobil."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-automotive-600" />,
      title: "Laporan Digital",
      description: "Akses laporan inspeksi digital yang komprehensif secara instan melalui aplikasi atau platform web kami dengan analisis dan rekomendasi mendetail."
    },
    {
      icon: <Search className="h-6 w-6 text-automotive-600" />,
      title: "Perhitungan Nilai Pasar",
      description: "Dapatkan penilaian pasar yang akurat berdasarkan analisis AI tentang kondisi mobil, tren pasar, dan data komprehensif."
    },
    {
      icon: <Check className="h-6 w-6 text-automotive-600" />,
      title: "Rekomendasi Cerdas",
      description: "Terima rekomendasi mobil yang dipersonalisasi berdasarkan preferensi, anggaran, dan hasil inspeksi Anda yang didukung oleh AI kami."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Fitur Bertenaga AI
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Teknologi mutakhir kami menyediakan analisis dan wawasan kendaraan yang komprehensif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
