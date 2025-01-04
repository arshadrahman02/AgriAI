import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { Camera, Search, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartClick = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
        navigate('/sign-up');
        return;
      }

      if (data?.session?.user) {
        navigate('/analyze');
      } else {
        navigate('/sign-up');
      }
    } catch (error) {
      console.error("An error occurred:", error);
      navigate('/sign-up');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 mt-8 md:mt-0">
          <h1 className="text-6xl font-bold text-primary mb-8 animate-fadeIn">
            স্মার্ট কৃষি সহায়ক
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fadeIn">
            AI-powered ফসলের রোগ নির্ণয় এবং সমাধান সিস্টেম
          </p>
          <button
            onClick={handleStartClick}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-lg 
                     transition-all transform hover:scale-105 animate-fadeIn text-xl"
          >
            শুরু করুন
          </button>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            কিভাবে কাজ করে
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <p className="text-gray-700 text-lg">
                ক্ষতিগ্রস্ত ফসলের ছবি তুলুন
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-gray-700 text-lg">
                AI দ্বারা বিশ্লেষণ করুন
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <p className="text-gray-700 text-lg">
                তাৎক্ষণিক সমাধান পান
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
