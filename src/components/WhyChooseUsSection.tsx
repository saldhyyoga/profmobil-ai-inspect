
import React from 'react';
import { ShieldCheck, HandHeart, Robot, ChartBar, Compare, Flag } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Harus <span className="text-automotive-600">ProfMobil AI</span> Sebelum Beli Mobil Bekas?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Keputusan membeli mobil bekas yang lebih cerdas, lebih aman, dan berdasarkan data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-purple-400 to-blue-500" />
            <div className="p-6">
              <div className="bg-purple-100 p-3 inline-flex rounded-lg mb-4">
                <HandHeart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gak Paham Mobil? Tenang, Kami yang Cek</h3>
              <p className="text-gray-600 mb-4">
                Tidak semua orang ngerti seluk-beluk mobil — dari mesin, kaki-kaki, hingga bekas tabrakan atau banjir.
                ProfMobil AI hadir sebagai mata dan telinga Anda.
              </p>
              <p className="text-gray-600 font-medium">
                Kami inspeksi menyeluruh: mesin, sasis, bodi, interior, kelistrikan, dan sejarah tersembunyi.
              </p>
              <p className="text-gray-700 italic mt-4 font-medium">
                "Karena beli mobil bukan cuma soal penampilan luar."
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-blue-400 to-teal-500" />
            <div className="p-6">
              <div className="bg-blue-100 p-3 inline-flex rounded-lg mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kamu Bayar Puluhan Hingga Ratusan Juta — Jangan Asal!</h3>
              <p className="text-gray-600 mb-4">
                Beli mobil bekas tanpa pengecekan itu seperti beli kucing dalam karung.
                Risiko besar seperti:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">🚫</span> Bekas banjir
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">🚫</span> Tabrakan parah
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">🚫</span> Mesin rusak yang disulap kinclong
                </li>
              </ul>
              <p className="text-gray-700 italic mt-4 font-medium">
                "Lebih baik bayar inspeksi 300 ribu daripada rugi 30 juta kemudian."
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-teal-400 to-green-500" />
            <div className="p-6">
              <div className="bg-teal-100 p-3 inline-flex rounded-lg mb-4">
                <Robot className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kami Gunakan AI, Bukan Cuma "Feeling"</h3>
              <p className="text-gray-600 mb-4">
                Kami bukan sekadar lihat-lihat. Kami analisa setiap mobil dengan teknologi:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">🔍</span> AI-powered inspection
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">📊</span> Skor kesehatan mobil (engine, interior, body, dll)
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">💰</span> Estimasi biaya perbaikan
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">💹</span> Cek nilai pasar real-time
                </li>
              </ul>
              <p className="text-gray-700 italic mt-4 font-medium">
                "Supaya kamu bisa jawab dengan yakin: Mobil ini worth it atau nggak?"
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-green-400 to-yellow-500" />
            <div className="p-6">
              <div className="bg-green-100 p-3 inline-flex rounded-lg mb-4">
                <Compare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bandingkan Mobil, Pilih yang Terbaik</h3>
              <p className="text-gray-600 mb-4">
                Masih galau antara beberapa mobil incaran? Kami bantu kamu:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span> 
                  <span>Komparasi visual dan data 2–3 mobil sekaligus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span> 
                  <span>Rekomendasi AI berdasarkan skor dan value terbaik</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span> 
                  <span>Saran beli / tunda / hindari</span>
                </li>
              </ul>
              <p className="text-gray-700 italic mt-4 font-medium">
                "Biar data bantu kamu memilih — bukan perasaan."
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
            <div className="p-6">
              <div className="bg-yellow-100 p-3 inline-flex rounded-lg mb-4">
                <Flag className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Laporan Lengkap & Bisa Dipakai untuk Nego</h3>
              <p className="text-gray-600 mb-4">
                Setelah inspeksi, kamu dapat:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span> Laporan digital & PDF, mudah dibaca dan dibagikan
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span> Rekomendasi aksi: beli / tawar / hindari
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span> Bukti nyata yang bisa kamu tunjukkan ke penjual
                </li>
              </ul>
              <p className="text-gray-700 italic mt-4 font-medium">
                "Karena yakin = tenang, dan tenang = keputusan yang cerdas."
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-orange-400 to-red-500" />
            <div className="p-6">
              <div className="bg-orange-100 p-3 inline-flex rounded-lg mb-4">
                <ChartBar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hindari Rasa Menyesal di Kemudian Hari</h3>
              <p className="text-gray-600 mb-4">
                Inspeksi sekarang = menghindari kerugian besar di kemudian hari.
                ProfMobil AI bantu kamu ambil keputusan dengan logika, data, dan rasa aman.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-medium text-center">
                  "Keputusan terbaik adalah keputusan yang berdasarkan informasi lengkap, bukan spekulasi."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-automotive-600 hover:bg-automotive-700 text-white px-8 py-3 rounded-md text-lg font-medium">
            Jadwalkan Inspeksi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
