
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, PenTool, Shield, Clock, Users } from "lucide-react";
import NavBar from "@/components/NavBar";

export default function SuratPerjanjianDigitalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            Surat Perjanjian Jual Beli Digital
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Amankan transaksi mobil bekas Anda dengan dokumen sah yang cepat, praktis, dan memiliki kekuatan hukum.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
            <PenTool className="mr-2 h-5 w-5" /> Buat Surat Sekarang
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          <span className="border-b-4 border-blue-500 pb-2">Keunggulan Kami</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Perlindungan Hukum</h3>
              <p className="text-gray-600">
                Dokumen sah yang melindungi hak pembeli dan penjual dengan kekuatan hukum yang sama dengan dokumen fisik.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
            <div className="h-2 bg-purple-600"></div>
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cepat & Praktis</h3>
              <p className="text-gray-600">
                Proses pembuatan hanya 5 menit. Tidak perlu bertemu fisik atau datang ke notaris untuk menyelesaikan perjanjian.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
            <div className="h-2 bg-green-600"></div>
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Untuk Semua</h3>
              <p className="text-gray-600">
                Cocok untuk transaksi perorangan maupun dealer/showroom dengan fitur kustomisasi lanjutan.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenapa Menggunakan Layanan Kami?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ProfMobil AI menyediakan solusi dokumen digital terlengkap untuk transaksi mobil bekas di Indonesia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <Card className="border-none shadow-xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">🔐 Keamanan & Legalitas</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dokumen digital dengan kekuatan hukum yang sama dengan dokumen fisik</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">E-meterai resmi terintegrasi (bekerjasama dengan Peruri)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Verifikasi identitas dengan data Dukcapil untuk keamanan maksimal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Penyimpanan aman dengan enkripsi end-to-end</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border-none shadow-xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">🚀 Fitur Unggulan</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FileText className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Template profesional yang dirancang oleh ahli hukum</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Integrasi dengan hasil inspeksi mobil dan kalkulasi harga pasar</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">E-signature dengan validasi biometrik untuk keamanan tambahan</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Penyimpanan seumur hidup & akses dari mana saja</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Proses Pembuatan <span className="text-blue-600">Cepat & Mudah</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">Isi Data</h3>
              <p className="text-gray-600 text-sm">Lengkapi formulir dengan data pembeli, penjual, dan kendaraan</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">Verifikasi</h3>
              <p className="text-gray-600 text-sm">Verifikasi identitas kedua belah pihak via OTP atau biometrik</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">Tanda Tangan</h3>
              <p className="text-gray-600 text-sm">Tanda tangani dokumen secara digital dengan e-signature</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2">Selesai!</h3>
              <p className="text-gray-600 text-sm">Dokumen sah langsung dikirim ke email kedua belah pihak</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-10 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Membuat Surat Perjanjian Digital?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Tidak perlu cetak, tidak perlu ke notaris. Selesaikan transaksi mobil bekas Anda dengan aman dan cepat dari smartphone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg">
                Lihat Harga
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg">
                <PenTool className="mr-2 h-5 w-5" /> Mulai Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
