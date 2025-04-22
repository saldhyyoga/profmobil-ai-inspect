
import { Camera, Search, Check, FileCheck } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-automotive-100 p-3 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6 text-automotive-600" />,
      title: "AI Smart Inspection",
      description: "Our AI technology scans and detects physical damage, predicts potential issues, and provides a detailed analysis of the car's condition."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-automotive-600" />,
      title: "Digital Reports",
      description: "Access comprehensive digital inspection reports instantly via our app or web platform with detailed analysis and recommendations."
    },
    {
      icon: <Search className="h-6 w-6 text-automotive-600" />,
      title: "Market Value Calculation",
      description: "Get accurate market valuations based on AI analysis of the car's condition, market trends, and comprehensive data points."
    },
    {
      icon: <Check className="h-6 w-6 text-automotive-600" />,
      title: "Smart Recommendations",
      description: "Receive personalized car recommendations based on your preferences, budget, and inspection results powered by our AI."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI-Powered Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our cutting-edge technology provides comprehensive vehicle analysis and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
