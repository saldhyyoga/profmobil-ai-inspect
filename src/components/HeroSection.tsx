
import { Button } from "@/components/ui/button";
import { Car, Search, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-automotive-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-28 xl:pt-20 xl:pb-32">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="lg:col-span-6">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Inspeksi Mobil Bekas</span>
                  <span className="block text-automotive-600">Didukung AI</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                  ProfMobil AI memberikan inspeksi mobil yang akurat dan komprehensif didukung oleh kecerdasan buatan canggih. Dapatkan laporan terperinci, prediksi kerusakan, estimasi perbaikan dan ambil keputusan by data.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                  <Button size="lg" className="bg-automotive-600 hover:bg-automotive-700 text-white">
                    Jadwalkan Inspeksi
                  </Button>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {/* Commented out but preserved
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-automotive-600" />
                    <span className="ml-2 text-sm text-gray-700">Presisi AI</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-automotive-600" />
                    <span className="ml-2 text-sm text-gray-700">Laporan Instan</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-automotive-600" />
                    <span className="ml-2 text-sm text-gray-700">Penilaian Pasar</span>
                  </div>
                  */}
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
                <div className="bg-automotive-600 rounded-full w-64 h-64 absolute opacity-10 -top-10 -right-10"></div>
                <div className="bg-tech-600 rounded-full w-48 h-48 absolute opacity-10 -bottom-8 -left-8"></div>
                <div className="relative">
                  <div className="shadow-xl rounded-lg overflow-hidden border-4 border-white bg-white">
                    <div className="absolute top-2 left-2 bg-automotive-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      PEMINDAIAN AI
                    </div>
                    <div className="bg-gradient-to-r from-automotive-500 to-tech-800 h-72 flex items-center justify-center">
                      <Car className="h-24 w-24 text-white animate-pulse" />
                    </div>
                    <div className="p-4 bg-white">
                      <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-3/4"></div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="w-1/2">
                          <div className="h-8 bg-automotive-100 rounded"></div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-8 bg-automotive-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
