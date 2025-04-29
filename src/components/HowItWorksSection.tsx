
import { useState } from "react";
import { Car, Search, FileText, Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-white via-slate-50 to-automotive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-automotive-800 to-automotive-600">
            How ProfMobil AI Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Our streamlined process ensures accurate and comprehensive vehicle inspections
          </p>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {steps.map((step) => (
                <CarouselItem key={`mobile-${step.id}`}>
                  <div className="p-1">
                    <StepCard step={step} isActive={true} onClick={() => {}} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-1" />
              <CarouselNext className="static transform-none mx-1" />
            </div>
          </Carousel>
        </div>

        {/* Desktop View - Interactive Cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <StepCard 
              key={`desktop-${step.id}`}
              step={step} 
              isActive={activeStep === step.id}
              onClick={() => setActiveStep(step.id)}
            />
          ))}
        </div>

        {/* Journey Path Visualization */}
        <div className="hidden lg:flex justify-center items-center mt-12">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div 
                  className={cn(
                    "w-4 h-4 rounded-full cursor-pointer transition-all duration-300",
                    activeStep >= num 
                      ? "bg-automotive-600" 
                      : "bg-gray-300"
                  )}
                  onClick={() => setActiveStep(num)}
                />
                {num < 4 && (
                  <div className="flex items-center">
                    <ChevronRight 
                      className={cn(
                        "h-5 w-5 mx-1", 
                        activeStep > num 
                          ? "text-automotive-600" 
                          : "text-gray-300"
                      )} 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Step Card component for cleaner code
const StepCard = ({ step, isActive, onClick }) => {
  return (
    <div 
      className={cn(
        "relative cursor-pointer transition-all duration-500 border rounded-xl p-6 transform hover:scale-105",
        isActive 
          ? "border-automotive-600 bg-white shadow-lg shadow-automotive-100/50" 
          : "border-gray-200 bg-white/80 hover:border-automotive-300"
      )}
      onClick={onClick}
    >
      {/* Step Number */}
      <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
        <div className={cn(
          "rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300",
          isActive ? "bg-automotive-600 text-white" : "bg-gray-100 text-gray-600"
        )}>
          <span className="text-sm font-semibold">
            {step.id}
          </span>
        </div>
      </div>
      
      {/* Icon and Title */}
      <div className="flex flex-col items-center text-center mb-4">
        <div className={cn(
          "rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-500",
          isActive 
            ? "bg-gradient-to-br from-automotive-500 to-automotive-700 text-white" 
            : "bg-gray-100 text-gray-600"
        )}>
          {step.icon}
        </div>
        
        <h3 className={cn(
          "text-xl font-bold mb-2 transition-colors duration-300",
          isActive ? "text-automotive-700" : "text-gray-900"
        )}>
          {step.title}
        </h3>
        <p className="text-gray-600 mb-4">{step.description}</p>
      </div>
      
      {/* Sub Items */}
      <div className={cn(
        "space-y-2 bg-white p-4 rounded-lg transition-all duration-300",
        isActive ? "border border-gray-200 shadow-sm" : ""
      )}>
        {step.subItems.map((item) => (
          <div 
            key={item.id} 
            className={cn(
              "flex items-start transition-transform duration-300",
              isActive ? "transform hover:translate-x-1" : ""
            )}
          >
            <div className={cn(
              "min-w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs font-semibold transition-colors duration-300",
              isActive ? "bg-automotive-100 text-automotive-800" : "bg-gray-100 text-gray-500"
            )}>
              {item.id}
            </div>
            <p className={cn(
              "text-sm transition-colors duration-300",
              isActive ? "text-gray-800" : "text-gray-600"
            )}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
