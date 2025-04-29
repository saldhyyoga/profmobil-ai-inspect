
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import InspectionStandardsSection from '@/components/InspectionStandardsSection';
import CarValueCalculator from '@/components/CarValueCalculator';
import RecommendationSection from '@/components/RecommendationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <InspectionStandardsSection />
        <CarValueCalculator />
        <RecommendationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
