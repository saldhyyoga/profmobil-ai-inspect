
import React from "react";
import { Car, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Car className="h-8 w-8 text-automotive-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ProfMobil <span className="text-automotive-600">AI</span></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-automotive-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-automotive-600 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-automotive-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <Button className="bg-automotive-600 hover:bg-automotive-700">Get Started</Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automotive-600 hover:bg-gray-100">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automotive-600 hover:bg-gray-100">How It Works</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automotive-600 hover:bg-gray-100">Pricing</a>
            <Button className="w-full mt-2 bg-automotive-600 hover:bg-automotive-700">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
