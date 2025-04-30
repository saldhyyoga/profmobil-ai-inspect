
import { useState } from "react";
import { Car, Heart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CarRecommendation {
  id: number;
  name: string;
  image: string;
  price: number;
  year: number;
  mileage: number;
  features: string[];
  matchScore: number;
}

const RecommendationSection = () => {
  const [selectedPreference, setSelectedPreference] = useState("family");
  
  const recommendations: Record<string, CarRecommendation[]> = {
    family: [
      {
        id: 1,
        name: "Toyota RAV4",
        image: "bg-automotive-600",
        price: 27500,
        year: 2020,
        mileage: 35000,
        features: ["AWD", "Pencegahan Tabrakan", "Interior Luas"],
        matchScore: 95,
      },
      {
        id: 2,
        name: "Honda CR-V",
        image: "bg-tech-700",
        price: 25800,
        year: 2019,
        mileage: 42000,
        features: ["Hemat Bahan Bakar", "Keandalan", "Keamanan Canggih"],
        matchScore: 92,
      },
      {
        id: 3,
        name: "Subaru Outback",
        image: "bg-automotive-800",
        price: 29400,
        year: 2021,
        mileage: 28000,
        features: ["AWD", "Tangguh", "Rating Keamanan Tinggi"],
        matchScore: 88,
      },
    ],
    luxury: [
      {
        id: 4,
        name: "BMW 5-Series",
        image: "bg-tech-800",
        price: 48500,
        year: 2020,
        mileage: 22000,
        features: ["Interior Premium", "Teknologi Canggih", "Mesin Bertenaga"],
        matchScore: 94,
      },
      {
        id: 5,
        name: "Mercedes E-Class",
        image: "bg-automotive-700",
        price: 52300,
        year: 2021,
        mileage: 18000,
        features: ["Fitur Mewah", "Audio Premium", "Bantuan Pengemudi"],
        matchScore: 90,
      },
      {
        id: 6,
        name: "Audi A6",
        image: "bg-tech-600",
        price: 50100,
        year: 2020,
        mileage: 25000,
        features: ["Quattro AWD", "Kokpit Digital", "Finishing Premium"],
        matchScore: 87,
      },
    ],
    economy: [
      {
        id: 7,
        name: "Toyota Corolla",
        image: "bg-automotive-500",
        price: 19800,
        year: 2021,
        mileage: 18000,
        features: ["Hemat Bahan Bakar", "Andal", "Perawatan Rendah"],
        matchScore: 96,
      },
      {
        id: 8,
        name: "Honda Civic",
        image: "bg-tech-500",
        price: 21200,
        year: 2020,
        mileage: 25000,
        features: ["Desain Sporty", "Mesin Efisien", "Teknologi Modern"],
        matchScore: 94,
      },
      {
        id: 9,
        name: "Mazda 3",
        image: "bg-automotive-400",
        price: 20500,
        year: 2020,
        mileage: 22000,
        features: ["Nuansa Premium", "Handling Bagus", "Desain Stylish"],
        matchScore: 88,
      },
    ],
  };
  
  const CarCard = ({ car }: { car: CarRecommendation }) => (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className={`${car.image} h-48 relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Car className="h-20 w-20 text-white/70" />
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-full p-1.5">
          <Heart className="h-4 w-4 text-automotive-500" />
        </div>
        <div className="absolute bottom-2 left-2 bg-automotive-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {car.matchScore}% Cocok
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{car.name}</h3>
          <span className="text-lg font-bold text-automotive-600">Rp{car.price.toLocaleString()}</span>
        </div>
        
        <div className="flex text-sm text-gray-500 mb-3">
          <span className="mr-3">{car.year}</span>
          <span>{car.mileage.toLocaleString()} km</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {car.features.map((feature, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full mt-2 border-automotive-600 text-automotive-600 hover:bg-automotive-50"
        >
          Lihat Detail
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="recommendations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Rekomendasi Mobil
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            AI kami mencocokkan Anda dengan kendaraan berdasarkan preferensi dan kebutuhan Anda.
          </p>
        </div>

        <div className="mb-8">
          <Tabs 
            defaultValue="family" 
            value={selectedPreference} 
            onValueChange={setSelectedPreference}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-8 w-full sm:w-auto mx-auto">
              <TabsTrigger value="family">Keluarga</TabsTrigger>
              <TabsTrigger value="luxury">Mewah</TabsTrigger>
              <TabsTrigger value="economy">Ekonomis</TabsTrigger>
            </TabsList>
            
            <div className="bg-gray-50 p-4 mb-8 rounded-lg flex items-center text-sm">
              <Info className="h-5 w-5 text-automotive-600 mr-2 flex-shrink-0" />
              <p>
                <span className="font-medium">Rekomendasi AI:</span> Berdasarkan preferensi Anda, berikut adalah kecocokan teratas Anda dengan penilaian yang dipersonalisasi.
              </p>
            </div>
            
            {Object.keys(recommendations).map((key) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations[key].map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-automotive-600 hover:bg-automotive-700">
            Dapatkan Rekomendasi Personal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
