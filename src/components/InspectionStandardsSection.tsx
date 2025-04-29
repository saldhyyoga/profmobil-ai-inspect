
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, FileText, Wrench, Engine } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface StandardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StandardCard = ({ icon, title, description }: StandardCardProps) => (
  <Card className="h-full transition-all duration-300 hover:shadow-md border-l-4 border-l-automotive-600">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div className="bg-automotive-100 rounded-full p-2 text-automotive-600">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600 text-sm">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const InspectionStandardsSection = () => {
  const standards = [
    {
      icon: <Car className="h-5 w-5" />,
      title: "Exterior",
      description: "Analysis of body panels, paint, and frame structure for the detection of collision marks, rust, or dents."
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Interior",
      description: "Comprehensive cabin inspection - trim, dashboard, electronic features, and indications of flood damage or hidden damage."
    },
    {
      icon: <Engine className="h-5 w-5" />,
      title: "Engine & Transmission",
      description: "Evaluation of mechanical components - engine, transmission, brakes, suspension."
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Documents & History",
      description: "Verification of document completeness, service history, and vehicle data."
    }
  ];

  return (
    <section id="standards" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            ProfMobil AI Inspection Standards
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            150+ Inspection Points with Artificial Intelligence for Complete & Accurate Results
          </p>
          <div className="flex justify-center mt-6">
            <Separator className="w-24 bg-automotive-600 h-1 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <StandardCard
              key={index}
              icon={standard.icon}
              title={standard.title}
              description={standard.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspectionStandardsSection;
