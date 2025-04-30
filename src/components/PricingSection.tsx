
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PricingTierProps {
  title: string;
  price: string;
  features: string[];
  examples: string;
  imageSrc: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  features,
  examples,
  imageSrc,
}) => {
  return (
    <Card className="overflow-hidden rounded-lg border-0 shadow-sm bg-[#ff6332] text-white h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-center p-6">
          <img 
            src={imageSrc} 
            alt={`${title} car`} 
            className="w-full h-40 object-contain"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-3xl font-bold uppercase mb-2">{title}</h3>
          <p className="text-6xl font-bold mb-6">{price}</p>
          <div className="space-y-2 mb-6 text-left">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
          <p className="mb-6 text-sm text-left">{examples}</p>
          <Button 
            variant="default" 
            className="w-full bg-black hover:bg-gray-800 text-white py-6"
          >
            <MessageSquare className="mr-2" />
            HUBUNGI KAMI
          </Button>
        </div>
      </div>
    </Card>
  );
};

const PricingSection = () => {
  const pricingTiers = [
    {
      title: "Reguler",
      price: "275K",
      features: [
        "City car",
        "Small sedan"
      ],
      examples: "(e.g. Honda Jazz, Daihatsu Xenia, Suzuki Swift, Kia Rio, Toyota Raize, mobil usia 15 than ke atas)",
      imageSrc: "https://i.imgur.com/JYcaJhK.png"
    },
    {
      title: "Extra",
      price: "325K",
      features: [
        "Full-size sedan",
        "SUV"
      ],
      examples: "(eg. Mazda CX-5, Nissan X-Trail, Mitsubishi Outlander, Honda HR-V, Toyota, Innova, Corolla Altis)",
      imageSrc: "https://i.imgur.com/O8DJRTR.png"
    },
    {
      title: "Luxury",
      price: "375K",
      features: [
        "Mobil eropa",
        "Luxury MPV & Sedan"
      ],
      examples: "(e.g. Toyota Alphard, Honda Accord, BMW, Mercy), High SUV (Fortuner, Pajero, etc.), Hilux.)",
      imageSrc: "https://i.imgur.com/UXy4HbI.png"
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Harga Layanan Inspeksi
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Pilih paket layanan inspeksi sesuai dengan jenis kendaraan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              features={tier.features}
              examples={tier.examples}
              imageSrc={tier.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
