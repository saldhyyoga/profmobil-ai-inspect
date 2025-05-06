
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, Search, Zap, Award, CheckCircle } from "lucide-react";

const TentangProfMobilAi = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        {/* Hero section with enhanced background */}
        <div className="bg-gradient-to-r from-automotive-600 to-tech-800 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6bTAtMThjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6bTE4IDE4YzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyem0tMTggMGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnptMTggMGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnptLTE4LTE4YzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyem0xOCAwYzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyem0tMTggMGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnptMCAxOGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tentang ProfMobil AI</h1>
            <p className="text-xl md:text-2xl text-automotive-100 max-w-3xl">
              Inovasi Teknologi dalam Dunia Mobil Bekas
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-white to-automotive-50 p-8 rounded-xl shadow-md mb-12">
              <p className="text-lg leading-relaxed mb-8">
                ProfMobil AI adalah platform revolusioner yang menggabungkan kekuatan inspeksi manual profesional dengan 
                kecanggihan kecerdasan buatan (AI) untuk membawa standar baru dalam transaksi jual beli mobil bekas di Indonesia.
              </p>
              <p className="text-lg leading-relaxed mb-12">
                Kami percaya bahwa membeli mobil bekas seharusnya menjadi pengalaman yang aman, transparan, dan berbasis data—bukan sekadar 
                kepercayaan pada kata-kata penjual.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              Fokus Kami: Inspeksi + AI
              <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-automotive-600"></span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Di ProfMobil AI, kami memulai setiap proses dengan inspeksi lapangan oleh inspektor bersertifikat. 
              Selanjutnya, semua data hasil pemeriksaan akan diproses oleh sistem AI kami untuk memberikan:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-white via-white to-automotive-50 p-6 rounded-lg shadow-lg border-l-4 border-automotive-600 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-automotive-600 mr-2" />
                  <h3 className="text-xl font-semibold">Evaluasi Objektif</h3>
                </div>
                <p>Penilaian terhadap kondisi kendaraan yang tidak bias dan transparan.</p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-white to-tech-50 p-6 rounded-lg shadow-lg border-l-4 border-tech-600 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-tech-600 mr-2" />
                  <h3 className="text-xl font-semibold">Deteksi Dini</h3>
                </div>
                <p>Identifikasi potensi kerusakan atau masalah tersembunyi pada mobil.</p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-white to-tech-50 p-6 rounded-lg shadow-lg border-l-4 border-tech-600 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-tech-600 mr-2" />
                  <h3 className="text-xl font-semibold">Estimasi Biaya</h3>
                </div>
                <p>Perkiraan biaya perbaikan berdasarkan data ribuan mobil serupa.</p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-white to-automotive-50 p-6 rounded-lg shadow-lg border-l-4 border-automotive-600 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-automotive-600 mr-2" />
                  <h3 className="text-xl font-semibold">Skor Kesehatan</h3>
                </div>
                <p>Penilaian menyeluruh tentang kondisi kendaraan dalam satu skor ringkas.</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-12 bg-gray-50 p-6 rounded-lg shadow-inner">
              Dengan pendekatan ini, pelanggan mendapatkan laporan terperinci yang akurat, netral, dan siap digunakan untuk 
              pengambilan keputusan.
            </p>

            <div className="bg-gradient-to-r from-tech-700 to-tech-900 text-white p-12 rounded-xl shadow-xl mb-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold mb-6 relative z-10">Misi Kami: Mencegah Penipuan, Termasuk Penipuan Segitiga</h2>
              <p className="text-lg leading-relaxed mb-6 relative z-10">
                Pasar mobil bekas di Indonesia masih rentan terhadap berbagai bentuk penipuan, seperti:
              </p>

              <div className="relative z-10">
                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-automotive-300 mr-3 mt-0.5" />
                    <span>Mobil bermasalah yang dijual tanpa transparansi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-automotive-300 mr-3 mt-0.5" />
                    <span>Data kendaraan yang dimanipulasi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-automotive-300 mr-3 mt-0.5" />
                    <span>
                      <span className="font-semibold">Penipuan segitiga:</span> skema di mana penipu berpura-pura sebagai penjual, 
                      memperdaya pembeli, dan merugikan semua pihak
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-12">
              Untuk itu, kami hadir tidak hanya sebagai penyedia jasa inspeksi, tapi juga sebagai pelindung transaksi digital.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              Fitur Andalan: Analisis Anti-Penipuan
              <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-tech-600"></span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Kami membekali platform dengan fitur Fraud Analysis (Analisis Anti-Penipuan), yang mampu:
            </p>

            <div className="bg-gradient-to-r from-automotive-50 to-tech-50 p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-600 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <p>Menganalisis profil penjual dan mendeteksi pola mencurigakan</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-600 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <p>Menemukan tanda-tanda penipuan, termasuk skema segitiga</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-600 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <p>Memberi peringatan sebelum transaksi berisiko terjadi</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-600 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <p>Menghadirkan rasa aman bagi pembeli maupun penjual</p>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi Kami</h2>
            <blockquote className="bg-gradient-to-r from-automotive-600 to-tech-700 p-8 rounded-lg mb-12 text-white relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuNiAzOC40Yy0uNDggMC0uODgtLjE2LTEuMi0uNDgtLjMyLS4zMi0uNDgtLjcyLS40OC0xLjIgMC0uNDguMTYtLjg4LjQ4LTEuMi4zMi0uMzIuNzItLjQ4IDEuMi0uNDhzLjg4LjE2IDEuMi40OGMuMzIuMzIuNDguNzIuNDggMS4yIDAgLjQ4LS4xNi44OC0uNDggMS4yLS4zMi4zMi0uNzIuNDgtMS4yLjQ4em0wLTguOGMtLjQ4IDAtLjg4LS4xNi0xLjItLjQ4LS4zMi0uMzItLjQ4LS43Mi0uNDgtMS4yIDAtLjQ4LjE2LS44OC40OC0xLjIuMzItLjMyLjcyLS40OCAxLjItLjQ4cy44OC4xNiAxLjIuNDhjLjMyLjMyLjQ4LjcyLjQ4IDEuMiAwIC40OC0uMTYuODgtLjQ4IDEuMi0uMzIuMzItLjcyLjQ4LTEuMi40OHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
              <p className="text-xl italic relative z-10">
                "Merevolusi cara orang membeli dan menjual mobil bekas di Indonesia."
              </p>
            </blockquote>
            
            <p className="text-lg leading-relaxed mb-12">
              Dengan teknologi, data, dan integritas, ProfMobil AI ingin menjadi standar baru dalam industri ini—di mana keamanan, 
              efisiensi, dan kepercayaan menjadi landasan utama.
            </p>
          </div>

          <Separator className="my-10" />

          <div className="bg-gradient-to-br from-automotive-600 to-tech-700 rounded-xl p-10 mb-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold mb-6 relative z-10">Bergabunglah dengan Revolusi Mobil Bekas</h2>
            <p className="text-lg leading-relaxed mb-6 relative z-10">
              Kami terus berkembang dan berinovasi. Dengan ProfMobil AI, Anda tidak hanya mendapatkan inspeksi kendaraan, 
              tetapi juga pengalaman jual beli mobil bekas yang aman, transparan, dan modern.
            </p>
            
            <div className="mt-8 text-center relative z-10">
              <p className="text-2xl font-bold text-white">#ProfMobilAI – Aman, Cerdas, dan Terpercaya</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center space-x-4">
              <Users className="h-6 w-6 text-automotive-600" />
              <h3 className="text-xl font-semibold">Tim Kami</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Team members with better styling */}
            <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-automotive-200 to-automotive-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">AF</div>
              <h4 className="text-lg font-semibold text-gray-900">Ahmad Fauzi</h4>
              <p className="text-automotive-600 font-medium">CEO & Co-Founder</p>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-tech-200 to-tech-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">SN</div>
              <h4 className="text-lg font-semibold text-gray-900">Siti Nuraini</h4>
              <p className="text-tech-600 font-medium">CTO & Teknologi AI</p>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-automotive-300 to-tech-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">BS</div>
              <h4 className="text-lg font-semibold text-gray-900">Budi Santoso</h4>
              <p className="text-automotive-700 font-medium">Kepala Tim Inspeksi</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TentangProfMobilAi;
