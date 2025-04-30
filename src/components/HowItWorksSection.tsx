
import { useState } from "react";
import { Car, Search, FileText, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
    <section id="how-it-works" className="py-16 bg-gradient-to-tr from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-automotive-100 text-automotive-700 text-sm font-semibold px-3 py-1 rounded-full">
            Proses Inspeksi
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Cara Kerja ProfMobil AI
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Proses kami yang efisien memastikan inspeksi kendaraan yang akurat dan komprehensif
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-automotive-200 z-0 hidden lg:block">
            {steps.map((step, idx) => (
              <div 
                key={`dot-${idx}`} 
                className={cn(
                  "absolute w-5 h-5 rounded-full transform -translate-x-1/2",
                  activeStep >= step.id ? "bg-automotive-600" : "bg-gray-300",
                )}
                style={{ top: `${(idx * 100) / (steps.length - 1)}%` }}
              />
            ))}
          </div>

          {/* Steps */}
          <div className="relative z-10 space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={cn(
                  "lg:grid lg:grid-cols-2 lg:gap-8 items-center cursor-pointer hover:opacity-100",
                  activeStep === step.id ? "opacity-100" : "opacity-70"
                )}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step content positioning based on odd/even */}
                {index % 2 === 0 ? (
                  <>
                    <StepContent step={step} isActive={activeStep === step.id} />
                    <StepVisual step={step} isActive={activeStep === step.id} />
                  </>
                ) : (
                  <>
                    <StepVisual step={step} isActive={activeStep === step.id} className="hidden lg:block" />
                    <StepContent step={step} isActive={activeStep === step.id} />
                    <StepVisual step={step} isActive={activeStep === step.id} className="block lg:hidden mt-6" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button 
            className="bg-automotive-600 hover:bg-automotive-700 shadow-lg shadow-automotive-200/50"
            onClick={() => window.location.href="#standards"}
          >
            Lihat Standar Inspeksi <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const StepContent = ({ step, isActive }: { step: any, isActive: boolean }) => (
  <div className={cn(
    "p-6 transition-all duration-300",
    isActive ? "bg-white rounded-xl shadow-lg border border-gray-100" : ""
  )}>
    <div className="flex items-center mb-4">
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center mr-3",
        isActive ? "bg-automotive-600 text-white" : "bg-gray-200 text-gray-700"
      )}>
        {step.id}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{step.description}</p>
    <div className="space-y-3">
      {step.subItems.map((item: any) => (
        <div key={item.id} className="flex items-start">
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5",
            isActive ? "bg-automotive-100 text-automotive-700" : "bg-gray-100 text-gray-600"
          )}>
            <span className="text-xs">{item.id}</span>
          </div>
          <p className="text-gray-700">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const StepVisual = ({ step, isActive, className = "" }: { step: any, isActive: boolean, className?: string }) => (
  <div className={cn("flex justify-center", className)}>
    <div className={cn(
      "w-48 h-48 rounded-full flex items-center justify-center transition-all duration-300",
      isActive 
        ? "bg-gradient-to-br from-automotive-500 to-automotive-700 text-white shadow-xl" 
        : "bg-gray-100 text-gray-500"
    )}>
      <div className="text-center">
        <div className="flex justify-center mb-2">
          {React.cloneElement(step.icon, { 
            size: 40,
            className: isActive ? "text-white" : "text-gray-600"
          })}
        </div>
        <p className="font-semibold">{step.title}</p>
      </div>
    </div>
  </div>
);

export default HowItWorksSection;
