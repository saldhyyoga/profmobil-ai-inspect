
import { Car, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-automotive-400" />
              <span className="ml-2 text-xl font-bold">ProfMobil <span className="text-automotive-400">AI</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              Memimpin masa depan inspeksi mobil dengan teknologi bertenaga AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Inspeksi Mobil AI</a></li>
              {/* Removed "Laporan Digital", "Penilaian Pasar", "Rekomendasi Mobil" as requested */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tentang-profmobil" className="text-gray-400 hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              {/* Removed "Teknologi Kami", "Karir" as requested */}
              <li>
                <a href="/pusat-bantuan#contact-section" className="text-gray-400 hover:text-white">Kontak</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Hubungi Kami</h3>
            <p className="text-gray-400 mb-2">Jl. Inovasi 123</p>
            <p className="text-gray-400 mb-2">Kota Teknologi, KT 12345</p>
            <p className="text-gray-400 mb-2">info@profmobilai.com</p>
            <p className="text-gray-400">(123) 456-7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ProfMobil AI {/* Removed "Hak Cipta Dilindungi" */}
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {/* Commented out as requested */}
                {/* <li><a href="#" className="text-gray-400 hover:text-white text-sm">Kebijakan Privasi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Syarat Layanan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Kebijakan Cookie</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
