
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, CircleCheck, Tag, Percent, Car } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingTierProps {
  title: string;
  normalPrice: string;
  price: string;
  description: string;
  carType: string;
  hotPrice: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  discountPercent?: number;
  showCarImage?: number;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  normalPrice,
  price,
  description,
  carType,
  hotPrice,
  features,
  popular = false,
  ctaText = "Pilih Paket",
  discountPercent,
  showCarImage,
}) => {
  return (
    <Card className={`relative h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg ${
      popular ? 'border-automotive-600 border-2 shadow-md' : ''
    }`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-automotive-600 text-white px-4 py-1 font-medium text-sm transform rotate-45 translate-x-8 translate-y-4">
            Popular
          </div>
        </div>
      )}
      {discountPercent && (
        <div className="absolute top-4 left-4">
          <div className="bg-red-500 text-white px-2 py-1 rounded-full font-medium text-xs flex items-center">
            <Percent size={14} className="mr-1" />
            {discountPercent}% OFF
          </div>
        </div>
      )}
      <CardHeader className="pb-0 pt-8">
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          {popular && <Tag size={18} className="text-automotive-600" />}
        </div>
        <div className="flex flex-col mb-4">
          <div className="flex items-baseline">
            <span className="text-4xl font-extrabold text-automotive-600">{price}</span>
            <span className="ml-1 text-gray-500">/mobil</span>
          </div>
          {normalPrice && (
            <div className="flex items-baseline mt-1">
              <span className="text-gray-500 line-through text-lg">{normalPrice}</span>
              <span className="ml-1 text-gray-400 text-sm">/mobil</span>
            </div>
          )}
          {hotPrice && (
            <div className="flex items-baseline mt-2">
              <span className="text-amber-600 font-bold text-sm">Hot Price: </span>
              <span className="ml-1 text-amber-600 font-bold text-sm">{hotPrice}</span>
            </div>
          )}
        </div>
        <p className="text-gray-600 font-medium">{carType}</p>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        
        {showCarImage === 1 && (
          <div className="mt-3">
            <div className="bg-gray-100 rounded p-2 flex justify-center">
              <Car size={50} className="text-automotive-600" />
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 pt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              {feature.included ? (
                <CircleCheck className="shrink-0 mt-0.5 h-5 w-5 text-automotive-600" />
              ) : (
                <Check className="shrink-0 mt-0.5 h-5 w-5 text-gray-400" />
              )}
              <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>{feature.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button 
          className={`w-full ${popular ? 'bg-automotive-600 hover:bg-automotive-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
          size="lg"
          variant={popular ? "default" : "outline"}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  // Common features across all pricing tiers
  const commonFeatures = [
    { title: "Inspeksi menyeluruh: Eksterior, interior, mesin & transmisi, kelistrikan, ban, dan dokumen kendaraan", included: true },
    { title: "Laporan digital via web: Bisa diakses kapan saja, lengkap dengan dokumentasi foto dan video", included: true },
    { title: "Analisis Penipuan (Fraud Analysis): Deteksi potensi penipuan seperti modus penipuan segitiga", included: true },
    { title: "Rekomendasi AI: Nilai pasar, estimasi perbaikan, dan skor kondisi kendaraan", included: true },
    { title: "Sertifikasi ProfMobil AI (jika memenuhi syarat)", included: true },
  ];

  const pricingTiers = [
    {
      title: "Reguler Car",
      normalPrice: "Rp 300.000",
      price: "Rp 250.000",
      carType: "City Car, LMPV, LSUV",
      description: "(Honda Brio, Toyota Avanza, Suzuki Ertiga, Mitsubishi Xpander, dll)",
      popular: false,
      discountPercent: 16,
      hotPrice: "Rp 700.000 Paket 3 Inspeksi Mobil",
      features: commonFeatures,
      ctaText: "Hubungi Kami",
      showCarImage: 1
    },
    {
      title: "Prenium Car",
      normalPrice: "Rp 400.000",
      price: "Rp 300.000",
      carType: "SUV, Full Size Sedan",
      description: "(Kijang Innova, Toyota Fortuner, Mitsubishi Pajero Sport, Toyota Camry, dll)",
      popular: true,
      discountPercent: 25,
      hotPrice: "Rp 800.000 Paket 3 Inspeksi Mobil",
      features: commonFeatures,
      ctaText: "Pilih Paket Ini"
    },
    {
      title: "Luxury Car",
      normalPrice: "Rp 400.000",
      price: "Rp 300.000",
      carType: "BMW, Mercedes Benz, Toyota Alphard, dll",
      description: "",
      popular: false,
      discountPercent: 25,
      hotPrice: "Rp 800.000 Paket 3 Inspeksi Mobil",
      features: commonFeatures,
      ctaText: "Hubungi Kami"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            💰 Harga Layanan Inspeksi
          </h2>
          <p className="max-w-3xl text-xl text-gray-500 mx-auto">
            Kami menyediakan paket inspeksi yang sesuai dengan kebutuhan dan jenis kendaraan Anda.
            Setiap layanan mencakup inspeksi menyeluruh dan teknologi AI canggih untuk memastikan keputusan terbaik.
          </p>
          
          <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🔍 Apa yang Anda Dapatkan:</h3>
            <ul className="space-y-2 text-left max-w-3xl mx-auto">
              <li className="flex items-start gap-2">
                <CircleCheck className="shrink-0 mt-1 h-5 w-5 text-automotive-600" />
                <span>Inspeksi menyeluruh: Eksterior, interior, mesin & transmisi, kelistrikan, ban, dan dokumen kendaraan.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="shrink-0 mt-1 h-5 w-5 text-automotive-600" />
                <span>Laporan digital via web: Bisa diakses kapan saja, lengkap dengan dokumentasi foto dan video.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="shrink-0 mt-1 h-5 w-5 text-automotive-600" />
                <span>Analisis Penipuan (Fraud Analysis): Deteksi potensi penipuan seperti modus penipuan segitiga.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="shrink-0 mt-1 h-5 w-5 text-automotive-600" />
                <span>Rekomendasi AI: Nilai pasar, estimasi perbaikan, dan skor kondisi kendaraan.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="shrink-0 mt-1 h-5 w-5 text-automotive-600" />
                <span>Sertifikasi ProfMobil AI (jika memenuhi syarat).</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 inline-flex items-center bg-amber-50 text-amber-800 px-4 py-2 rounded-md border border-amber-200">
            <Tag size={18} className="mr-2 text-amber-600" />
            <span className="font-medium">Promo Spesial!</span> 
            <span className="ml-2">Diskon hingga 25% untuk semua paket inspeksi</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              normalPrice={tier.normalPrice}
              price={tier.price}
              carType={tier.carType}
              description={tier.description}
              hotPrice={tier.hotPrice}
              features={tier.features}
              popular={tier.popular}
              ctaText={tier.ctaText}
              discountPercent={tier.discountPercent}
              showCarImage={tier.showCarImage}
            />
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4">Butuh layanan khusus untuk kendaraan Anda?</p>
          <Button variant="outline" className="border-automotive-600 text-automotive-600 hover:bg-automotive-50">
            Hubungi Kami untuk Layanan Khusus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
