
import { useState } from "react";
import { Car, Search, FileText, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      icon: <Car className="h-6 w-6" />,
      title: "Pemesanan Inspeksi",
      description: "Pilih lokasi dan jadwal yang Anda inginkan. Masukkan detail mobil Anda dan konfirmasikan pemesanan.",
      subItems: [
        { id: 1, text: "Pilih lokasi & jadwal inspeksi" },
        { id: 2, text: "Masukkan detail mobil (merek, tahun, dll.)" },
        { id: 3, text: "Pilih metode pembayaran" },
        { id: 4, text: "Opsional: Pilih antara inspeksi di tempat atau jarak jauh" }
      ]
    },
    {
      id: 2,
      icon: <Search className="h-6 w-6" />,
      title: "Inspeksi Lapangan",
      description: "Inspektor profesional kami melakukan pemeriksaan menyeluruh terhadap kendaraan Anda.",
      subItems: [
        { id: 1, text: "Inspeksi fisik oleh inspektor bersertifikat" },
        { id: 2, text: "Dokumentasi digital melalui aplikasi mobile" },
        { id: 3, text: "Verifikasi daftar periksa komprehensif" },
        { id: 4, text: "Dokumentasi foto dan video" },
        { id: 5, text: "Pemindaian OBD dan analisis suara mesin" }
      ]
    },
    {
      id: 3,
      icon: <FileText className="h-6 w-6" />,
      title: "Analisis AI",
      description: "AI canggih kami memproses data inspeksi untuk evaluasi yang akurat.",
      subItems: [
        { id: 1, text: "Pemrosesan dan analisis data AI" },
        { id: 2, text: "Perbandingan dengan database yang luas" },
        { id: 3, text: "Perhitungan skor kondisi mobil" },
        { id: 4, text: "Deteksi dan penilaian kerusakan" },
        { id: 5, text: "Estimasi biaya perbaikan" }
      ]
    },
    {
      id: 4,
      icon: <Check className="h-6 w-6" />,
      title: "Laporan Terperinci",
      description: "Terima laporan komprehensif dengan wawasan bertenaga AI.",
      subItems: [
        { id: 1, text: "Ringkasan diagnosis AI" },
        { id: 2, text: "Daftar periksa inspeksi lengkap" },
        { id: 3, text: "Penilaian nilai pasar" },
        { id: 4, text: "Rekomendasi pembelian" },
        { id: 5, text: "Sertifikasi ProfMobil (jika memenuhi syarat)" }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Cara Kerja ProfMobil AI
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Proses kami yang efisien memastikan inspeksi kendaraan yang akurat dan komprehensif
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={cn(
                "relative cursor-pointer transition-all duration-300 border rounded-xl p-6",
                activeStep === step.id 
                  ? "border-automotive-600 bg-automotive-50 shadow-md" 
                  : "border-gray-200 bg-white hover:border-automotive-300"
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                <div className={cn(
                  "rounded-full w-8 h-8 flex items-center justify-center",
                  activeStep === step.id ? "bg-automotive-600 text-white" : "bg-gray-100 text-gray-600"
                )}>
                  <span className="text-sm font-semibold">
                    {step.id}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center mb-4">
                <div className={cn(
                  "rounded-full w-16 h-16 flex items-center justify-center mb-4",
                  activeStep === step.id ? "bg-automotive-600 text-white" : "bg-gray-100 text-gray-600"
                )}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
              </div>
              
              <div className={cn(
                "space-y-2 bg-white p-4 rounded-lg",
                activeStep === step.id ? "border border-gray-200" : ""
              )}>
                {step.subItems.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-automotive-100 text-automotive-600 flex items-center justify-center mr-2 text-xs font-semibold">
                      {item.id}
                    </div>
                    <p className="text-sm text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
