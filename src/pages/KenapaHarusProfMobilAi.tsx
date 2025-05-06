
import React from 'react';
import { Bot, Shield, AlertTriangle, CheckCheck, Users, HandHeart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const KenapaHarusProfMobilAi: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-automotive-50 to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-automotive-600">Kenapa Harus</span> ProfMobil AI?
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  Teknologi Cerdas untuk Lindungi Transaksi Mobil Anda
                </p>
                <Button className="bg-automotive-600 hover:bg-automotive-700 text-white px-8 py-6 rounded-md text-lg font-medium">
                  Mulai Inspeksi
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/images/ai-car-inspection.webp" 
                  alt="AI Car Inspection Technology" 
                  className="rounded-lg shadow-xl object-cover h-80 w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Intelligence Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-automotive-100 text-automotive-600 p-2 rounded-full mb-4">
                <Bot className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kecerdasan Buatan untuk Keputusan Mobil Terbaik
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ProfMobil AI adalah pelopor dalam memanfaatkan Artificial Intelligence (AI) untuk inspeksi dan analisis mobil bekas secara menyeluruh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mengukur Skor Kesehatan Mobil</h3>
                <p className="text-gray-600">
                  Dari ratusan indikator teknis untuk memberikan gambaran objektif
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mendeteksi Kerusakan Tersembunyi</h3>
                <p className="text-gray-600">
                  Teknologi AI yang mampu mengidentifikasi masalah yang tidak terlihat mata
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Estimasi Biaya Perbaikan</h3>
                <p className="text-gray-600">
                  Perhitungan akurat biaya perbaikan dan nilai pasar wajar
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analisis Riwayat Kendaraan</h3>
                <p className="text-gray-600">
                  Memeriksa pola kerusakan umum dan riwayat kendaraan
                </p>
              </Card>
            </div>

            <div className="text-center mt-10 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg font-medium text-gray-800">
                Dengan ProfMobil, Anda tidak lagi bergantung pada opini subjektif.
                <br />Setiap keputusan Anda didukung oleh data, analisis, dan kecerdasan buatan.
              </p>
            </div>
          </div>
        </section>

        {/* Anti-Fraud Analysis Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:gap-12">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="inline-block bg-red-100 text-red-600 p-2 rounded-full mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Analisis Anti-Penipuan
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Tangkal Modus Jahat Sebelum Terjadi
                </p>
                <p className="text-gray-600 mb-8">
                  Kami memperkenalkan fitur Fraud Analysis / Analisis Anti Penipuan — sistem yang dirancang khusus untuk melindungi transaksi Anda.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-4">
                      <Users className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Mengidentifikasi Profil Penjual yang Mencurigakan</p>
                      <p className="text-sm text-gray-600">Sistem AI kami menyaring profil penjual yang menunjukkan tanda-tanda mencurigakan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-4">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Mendeteksi Modus Penipuan Segitiga</p>
                      <p className="text-sm text-gray-600">Mengenali pola penipuan segitiga yang semakin marak di Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-4">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Membaca Pola Transaksi Tidak Wajar</p>
                      <p className="text-sm text-gray-600">Mengenali pola transaksi yang menunjukkan tanda-tanda mencurigakan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-2 mr-4">
                      <CheckCheck className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Memberi Peringatan Otomatis</p>
                      <p className="text-sm text-gray-600">Memberi notifikasi jika ada potensi penipuan terdeteksi</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="/images/fraud-analysis.webp" 
                  alt="Fraud Analysis Technology" 
                  className="rounded-lg shadow-xl object-cover h-96 w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Triangle Fraud Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-100 text-red-600 p-2 rounded-full mb-4">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Apa Itu Penipuan Segitiga?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Modus klasik yang semakin sering terjadi di Indonesia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
                <p className="text-2xl font-bold text-red-500 mb-3">01</p>
                <h3 className="text-xl font-semibold mb-3">Penipu Mengiklankan Mobil</h3>
                <p className="text-gray-600">
                  Penipu mengiklankan mobil milik orang lain tanpa sepengetahuan pemilik asli
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
                <p className="text-2xl font-bold text-red-500 mb-3">02</p>
                <h3 className="text-xl font-semibold mb-3">Menghubungkan Pembeli</h3>
                <p className="text-gray-600">
                  Ia menghubungkan pembeli dengan pemilik asli tanpa sepengetahuan pemilik
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
                <p className="text-2xl font-bold text-red-500 mb-3">03</p>
                <h3 className="text-xl font-semibold mb-3">Transfer ke Penipu</h3>
                <p className="text-gray-600">
                  Pembeli mentransfer uang ke penipu, bukan ke pemilik mobil sebenarnya
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
                <p className="text-2xl font-bold text-red-500 mb-3">04</p>
                <h3 className="text-xl font-semibold mb-3">Penipu Menghilang</h3>
                <p className="text-gray-600">
                  Mobil tak pernah datang, dan penipu menghilang dengan uang pembeli
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protection Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-automotive-100 text-automotive-600 p-2 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ProfMobil Hadir Sebagai Penghalang
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dengan analisis AI dan Mediator Transaksi Resmi, kami menjamin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-automotive-500">
                <h3 className="text-xl font-semibold mb-3">Verifikasi identitas penjual</h3>
                <p className="text-gray-600">
                  Kami memverifikasi identitas penjual secara menyeluruh untuk memastikan kredibilitasnya
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-automotive-500">
                <h3 className="text-xl font-semibold mb-3">Pemantauan alur komunikasi & transaksi</h3>
                <p className="text-gray-600">
                  Kami memantau seluruh alur komunikasi dan transaksi untuk mendeteksi aktivitas mencurigakan
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-automotive-500">
                <h3 className="text-xl font-semibold mb-3">Rekomendasi aman sebelum pembayaran</h3>
                <p className="text-gray-600">
                  Memberikan rekomendasi keamanan sebelum pembayaran dilakukan untuk melindungi investasi Anda
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proses Profesional + AI = Proteksi Maksimal
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kami tak hanya inspeksi — kami bantu Anda menghindari penyesalan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <div className="mr-4 bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Inspeksi Fisik oleh Inspektor Tersertifikasi</h3>
                  <p className="text-gray-600">
                    Tim ahli kami yang terlatih dan tersertifikasi akan memeriksa setiap detail mobil Anda
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <div className="mr-4 bg-purple-100 p-3 rounded-full">
                  <Bot className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analisis Data dengan AI Berbasis Cloud</h3>
                  <p className="text-gray-600">
                    Memanfaatkan teknologi cloud AI untuk menganalisis data secara komprehensif dan akurat
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <div className="mr-4 bg-green-100 p-3 rounded-full">
                  <CheckCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Laporan Digital Interaktif dengan Bukti Visual</h3>
                  <p className="text-gray-600">
                    Laporan digital yang interaktif dan dilengkapi dengan bukti visual untuk memudahkan pemahaman
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <div className="mr-4 bg-amber-100 p-3 rounded-full">
                  <HandHeart className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transaksi Aman dengan Dukungan Legal dan Etika</h3>
                  <p className="text-gray-600">
                    Transaksi yang dijamin aman dengan dukungan legal dan etika dari tim ahli kami
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-br from-automotive-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Misi Kami: Bebaskan Pasar Mobil Bekas dari Penipuan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dengan ProfMobil AI, kami ingin menciptakan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                <div className="mr-4 bg-green-100 p-3 rounded-full">
                  <CheckCheck className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  Ekosistem transaksi mobil yang jujur dan transparan
                </p>
              </div>

              <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                <div className="mr-4 bg-blue-100 p-3 rounded-full">
                  <HandHeart className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  Keputusan pembelian yang berbasis data, bukan insting
                </p>
              </div>

              <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                <div className="mr-4 bg-purple-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  Sistem perlindungan konsumen berbasis teknologi
                </p>
              </div>

              <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                <div className="mr-4 bg-amber-100 p-3 rounded-full">
                  <Bot className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  Penggunaan AI untuk mengatasi masalah klasik di pasar otomotif
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-automotive-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jangan Bertaruh dalam Transaksi Mobil
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Beli mobil tanpa data adalah perjudian.
              <br />Gunakan ProfMobil AI — karena keamanan transaksi Anda tidak bisa ditawar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-automotive-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium">
                Jadwalkan Inspeksi
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-automotive-500 px-8 py-3 rounded-md text-lg font-medium">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default KenapaHarusProfMobilAi;
