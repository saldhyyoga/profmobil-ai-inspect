
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, CircleCheck, Tag, Percent } from "lucide-react";
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
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  discountPercent?: number;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  normalPrice,
  price,
  description,
  features,
  popular = false,
  ctaText = "Pilih Paket",
  discountPercent,
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
        </div>
        <p className="text-gray-500">{description}</p>
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
  const pricingTiers = [
    {
      title: "Basic",
      normalPrice: "Rp 300.000",
      price: "Rp 250.000",
      description: "City Car, MPV, LSUV, Hatchback",
      popular: false,
      discountPercent: 16,
      features: [
        { title: "Inspeksi menyeluruh (Eksterior, Interior, Mesin & Transmisi, Dokumen, Dll)", included: true },
        { title: "Laporan digital via web", included: true },
        { title: "Cek kondisi interior", included: true },
        { title: "City car & compact sedan", included: true },
        { title: "Laporan digital", included: true },
        { title: "Konsultasi hasil inspeksi", included: false },
        { title: "Estimasi biaya perbaikan", included: false },
      ],
      ctaText: "Hubungi Kami"
    },
    {
      title: "Standard",
      normalPrice: "Rp 450.000",
      price: "Rp 325.000",
      description: "Cocok untuk sedan besar dan SUV",
      popular: true,
      discountPercent: 28,
      features: [
        { title: "Inspeksi mesin mendalam", included: true },
        { title: "Cek kondisi bodi & cat", included: true },
        { title: "Cek kondisi interior lengkap", included: true },
        { title: "Full-size sedan & SUV", included: true },
        { title: "Laporan digital terperinci", included: true },
        { title: "Konsultasi hasil inspeksi", included: true },
        { title: "Estimasi biaya perbaikan", included: false },
      ],
      ctaText: "Pilih Paket Ini"
    },
    {
      title: "Premium",
      normalPrice: "Rp 500.000",
      price: "Rp 375.000",
      description: "Cocok untuk mobil mewah dan Eropa",
      popular: false,
      discountPercent: 25,
      features: [
        { title: "Inspeksi mesin komprehensif", included: true },
        { title: "Cek kondisi bodi & cat detail", included: true },
        { title: "Cek kondisi interior premium", included: true },
        { title: "Mobil Eropa & kendaraan mewah", included: true },
        { title: "Laporan digital premium", included: true },
        { title: "Konsultasi hasil inspeksi", included: true },
        { title: "Estimasi biaya perbaikan", included: true },
      ],
      ctaText: "Hubungi Kami"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Harga Layanan Inspeksi
          </h2>
          <p className="max-w-3xl text-xl text-gray-500 mx-auto">
            Kami menyediakan paket inspeksi yang sesuai dengan kebutuhan dan jenis kendaraan Anda
          </p>
          <div className="mt-4 inline-flex items-center bg-amber-50 text-amber-800 px-4 py-2 rounded-md border border-amber-200">
            <Tag size={18} className="mr-2 text-amber-600" />
            <span className="font-medium">Promo Spesial!</span> 
            <span className="ml-2">Diskon hingga 28% untuk semua paket inspeksi</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              normalPrice={tier.normalPrice}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              popular={tier.popular}
              ctaText={tier.ctaText}
              discountPercent={tier.discountPercent}
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
