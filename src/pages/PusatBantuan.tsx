import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, MessageSquare, HelpCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const PusatBantuan: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    { 
      id: "umum", 
      name: "Umum",
      icon: <Info className="h-5 w-5 text-purple-500" />,
      questions: [
        {
          q: "Apa itu ProfMobil AI?",
          a: "ProfMobil AI adalah layanan inspeksi mobil bekas berbasis Artificial Intelligence (AI) yang menggabungkan keahlian teknisi bersertifikat dengan kecanggihan analisis data otomatis."
        },
        {
          q: "Apakah ProfMobil tersedia di seluruh Indonesia?",
          a: "Untuk saat ini, kami tersedia di kota-kota besar dan terus memperluas cakupan layanan kami."
        },
        {
          q: "Apakah saya harus bertemu langsung dengan inspektor?",
          a: "Tidak harus. Anda bisa memilih opsi inspeksi jarak jauh jika Anda tidak bisa hadir saat inspeksi dilakukan."
        }
      ]
    },
    { 
      id: "layanan", 
      name: "Layanan & Pemesanan",
      icon: <HelpCircle className="h-5 w-5 text-blue-500" />,
      questions: [
        {
          q: "Bagaimana cara memesan inspeksi mobil?",
          a: "Pilih lokasi & jadwal inspeksi, masukkan detail kendaraan, pilih metode pembayaran, kemudian konfirmasi pemesanan."
        },
        {
          q: "Apakah bisa membatalkan atau mengubah jadwal inspeksi?",
          a: "Bisa, maksimal H-1 sebelum jadwal inspeksi. Silakan hubungi tim support kami."
        }
      ]
    },
    { 
      id: "teknologi", 
      name: "Teknologi & Laporan",
      icon: <Info className="h-5 w-5 text-amber-500" />,
      questions: [
        {
          q: "Apa saja yang diperiksa saat inspeksi?",
          a: "Mulai dari kondisi mesin, eksterior, interior, kelistrikan, riwayat kendaraan, hingga suara mesin dan pemindaian OBD."
        },
        {
          q: "Apa itu laporan AI dan bagaimana cara membacanya?",
          a: "Laporan AI kami berisi skor kondisi kendaraan, estimasi biaya perbaikan, serta rekomendasi pembelian atau perbaikan."
        },
        {
          q: "Apakah laporan bisa digunakan untuk negosiasi harga?",
          a: "Tentu. Laporan kami dapat dijadikan dokumen pendukung saat Anda menawar harga mobil."
        }
      ]
    },
    { 
      id: "keamanan", 
      name: "Keamanan & Penipuan",
      icon: <Info className="h-5 w-5 text-red-500" />,
      questions: [
        {
          q: "Apa itu Penipuan Segitiga dalam jual beli mobil?",
          a: "Penipuan segitiga terjadi saat penjual palsu berpura-pura menjadi pemilik mobil dan memperdaya pembeli, seringkali dengan cara memalsukan dokumen dan mendorong pembayaran ke rekening pihak ketiga."
        },
        {
          q: "Apa solusi ProfMobil terhadap modus penipuan seperti ini?",
          a: "Kami menyediakan fitur Fraud Analysis / Analisis Anti Penipuan yang dapat mengidentifikasi akun mencurigakan, mendeteksi pola penipuan segitiga, memberikan peringatan dini, dan menyarankan transaksi melalui Mediator Transaksi resmi."
        }
      ]
    }
  ];

  const features = [
    {
      title: "Inspeksi & Analisis AI",
      icon: <Search className="h-10 w-10 text-purple-500" />,
      items: ["Pemeriksaan fisik langsung", "Pemindaian OBD", "Dokumentasi digital", "Pemrosesan data oleh AI", "Laporan akurat & transparan"]
    },
    {
      title: "Fraud Analysis",
      icon: <HelpCircle className="h-10 w-10 text-blue-500" />,
      items: ["Deteksi penjual palsu", "Analisis histori dan pola iklan", "Rekomendasi langkah aman"]
    },
    {
      title: "Mediator Transaksi",
      icon: <MessageSquare className="h-10 w-10 text-green-500" />,
      items: ["Pengawasan pembayaran & serah terima", "Menghindari penipuan segitiga", "Notaris digital & konfirmasi kondisi"]
    },
    {
      title: "Lacak Status Pesanan",
      icon: <Search className="h-10 w-10 text-amber-500" />,
      items: ["Status inspeksi", "Proses analisis AI", "Laporan & sertifikasi"]
    }
  ];

  const contacts = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      desc: "Senin–Sabtu, 09.00–18.00 WIB"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      desc: "support@profmobil.ai"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telepon",
      desc: "021-12345678"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      desc: "+62 812 3456 7890"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-automotive-600">Pusat Bantuan</span> ProfMobil AI
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Temukan Jawaban, Dapatkan Solusi, Rasakan Kemudahan
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Apa yang ingin Anda ketahui?"
                className="pl-10 py-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-0 inset-y-0 px-4 bg-automotive-600 hover:bg-automotive-700">
                Cari
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-automotive-600">❓</span> FAQ (Pertanyaan Umum)
            </h2>
            <p className="text-gray-600">Temukan jawaban untuk pertanyaan-pertanyaan yang sering ditanyakan</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="umum" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                {faqCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 py-2"
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        <span>{category.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-1">
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Guide Section */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-automotive-600">📄</span> Panduan Fitur Utama
            </h2>
            <p className="text-gray-600">Pelajari lebih lanjut tentang fitur-fitur utama ProfMobil AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {feature.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Added id for anchor link */}
      <section id="contact-section" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-automotive-600">📞</span> Butuh Bantuan Langsung?
            </h2>
            <p className="text-gray-600">Tim Customer Success kami siap membantu Anda</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-automotive-600">
                    {contact.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-1">{contact.title}</h3>
                  <p className="text-gray-600">{contact.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            <span className="text-automotive-600">🧭</span> Visi Kami
          </h2>
          <p className="text-lg text-gray-700">
            ProfMobil AI hadir untuk merevolusi cara orang Indonesia membeli mobil bekas — dengan teknologi, transparansi, dan keamanan sebagai pondasi utama.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PusatBantuan;
