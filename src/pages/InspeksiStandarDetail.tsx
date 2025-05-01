
import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Car, Wrench, Cog, FileText, Shield, CheckCircle } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export default function InspeksiStandarDetail() {
  const { category } = useParams();
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define all inspection categories and their details
  const inspectionCategories = {
    eksterior: {
      title: "🚘 Eksterior",
      icon: <Car className="h-8 w-8 text-automotive-600" />,
      description: "Analisis Visual & Struktural Menyeluruh",
      color: "bg-gradient-to-br from-automotive-50 to-automotive-200",
      items: [
        {
          title: "Panel Bodi",
          description: "Mendeteksi goresan, penyok, dan perbedaan warna akibat perbaikan."
        },
        {
          title: "Struktur Rangka",
          description: "Mengecek indikasi tabrakan atau kerusakan sasis tersembunyi."
        },
        {
          title: "Kondisi Cat",
          description: "Mengidentifikasi perbaikan ulang, lapisan tidak merata, atau karat."
        },
        {
          title: "Penerangan dan Kaca",
          description: "Memastikan lampu, spion, dan kaca mobil bebas retak dan berfungsi baik."
        },
        {
          title: "Sistem Kunci & Pintu",
          description: "Memverifikasi fungsi kunci, engsel pintu, dan keamanan aksesnya."
        },
        {
          title: "Ban & Velg",
          description: "Memeriksa kondisi ban, kedalaman alur, dan keutuhan velg."
        },
        {
          title: "Scan Ketebalan Cat",
          description: "Menggunakan alat pengukur untuk mendeteksi area yang pernah dicat ulang."
        }
      ]
    },
    interior: {
      title: "🛋️ Interior",
      icon: <Cog className="h-8 w-8 text-blue-600" />,
      description: "Inspeksi Kenyamanan & Keselamatan Kabin",
      color: "bg-gradient-to-br from-blue-50 to-blue-200",
      items: [
        {
          title: "Dasbor dan Trim",
          description: "Memverifikasi tidak ada kerusakan, retak, atau modifikasi ilegal."
        },
        {
          title: "Sistem Kelistrikan",
          description: "Termasuk sakelar, power window, sistem audio, AC, dan instrumen panel."
        },
        {
          title: "Indikasi Kerusakan Akibat Air",
          description: "Mengecek bekas banjir pada karpet, jok, dan bawah dasbor."
        },
        {
          title: "Sabuk Pengaman & Airbag",
          description: "Memastikan perangkat keselamatan berfungsi dan tidak pernah aktif karena tabrakan."
        },
        {
          title: "Kursi & Jok",
          description: "Memeriksa kondisi jok, mekanisme geser, dan fungsi pengaturan posisinya."
        },
        {
          title: "Sistem Hiburan",
          description: "Menguji head unit, speaker, konektivitas Bluetooth, dan fitur multimedia lainnya."
        },
        {
          title: "Pedal & Kemudi",
          description: "Memverifikasi respons kemudi, kondisi pedal, dan keausan komponen kontrol."
        }
      ]
    },
    mesin: {
      title: "⚙️ Mesin & Transmisi",
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      description: "Evaluasi Komponen Kritis dan Kinerja Mekanis",
      color: "bg-gradient-to-br from-green-50 to-green-200",
      items: [
        {
          title: "Mesin",
          description: "Pemeriksaan kebocoran oli, suara abnormal, getaran, dan respons throttle."
        },
        {
          title: "Transmisi",
          description: "Uji perpindahan gigi manual/otomatis untuk mendeteksi selip atau loncatan."
        },
        {
          title: "Sistem Pendingin",
          description: "Memastikan radiator, kipas, dan thermostat bekerja sempurna."
        },
        {
          title: "Suspensi dan Rem",
          description: "Uji respons pengereman, stabilitas suspensi, dan keausan komponen bawah mobil."
        },
        {
          title: "Sistem BBM",
          description: "Memeriksa kebocoran, kondisi tangki, dan efisiensi penggunaan bahan bakar."
        },
        {
          title: "Sistem Elektrikal Mesin",
          description: "Mengecek alternator, baterai, dan komponen kelistrikan pendukung mesin."
        },
        {
          title: "Diagnostik OBD",
          description: "Pemindaian kode error ECU untuk mendeteksi masalah tersembunyi pada sistem elektronik."
        }
      ]
    },
    dokumen: {
      title: "📄 Dokumen & Riwayat",
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      description: "Verifikasi Legalitas dan Transparansi Riwayat Kendaraan",
      color: "bg-gradient-to-br from-amber-50 to-amber-200",
      items: [
        {
          title: "STNK & BPKB",
          description: "Pemeriksaan keaslian dan kesesuaian dengan nomor rangka/mesin."
        },
        {
          title: "Riwayat Servis",
          description: "Evaluasi catatan perawatan berkala untuk mengukur konsistensi pemilik sebelumnya."
        },
        {
          title: "Riwayat Asuransi & Kecelakaan",
          description: "Memastikan tidak ada klaim besar yang berpotensi menutupi kerusakan serius."
        },
        {
          title: "Legalitas Pajak & Blokir",
          description: "Verifikasi status pajak aktif dan tidak masuk daftar hitam."
        },
        {
          title: "Riwayat Kepemilikan",
          description: "Menelusuri jumlah pemilik sebelumnya dan jangka waktu kepemilikan."
        },
        {
          title: "Validasi Nomor Mesin & Rangka",
          description: "Memastikan kesesuaian dan keaslian nomor identifikasi kendaraan."
        },
        {
          title: "Riwayat Penggunaan",
          description: "Mengidentifikasi apakah mobil pernah digunakan sebagai taksi, rental, atau korporasi."
        }
      ]
    }
  };

  // Check if category exists
  if (category && !inspectionCategories[category as keyof typeof inspectionCategories]) {
    return <Navigate to="/standar-inspeksi" />;
  }

  // If no category is provided, show the overview page
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <Link to="/" className="inline-flex items-center text-automotive-600 hover:text-automotive-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Beranda
              </Link>
              <div className="inline-flex items-center justify-center bg-automotive-100 text-automotive-700 rounded-full px-4 py-1 text-sm font-semibold mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Standar Kualitas
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mt-4">Standar Inspeksi ProfMobil AI</h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                150+ Poin Inspeksi dengan Dukungan Kecerdasan Buatan untuk Hasil yang Lengkap, Akurat, dan Transparan
              </p>
            </div>

            <div className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                Di ProfMobil AI, setiap mobil diperiksa melalui proses evaluasi menyeluruh yang menggabungkan keahlian inspektor bersertifikasi dengan kecanggihan teknologi AI. Kami berkomitmen menghadirkan kendaraan bekas yang aman, andal, dan bebas dari potensi risiko tersembunyi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {Object.entries(inspectionCategories).map(([key, category]) => (
                <Link to={`/standar-inspeksi/${key}`} key={key} className="block h-full">
                  <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden relative ${category.color}`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mt-12 -mr-12"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -mb-8 -ml-8"></div>
                    
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="rounded-full bg-white p-4 text-automotive-600 shadow-sm">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                          <p className="text-gray-700">{category.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {category.items.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-automotive-600 flex-shrink-0" />
                            <span className="text-sm">{item.title}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center text-automotive-600 font-medium">
                        <span>Lihat Detail</span>
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </div>
                    </CardContent>
                    
                    <div className="h-1 w-full bg-automotive-600 absolute bottom-0 left-0"></div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="p-8 border border-automotive-200 rounded-xl bg-gradient-to-br from-gray-50 to-automotive-50 shadow-inner text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kepercayaan Adalah Prioritas Kami</h3>
              <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                Setiap inspeksi kami dilakukan secara teliti dan cermat untuk memastikan bahwa Anda mendapatkan informasi yang akurat dan transparan tentang kondisi mobil yang Anda minati. Transparansi adalah kunci utama layanan kami.
              </p>
              <Button 
                className="bg-automotive-600 hover:bg-automotive-700"
                onClick={() => window.location.href="/inspeksi-mobil-ai"}
              >
                Jadwalkan Inspeksi Sekarang
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Specific category details
  const categoryData = inspectionCategories[category as keyof typeof inspectionCategories];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <Link to="/standar-inspeksi" className="inline-flex items-center text-automotive-600 hover:text-automotive-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Standar Inspeksi
              </Link>
              <Button variant="outline" onClick={() => window.location.href="/inspeksi-mobil-ai"}>
                Jadwalkan Inspeksi
              </Button>
            </div>
            
            <div className={`p-8 rounded-2xl mb-8 ${categoryData.color}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="bg-white rounded-full p-5 shadow-md w-20 h-20 flex items-center justify-center">
                  {categoryData.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{categoryData.title}</h1>
                  <p className="text-xl text-gray-700 mt-2">{categoryData.description}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
              <div className="grid gap-8">
                {categoryData.items.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="bg-automotive-100 rounded-full p-2 text-automotive-700 font-semibold w-8 h-8 flex items-center justify-center mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-700 mt-1">{item.description}</p>
                      </div>
                    </div>
                    {index < categoryData.items.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-automotive-600 to-automotive-700 text-white p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ingin mendapatkan hasil inspeksi yang komprehensif?</h3>
                  <p className="text-automotive-100">Jadwalkan inspeksi mobil Anda sekarang dan dapatkan laporan lengkap dari tim kami.</p>
                </div>
                <Button size="lg" className="bg-white hover:bg-gray-100 text-automotive-700 whitespace-nowrap">
                  Jadwalkan Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
