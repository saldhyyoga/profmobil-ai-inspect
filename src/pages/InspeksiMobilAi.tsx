
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ShieldCheck, Car, Bot, FileText, DollarSign, Wrench, Check, X } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function InspeksiMobilAiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-automotive-50 to-automotive-100 px-6 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              🔍 Inspeksi Mobil <span className="text-automotive-600">+ AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              💡 Solusi Cerdas Beli Mobil Bekas Tanpa Was-Was
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-automotive-600 hover:bg-automotive-700 text-lg px-8 py-6 rounded-lg">
                Jadwalkan Inspeksi Sekarang
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="px-6 py-12 max-w-5xl mx-auto space-y-16">
          {/* What is Car Inspection */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Car className="h-8 w-8 text-automotive-600" />
              <h2 className="text-3xl font-bold">Apa Itu Inspeksi Mobil?</h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="text-lg">
                Inspeksi mobil adalah proses pengecekan menyeluruh terhadap kondisi kendaraan—mulai dari mesin, sasis, bodi, interior, kelistrikan, hingga riwayat kendaraan. Tujuannya adalah memastikan mobil dalam kondisi <strong className="text-automotive-700">layak pakai</strong>, <strong className="text-automotive-700">bebas masalah tersembunyi</strong>, dan <strong className="text-automotive-700">sesuai ekspektasi pembeli</strong>.
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-4">
                    <p className="font-medium">🔧 Bekas banjir</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-4">
                    <p className="font-medium">⚠️ Bekas tabrakan</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-4">
                    <p className="font-medium">🔋 Masalah kelistrikan</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-4">
                    <p className="font-medium">🛠️ Mesin bermasalah</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why is it important */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-automotive-600" />
              <h2 className="text-3xl font-bold">Kenapa Inspeksi Mobil Itu Penting?</h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="text-lg mb-4">
                <span className="font-semibold text-xl">Beli mobil bekas = investasi besar 💸</span><br />
                Kesalahan sedikit bisa berujung rugi jutaan rupiah 💀
              </p>
              
              <h3 className="font-medium text-xl mb-3 text-gray-700">Risiko tanpa inspeksi:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50">
                  <div className="rounded-full bg-red-100 p-2">🚨</div>
                  <p>Dapat mobil bekas banjir yang cepat rusak</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50">
                  <div className="rounded-full bg-red-100 p-2">🧯</div>
                  <p>Mesin mogok karena kerusakan tersembunyi</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50">
                  <div className="rounded-full bg-red-100 p-2">🪙</div>
                  <p>Biaya servis membengkak setelah pembelian</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50">
                  <div className="rounded-full bg-red-100 p-2">📉</div>
                  <p>Nilai jual kembali anjlok</p>
                </div>
              </div>
              <div className="bg-green-50 p-5 rounded-lg">
                <p className="font-medium text-green-800">
                  ✅ Dengan inspeksi, Anda tahu <strong>apa yang Anda beli</strong><br />
                  ✅ Cegah penyesalan setelah transaksi
                </p>
              </div>
            </div>
          </section>

          {/* AI Technology */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Bot className="h-8 w-8 text-automotive-600" />
              <h2 className="text-3xl font-bold">Teknologi AI di ProfMobil</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="text-lg mb-6">
                AI (Artificial Intelligence / Kecerdasan Buatan) adalah teknologi pintar yang mampu:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-automotive-50">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-automotive-100 rounded-full p-2">
                        🔍
                      </div>
                      <h4 className="font-semibold">Menganalisis ribuan data mobil</h4>
                    </div>
                    <p className="text-gray-700">
                      AI kami dilatih dengan data dari ribuan mobil untuk memberikan analisis akurat
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-automotive-50">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-automotive-100 rounded-full p-2">
                        🧠
                      </div>
                      <h4 className="font-semibold">Mengenali pola kerusakan</h4>
                    </div>
                    <p className="text-gray-700">
                      Menemukan anomali dan potensi masalah yang sering terlewat
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-automotive-50">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-automotive-100 rounded-full p-2">
                        💡
                      </div>
                      <h4 className="font-semibold">Memberikan penilaian objektif</h4>
                    </div>
                    <p className="text-gray-700">
                      Hasil analisis yang netral dan bebas dari bias manusia
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-automotive-50">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-automotive-100 rounded-full p-2">
                        💰
                      </div>
                      <h4 className="font-semibold">Estimasi biaya & harga pasar</h4>
                    </div>
                    <p className="text-gray-700">
                      Memberikan gambaran nilai yang akurat berdasarkan kondisi aktual
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="font-medium text-xl mb-4 text-automotive-600">Di ProfMobil, AI kami dapat:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-automotive-600 mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>🚨 Deteksi potensi kerusakan tersembunyi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-automotive-600 mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>📊 Memberikan skor kondisi mobil secara menyeluruh</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-automotive-600 mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>💵 Membantu negosiasi harga yang adil</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-automotive-600 mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>🏷️ Bandingkan harga pasar secara real-time</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Benefits */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Wrench className="h-8 w-8 text-automotive-600" />
              <h2 className="text-3xl font-bold">Kelebihan Inspeksi Mobil + AI di ProfMobil</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-automotive-500">
                <CardHeader>
                  <h3 className="font-semibold text-xl">Paduan Teknisi Berpengalaman + AI Cerdas</h3>
                </CardHeader>
                <CardContent>
                  <p>Teknisi memeriksa langsung, AI bantu analisa lebih dalam dan netral.</p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-automotive-500">
                <CardHeader>
                  <h3 className="font-semibold text-xl">Laporan Lengkap & Transparan</h3>
                </CardHeader>
                <CardContent>
                  <p>Format PDF + Digital mudah dibaca. Disertai ringkasan skor, detail kerusakan, dan saran.</p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-automotive-500">
                <CardHeader>
                  <h3 className="font-semibold text-xl">Rekomendasi Jelas</h3>
                </CardHeader>
                <CardContent>
                  <p>Beli ✅ / Perbaiki 🔧 / Hindari ❌</p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-automotive-500">
                <CardHeader>
                  <h3 className="font-semibold text-xl">Bisa Digunakan untuk Nego Harga</h3>
                </CardHeader>
                <CardContent>
                  <p>Gunakan laporan sebagai bukti saat menawar 🚗💬</p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-automotive-500">
                <CardHeader>
                  <h3 className="font-semibold text-xl">Cocok untuk Pembeli & Showroom</h3>
                </CardHeader>
                <CardContent>
                  <p>Untuk individu, dealer, atau showroom: fleksibel & praktis</p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-automotive-500">
                <CardHeader>
                  <h3 className="font-semibold text-xl">AI Bantu Rekomendasi Mobil Sesuai Kebutuhan</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>💵 Budget & estimasi biaya bulanan</li>
                    <li>🧍‍♂️ Kebutuhan (keluarga, kerja, gaya hidup)</li>
                    <li>🌍 Lokasi penggunaan (kota / luar kota)</li>
                    <li>🔍 Tujuan jangka panjang</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Bonus */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-automotive-600" />
              <h2 className="text-3xl font-bold">BONUS: Cek Harga Pasar & Riwayat Mobil</h2>
            </div>
            
            <div className="bg-gradient-to-br from-automotive-100 to-automotive-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Selain inspeksi teknis, kami juga menyertakan:</h3>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <div className="bg-automotive-50 rounded-full p-3 mb-3">
                    <DollarSign className="h-6 w-6 text-automotive-600" />
                  </div>
                  <p>Estimasi harga pasar terkini</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <div className="bg-automotive-50 rounded-full p-3 mb-3">
                    <X className="h-6 w-6 text-automotive-600" />
                  </div>
                  <p>Deteksi mobil bekas lelang, taksi, atau rekondisi</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <div className="bg-automotive-50 rounded-full p-3 mb-3">
                    <FileText className="h-6 w-6 text-automotive-600" />
                  </div>
                  <p>Riwayat pengiklanan & penggunaan sebelumnya</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <Card className="border-none shadow-lg bg-gradient-to-r from-automotive-600 to-automotive-700">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-2xl font-bold text-white">🧠 Jangan Asal Tebak, Pakai Data</h2>
              <p className="text-automotive-50 text-lg max-w-3xl mx-auto">
                Mobil bukan sekadar beli jalan — itu keputusan penting. ProfMobil bantu Anda membeli dengan percaya diri, tanpa takut salah pilih atau tertipu.
              </p>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-automotive-700 hover:text-automotive-800 border-none text-lg px-8">
                💬 Cek Mobil Incaran Sekarang
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
