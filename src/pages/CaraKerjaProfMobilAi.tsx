
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Car, Search, FileText, Check, Info, ShieldCheck, Lightbulb, DollarSign, Handshake } from "lucide-react";

const CaraKerjaProfMobilAi = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-automotive-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="bg-automotive-100 text-automotive-700 border-automotive-200 mb-4">
              Proses Inspeksi Cerdas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🚗 Cara Kerja <span className="text-automotive-600">ProfMobil AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Proses Inspeksi Cerdas untuk Beli Mobil Bekas Tanpa Was-Was
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menghadirkan proses inspeksi kendaraan yang efisien, akurat, dan bertenaga AI, 
              mulai dari pemesanan hingga laporan akhir.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-white" id="process-steps">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Proses Inspeksi Kendaraan</h2>
            <p className="mt-4 text-xl text-gray-600">Empat langkah sederhana menuju keputusan pembelian yang tepat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-automotive-600 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-automotive-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-automotive-600">1</span>
                </div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Car className="text-automotive-600" />
                  Pemesanan Inspeksi
                </h3>
                <p className="text-gray-600 mb-6">
                  Pilih lokasi dan jadwal inspeksi yang Anda inginkan. Masukkan detail kendaraan dan konfirmasi pemesanan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Pilih lokasi & waktu inspeksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Masukkan detail mobil (merek, tipe, tahun, dll.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Pilih metode pembayaran</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Opsional: Inspeksi langsung di lokasi atau jarak jauh</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-automotive-600 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-automotive-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-automotive-600">2</span>
                </div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Search className="text-automotive-600" />
                  Inspeksi Lapangan
                </h3>
                <p className="text-gray-600 mb-6">
                  Inspektor bersertifikat kami melakukan pemeriksaan menyeluruh di lapangan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Pengecekan fisik oleh teknisi berpengalaman</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Dokumentasi digital langsung dari aplikasi mobile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Verifikasi daftar periksa teknis dan visual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Foto & video kondisi mobil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Pemindaian OBD & analisis suara mesin</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-automotive-600 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-automotive-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-automotive-600">3</span>
                </div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <FileText className="text-automotive-600" />
                  Analisis AI
                </h3>
                <p className="text-gray-600 mb-6">
                  AI kami menganalisis hasil inspeksi untuk hasil yang objektif dan cepat.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">AI memproses seluruh data inspeksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Membandingkan kondisi mobil dengan ribuan data mobil sejenis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Menghitung skor kesehatan kendaraan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Deteksi dan klasifikasi potensi kerusakan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Estimasi biaya perbaikan secara langsung</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-automotive-600 h-2"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-automotive-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-automotive-600">4</span>
                </div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Check className="text-automotive-600" />
                  Laporan Terperinci
                </h3>
                <p className="text-gray-600 mb-6">
                  Laporan lengkap, transparan, dan mudah dibaca — langsung di tangan Anda.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Ringkasan hasil diagnosis AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Checklist inspeksi yang bisa diverifikasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Estimasi nilai pasar mobil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Rekomendasi: Beli / Perbaiki / Hindari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-automotive-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-automotive-600" />
                    </div>
                    <span className="text-gray-700">Sertifikasi ProfMobil (jika lolos kriteria kondisi baik)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="AI Analysis Visualization" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </AspectRatio>
            </div>
            <div>
              <Badge className="bg-automotive-100 text-automotive-700 mb-4">Visualisasi Proses</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lihat Bagaimana AI Kami Bekerja</h2>
              <p className="text-lg text-gray-600 mb-6">
                Dengan teknologi kecerdasan buatan terbaru, sistem kami menganalisis ratusan titik data 
                untuk memberikan penilaian akurat tentang kondisi mobil Anda.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <div className="flex items-center mb-2">
                    <ShieldCheck className="text-automotive-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Keamanan Data</h4>
                  </div>
                  <p className="text-gray-600">Data inspeksi Anda dilindungi dengan enkripsi tingkat tinggi dan hanya digunakan untuk keperluan analisis.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="text-automotive-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Pembelajaran Berkelanjutan</h4>
                  </div>
                  <p className="text-gray-600">AI kami terus belajar dari setiap inspeksi untuk meningkatkan akurasi dan kecepatan analisis.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-automotive-600 hover:bg-automotive-700">Coba Demo Interaktif</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-automotive-100 text-automotive-700 mb-4">
              Keunggulan Kami
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">🎯 Mengapa Ini Penting?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Dengan gabungan inspektor manusia dan kecanggihan AI, Anda akan mendapatkan keuntungan yang signifikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-automotive-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-automotive-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hindari Kerugian</h3>
                <p className="text-gray-600">
                  Menghindari kerugian karena membeli mobil dalam kondisi buruk yang tidak terdeteksi secara kasat mata.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-automotive-100 flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-automotive-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Objektif</h3>
                <p className="text-gray-600">
                  Mendapat informasi objektif tanpa intervensi manusia atau kepentingan pihak tertentu.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-automotive-100 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-automotive-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Negosiasi Harga</h3>
                <p className="text-gray-600">
                  Dapat bahan kuat untuk negosiasi harga berdasarkan kondisi aktual mobil.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-automotive-100 flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-automotive-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kepuasan Jangka Panjang</h3>
                <p className="text-gray-600">
                  Tidak menyesal di kemudian hari karena sudah mendapat mobil sesuai harapan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-automotive-600 to-automotive-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">💡 Yuk, Mulai Dengan ProfMobil AI!</h2>
            <p className="text-xl mb-8">
              Jadikan ProfMobil partner terpercaya Anda dalam beli mobil bekas. Proses canggih, hasil pasti!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-automotive-700 hover:bg-gray-100">
                Pesan Inspeksi Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-automotive-100 text-automotive-700 mb-4">
              Testimonial
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Apa Kata Pengguna Kami</h2>
            <p className="mt-4 text-xl text-gray-600">
              Berbagai pengalaman positif dari pengguna ProfMobil AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ahmad Maulana</h4>
                    <p className="text-gray-500 text-sm">Jakarta</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Berkat ProfMobil AI, saya berhasil menghindari mobil bermasalah yang tampak bagus dari luar. 
                  AI-nya mendeteksi masalah pada transmisi yang tidak saya sadari!"
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                    <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sinta Rahma</h4>
                    <p className="text-gray-500 text-sm">Surabaya</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Laporannya detail dan mudah dimengerti. Saya yang awam soal mobil jadi paham kondisi mobil 
                  yang mau saya beli. Sangat membantu dalam negosiasi harga!"
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                    <AvatarFallback>BP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">Budi Pratama</h4>
                    <p className="text-gray-500 text-sm">Bandung</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Prosesnya cepat dan profesional. Inspektor datang tepat waktu dan AI memberikan hasil 
                  analisis dalam waktu kurang dari satu jam. Sangat efisien!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section with Alert Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Alert className="mb-8 bg-automotive-50 border border-automotive-200">
              <AlertTitle className="text-automotive-700 flex items-center gap-2">
                <Info className="h-5 w-5" />
                Punya pertanyaan lain?
              </AlertTitle>
              <AlertDescription className="text-gray-600">
                Tim customer support kami siap membantu Anda. Hubungi kami melalui
                <a href="#" className="text-automotive-600 font-medium hover:underline ml-1">
                  live chat atau WhatsApp
                </a>.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaraKerjaProfMobilAi;

