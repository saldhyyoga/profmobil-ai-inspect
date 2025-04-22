
import { useState } from "react";
import { Camera, FileCheck, Car, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      icon: <Camera className="h-6 w-6" />,
      title: "Scan Vehicle",
      description: "Our AI analyzes the vehicle through comprehensive physical inspection using advanced computer vision technology",
      detail: "Our system uses multiple AI-powered cameras to scan the entire vehicle from various angles, detecting even the smallest imperfections, scratches, dents, and potential problem areas."
    },
    {
      id: 2,
      icon: <FileCheck className="h-6 w-6" />,
      title: "Generate Report",
      description: "Instantly receive a detailed digital report with condition assessment and specific findings",
      detail: "The AI processes all scan data to generate a comprehensive report that includes damage detection, condition scoring, repair recommendations, and cost estimates - all delivered to your mobile device or computer."
    },
    {
      id: 3,
      icon: <Car className="h-6 w-6" />,
      title: "Market Valuation",
      description: "Get an accurate market value based on vehicle condition, features, and current market data",
      detail: "Our AI factors in the inspection results along with market trends, vehicle history, and regional pricing data to provide you with the most accurate valuation possible for informed buying or selling decisions."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our AI-powered inspection process is quick, easy and comprehensive.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={cn(
                "relative cursor-pointer transition-all duration-300 border rounded-xl p-6",
                activeStep === step.id 
                  ? "border-automotive-600 bg-automotive-50 shadow-md" 
                  : "border-gray-200 bg-white hover:border-automotive-300"
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                <span className={cn(
                  "text-sm font-semibold",
                  activeStep === step.id ? "text-automotive-600" : "text-gray-500"
                )}>
                  {step.id}
                </span>
              </div>
              
              <div className={cn(
                "rounded-full w-12 h-12 flex items-center justify-center mb-4",
                activeStep === step.id ? "bg-automotive-600 text-white" : "bg-gray-100 text-gray-600"
              )}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 mb-4">{step.description}</p>
              
              {activeStep === step.id && (
                <div className="mt-4 text-sm text-gray-600 bg-white p-4 rounded-lg border border-gray-200">
                  {step.detail}
                </div>
              )}

              {activeStep !== step.id && (
                <button 
                  onClick={() => setActiveStep(step.id)}
                  className="mt-2 inline-flex items-center text-sm font-medium text-automotive-600"
                >
                  Learn more 
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
