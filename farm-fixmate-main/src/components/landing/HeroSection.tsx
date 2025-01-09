import { Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-green-50 to-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary mb-6 animate-fadeIn">
            স্মার্ট কৃষি সহায়ক
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fadeIn">
            AI-powered ফসলের রোগ নির্ণয় এবং সমাধান সিস্টেম
          </p>
          <button
            onClick={() => window.location.href = '/analyze'}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg 
                     transition-all transform hover:scale-105 animate-fadeIn"
          >
            শুরু করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;