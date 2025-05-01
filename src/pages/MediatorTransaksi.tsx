
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Handshake, FileText, Check } from "lucide-react";
import NavBar from "@/components/NavBar";

export default function MediatorTransaksi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-automotive-600 text-white overflow-hidden py-16">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎯 Mediator Transaksi by Inspector</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Jaminan transaksi aman & profesional oleh tim inspector berpengalaman
          </p>
          <Button className="mt-8 bg-white hover:bg-gray-100 text-automotive-600 hover:text-automotive-700 text-lg px-8 py-6 h-auto font-medium rounded-xl shadow-lg hover:shadow-xl transition-all">
            Gunakan Jasa Mediator
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tujuan Layanan Mediator ProfMobil</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-automotive-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-automotive-50">
                    <ShieldCheck className="h-8 w-8 text-automotive-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">✅ Mencegah Penipuan Segitiga</h3>
                    <p className="text-gray-600">
                      Kami bertindak sebagai perantara aman antara pembeli dan penjual. Tidak ada transaksi langsung tanpa verifikasi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-automotive-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-automotive-50">
                    <Handshake className="h-8 w-8 text-automotive-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">✅ Transaksi Lebih Aman & Profesional</h3>
                    <p className="text-gray-600">
                      Tim kami hadir saat transaksi berlangsung (offline), memastikan dokumen valid dan dana baru diteruskan setelah serah terima.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-automotive-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-automotive-50">
                    <Check className="h-8 w-8 text-automotive-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">✅ Rasa Tenang bagi Kedua Pihak</h3>
                    <p className="text-gray-600">
                      Tidak perlu saling curiga. Semua dilakukan sesuai standar yang transparan dan terpercaya.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-automotive-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-automotive-50">
                    <FileText className="h-8 w-8 text-automotive-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">✅ Edukasi & Pendampingan</h3>
                    <p className="text-gray-600">
                      Kami bantu jelaskan proses transaksi mobil bekas yang ideal — apalagi untuk pembeli pertama kali.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">🔄 Alur Sederhana Mediator Manual ProfMobil</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Proses yang transparan dan terstruktur untuk memastikan keamanan transaksi Anda
          </p>

          <div className="space-y-4">
            {[
              { number: "1", text: "Penjual dan pembeli setuju menggunakan jasa mediator" },
              { number: "2", text: "Tim ProfMobil mengatur jadwal serah terima" },
              { number: "3", text: "Kami memverifikasi dokumen dan kondisi mobil" },
              { number: "4", text: "Transaksi dilakukan sesuai kesepakatan" },
              { number: "5", text: "Surat Perjanjian Jual Beli Digital disiapkan" },
              { number: "6", text: "Serah terima kunci + dokumen" },
              { number: "7", text: "Transaksi selesai, tanpa rasa was-was" },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="w-10 h-10 rounded-full bg-automotive-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <p className="text-lg">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold">Transaksi Aman, Proses Cepat</h3>
                <p className="text-gray-600 mt-2">
                  Tim mediator ProfMobil hadir langsung di lokasi serah terima, memastikan semua dokumen dan kondisi kendaraan sesuai dengan kesepakatan. Kami juga memfasilitasi proses pembayaran yang aman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6 bg-automotive-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">📌 Visi Kami</h2>
          <p className="text-xl leading-relaxed">
            ProfMobil AI ingin merevolusi transaksi mobil bekas di Indonesia
            dengan menciptakan ekosistem yang aman, adil, dan transparan.
          </p>
          <p className="text-xl mt-4 leading-relaxed">
            Kami percaya, jual beli mobil harus bebas dari praktik penipuan, intimidasi, atau tekanan.
            Fitur mediator ini adalah langkah awal untuk membangun kepercayaan antara semua pihak.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">✍️ Siap Jual atau Beli Mobil Tanpa Was-Was?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Gunakan layanan Mediator ProfMobil. Pastikan transaksi Anda bebas tipu-tipu, tanpa drama.
          </p>
          <Button className="bg-automotive-600 hover:bg-automotive-700 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all">
            Hubungi Mediator Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
}
