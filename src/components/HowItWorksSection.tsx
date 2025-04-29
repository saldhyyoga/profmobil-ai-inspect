
import { useState } from "react";
import { Car, Search, FileText, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      icon: <Car className="h-6 w-6" />,
      title: "Inspection Order",
      description: "Select your preferred location and schedule. Input your car details and confirm booking.",
      subItems: [
        { id: 1, text: "Choose inspection location & schedule" },
        { id: 2, text: "Enter car details (make, year, etc.)" },
        { id: 3, text: "Select payment method" },
        { id: 4, text: "Optional: Choose between on-site or remote inspection" }
      ]
    },
    {
      id: 2,
      icon: <Search className="h-6 w-6" />,
      title: "Field Inspection",
      description: "Our professional inspector conducts a thorough examination of your vehicle.",
      subItems: [
        { id: 1, text: "Physical inspection by certified inspector" },
        { id: 2, text: "Digital documentation via mobile app" },
        { id: 3, text: "Comprehensive checklist verification" },
        { id: 4, text: "Photo and video documentation" },
        { id: 5, text: "OBD scan and engine sound analysis" }
      ]
    },
    {
      id: 3,
      icon: <FileText className="h-6 w-6" />,
      title: "AI Analysis",
      description: "Our advanced AI processes the inspection data for accurate evaluation.",
      subItems: [
        { id: 1, text: "AI data processing and analysis" },
        { id: 2, text: "Comparison with extensive database" },
        { id: 3, text: "Car condition score calculation" },
        { id: 4, text: "Damage detection and assessment" },
        { id: 5, text: "Repair cost estimation" }
      ]
    },
    {
      id: 4,
      icon: <Check className="h-6 w-6" />,
      title: "Detailed Report",
      description: "Receive a comprehensive report with AI-powered insights.",
      subItems: [
        { id: 1, text: "AI diagnosis summary" },
        { id: 2, text: "Complete inspection checklist" },
        { id: 3, text: "Market value assessment" },
        { id: 4, text: "Purchase recommendations" },
        { id: 5, text: "ProfMobil Certification (if eligible)" }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How ProfMobil AI Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our streamlined process ensures accurate and comprehensive vehicle inspections
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className={cn(
                  "rounded-full w-8 h-8 flex items-center justify-center",
                  activeStep === step.id ? "bg-automotive-600 text-white" : "bg-gray-100 text-gray-600"
                )}>
                  <span className="text-sm font-semibold">
                    {step.id}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center mb-4">
                <div className={cn(
                  "rounded-full w-16 h-16 flex items-center justify-center mb-4",
                  activeStep === step.id ? "bg-automotive-600 text-white" : "bg-gray-100 text-gray-600"
                )}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
              </div>
              
              <div className={cn(
                "space-y-2 bg-white p-4 rounded-lg",
                activeStep === step.id ? "border border-gray-200" : ""
              )}>
                {step.subItems.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-automotive-100 text-automotive-600 flex items-center justify-center mr-2 text-xs font-semibold">
                      {item.id}
                    </div>
                    <p className="text-sm text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
