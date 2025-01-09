import { Leaf, Shield, Sprout } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">আমাদের বৈশিষ্ট্য</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">দ্রুত রোগ নির্ণয়</h3>
            <p className="text-gray-600">
              AI এর মাধ্যমে মাত্র কয়েক সেকেন্ডে ফসলের রোগ নির্ণয় করুন
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn delay-100">
            <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">সমাধান প্রস্তাবনা</h3>
            <p className="text-gray-600">
              বিশেষজ্ঞ পরামর্শ এবং সুনির্দিষ্ট সমাধান পান
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn delay-200">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Sprout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">স্মার্ট কৃষি</h3>
            <p className="text-gray-600">
              আধুনিক প্রযুক্তির মাধ্যমে কৃষি উন্নয়নে সহায়তা
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;