
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const CarValueCalculator = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("2018");
  const [mileage, setMileage] = useState(50000);
  const [condition, setCondition] = useState("good");
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateValue = () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple mock calculation - would be replaced with actual API call
      let baseValue = 15000;
      
      // Adjust for year
      const yearValue = ((2023 - parseInt(year)) * 1000);
      
      // Adjust for mileage (rough estimate: $0.10 per mile)
      const mileageValue = mileage * 0.1;
      
      // Adjust for condition
      const conditionMultiplier = 
        condition === "excellent" ? 1.1 :
        condition === "good" ? 1 :
        condition === "fair" ? 0.8 : 0.6;
      
      const calculatedValue = (baseValue - yearValue - mileageValue) * conditionMultiplier;
      
      // Ensure minimum value
      setEstimatedValue(Math.max(calculatedValue, 2000));
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Kalkulator Nilai Mobil
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Dapatkan estimasi nilai pasar mobil Anda secara instan dengan teknologi AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Estimator Nilai</CardTitle>
                <CardDescription>
                  Masukkan detail kendaraan Anda untuk penilaian pasar berbasis AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="make">Merek</Label>
                    <Select 
                      value={make} 
                      onValueChange={setMake}
                    >
                      <SelectTrigger id="make">
                        <SelectValue placeholder="Pilih merek" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                        <SelectItem value="mercedes">Mercedes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Select 
                      value={model} 
                      onValueChange={setModel}
                    >
                      <SelectTrigger id="model">
                        <SelectValue placeholder="Pilih model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corolla">Corolla</SelectItem>
                        <SelectItem value="camry">Camry</SelectItem>
                        <SelectItem value="civic">Civic</SelectItem>
                        <SelectItem value="accord">Accord</SelectItem>
                        <SelectItem value="focus">Focus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Tahun</Label>
                  <Select 
                    value={year} 
                    onValueChange={setYear}
                  >
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Pilih tahun" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => 2023 - i).map((y) => (
                        <SelectItem key={y} value={y.toString()}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="mileage">Kilometer</Label>
                    <span className="text-sm text-gray-500">{mileage.toLocaleString()} km</span>
                  </div>
                  <Slider 
                    id="mileage"
                    min={0} 
                    max={150000} 
                    step={1000} 
                    value={[mileage]} 
                    onValueChange={(vals) => setMileage(vals[0])} 
                    className="mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Kondisi</Label>
                  <Select 
                    value={condition} 
                    onValueChange={setCondition}
                  >
                    <SelectTrigger id="condition">
                      <SelectValue placeholder="Pilih kondisi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Sangat Baik</SelectItem>
                      <SelectItem value="good">Baik</SelectItem>
                      <SelectItem value="fair">Cukup Baik</SelectItem>
                      <SelectItem value="poor">Kurang Baik</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={calculateValue} 
                  className="w-full bg-automotive-600 hover:bg-automotive-700"
                  disabled={loading || !make || !model}
                >
                  {loading ? "Menghitung..." : "Hitung Nilai"}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 w-full max-w-md">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Estimasi Nilai</h3>
                <p className="text-sm text-gray-500 mb-6">Berdasarkan analisis pasar AI dan kondisi</p>
                
                {estimatedValue ? (
                  <div className="space-y-4">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute -inset-4">
                        <div className="w-full h-full bg-automotive-100 opacity-50 rounded-full blur-xl"></div>
                      </div>
                      <span className="relative text-5xl font-bold text-automotive-700">
                        Rp{estimatedValue.toLocaleString()}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mt-4">
                      Estimasi ini didasarkan pada kendaraan serupa di area Anda dengan fitur dan kondisi yang sebanding.
                    </p>
                    
                    <Button variant="outline" className="mt-6 border-automotive-600 text-automotive-600 hover:bg-automotive-50">
                      Dapatkan Laporan Lengkap
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-gray-500">Masukkan detail kendaraan dan hitung untuk melihat estimasi nilai</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarValueCalculator;
