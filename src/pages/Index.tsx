
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import InspectionStandardsSection from '@/components/InspectionStandardsSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <InspectionStandardsSection />
        <PricingSection />
        {/* Kalkulator Nilai Mobil section temporarily commented out
        <CarValueCalculator />
        */}
        {/* Rekomendasi Mobil section temporarily commented out
        <RecommendationSection />
        */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
