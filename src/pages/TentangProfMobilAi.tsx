
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, Search, Zap } from "lucide-react";

const TentangProfMobilAi = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-automotive-50 to-automotive-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tentang ProfMobil AI</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Inovasi Teknologi dalam Dunia Mobil Bekas
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              ProfMobil AI adalah platform revolusioner yang menggabungkan kekuatan inspeksi manual profesional dengan 
              kecanggihan kecerdasan buatan (AI) untuk membawa standar baru dalam transaksi jual beli mobil bekas di Indonesia.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              Kami percaya bahwa membeli mobil bekas seharusnya menjadi pengalaman yang aman, transparan, dan berbasis data—bukan sekadar 
              kepercayaan pada kata-kata penjual.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fokus Kami: Inspeksi + AI</h2>
            <p className="text-lg leading-relaxed mb-6">
              Di ProfMobil AI, kami memulai setiap proses dengan inspeksi lapangan oleh inspektor bersertifikat. 
              Selanjutnya, semua data hasil pemeriksaan akan diproses oleh sistem AI kami untuk memberikan:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-automotive-600 mr-2" />
                  <h3 className="text-xl font-semibold">Evaluasi Objektif</h3>
                </div>
                <p>Penilaian terhadap kondisi kendaraan yang tidak bias dan transparan.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-automotive-600 mr-2" />
                  <h3 className="text-xl font-semibold">Deteksi Dini</h3>
                </div>
                <p>Identifikasi potensi kerusakan atau masalah tersembunyi pada mobil.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-automotive-600 mr-2" />
                  <h3 className="text-xl font-semibold">Estimasi Biaya</h3>
                </div>
                <p>Perkiraan biaya perbaikan berdasarkan data ribuan mobil serupa.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-automotive-600 mr-2" />
                  <h3 className="text-xl font-semibold">Skor Kesehatan</h3>
                </div>
                <p>Penilaian menyeluruh tentang kondisi kendaraan dalam satu skor ringkas.</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-12">
              Dengan pendekatan ini, pelanggan mendapatkan laporan terperinci yang akurat, netral, dan siap digunakan untuk 
              pengambilan keputusan.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami: Mencegah Penipuan, Termasuk Penipuan Segitiga</h2>
            <p className="text-lg leading-relaxed mb-6">
              Pasar mobil bekas di Indonesia masih rentan terhadap berbagai bentuk penipuan, seperti:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <ul className="list-disc pl-6 space-y-3">
                <li className="text-lg">Mobil bermasalah yang dijual tanpa transparansi</li>
                <li className="text-lg">Data kendaraan yang dimanipulasi</li>
                <li className="text-lg">
                  <span className="font-semibold">Penipuan segitiga:</span> skema di mana penipu berpura-pura sebagai penjual, 
                  memperdaya pembeli, dan merugikan semua pihak
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-12">
              Untuk itu, kami hadir tidak hanya sebagai penyedia jasa inspeksi, tapi juga sebagai pelindung transaksi digital.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fitur Andalan: Analisis Anti-Penipuan</h2>
            <p className="text-lg leading-relaxed mb-6">
              Kami membekali platform dengan fitur Fraud Analysis (Analisis Anti-Penipuan), yang mampu:
            </p>

            <div className="bg-automotive-50 p-6 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-automotive-600" />
                  </div>
                  <p>Menganalisis profil penjual dan mendeteksi pola mencurigakan</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-automotive-600" />
                  </div>
                  <p>Menemukan tanda-tanda penipuan, termasuk skema segitiga</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-automotive-600" />
                  </div>
                  <p>Memberi peringatan sebelum transaksi berisiko terjadi</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-automotive-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-automotive-600" />
                  </div>
                  <p>Menghadirkan rasa aman bagi pembeli maupun penjual</p>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi Kami</h2>
            <blockquote className="bg-automotive-100 p-8 rounded-lg mb-12 border-l-4 border-automotive-600">
              <p className="text-xl italic">
                "Merevolusi cara orang membeli dan menjual mobil bekas di Indonesia."
              </p>
            </blockquote>
            
            <p className="text-lg leading-relaxed mb-12">
              Dengan teknologi, data, dan integritas, ProfMobil AI ingin menjadi standar baru dalam industri ini—di mana keamanan, 
              efisiensi, dan kepercayaan menjadi landasan utama.
            </p>
          </div>

          <Separator className="my-10" />

          <div className="bg-automotive-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bergabunglah dengan Revolusi Mobil Bekas</h2>
            <p className="text-lg leading-relaxed mb-6">
              Kami terus berkembang dan berinovasi. Dengan ProfMobil AI, Anda tidak hanya mendapatkan inspeksi kendaraan, 
              tetapi juga pengalaman jual beli mobil bekas yang aman, transparan, dan modern.
            </p>
            
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-automotive-600">#ProfMobilAI – Aman, Cerdas, dan Terpercaya</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center space-x-4">
              <Users className="h-6 w-6 text-automotive-600" />
              <h3 className="text-xl font-semibold">Tim Kami</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Placeholder for team members - can be expanded later */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold">Ahmad Fauzi</h4>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold">Siti Nuraini</h4>
              <p className="text-gray-600">CTO & Teknologi AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold">Budi Santoso</h4>
              <p className="text-gray-600">Kepala Tim Inspeksi</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TentangProfMobilAi;
