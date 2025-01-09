import { Leaf, Shield, Sprout, ShoppingCart, User, Briefcase } from "lucide-react";

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
              AI এর মাধ্যমে মাত্র কয়েক সেকেন্ডে ফসলের রোগ নির্ণয় করুন। আমাদের উন্নত অ্যালগরিদম ব্যবহার করে দ্রুত এবং নির্ভুল রোগ সনাক্তকরণ করুন।
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn delay-100">
            <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">সমাধান প্রস্তাবনা</h3>
            <p className="text-gray-600">
              বিশেষজ্ঞ পরামর্শ এবং সুনির্দিষ্ট সমাধান পান। আমাদের প্ল্যাটফর্ম আপনাকে ফসলের রোগ ও সমস্যার জন্য সঠিক সমাধান খুঁজে পেতে সাহায্য করবে।
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn delay-200">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Sprout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">স্মার্ট কৃষি</h3>
            <p className="text-gray-600">
              আধুনিক প্রযুক্তির মাধ্যমে কৃষি উন্নয়নে সহায়তা। আমরা স্মার্ট কৃষি প্রযুক্তি ব্যবহার করে ফসলের উৎপাদন বাড়াতে সাহায্য করি।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">ফসল ক্রয়-বিক্রয়</h3>
            <p className="text-gray-600">
              আমাদের প্ল্যাটফর্মের মাধ্যমে, কৃষকরা তাদের ফসল ক্রয়-বিক্রয় করতে পারে, ক্রেতারাও ন্যায্য মূল্য পায়। আমরা একটি নিরাপদ এবং নির্ভরযোগ্য বাজার তৈরি করি।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn delay-100">
            <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">বিশেষজ্ঞ সহায়তা</h3>
            <p className="text-gray-600">
              আমরা পেশাদার কৃষি বিশেষজ্ঞদের মাধ্যমে সহায়তা এবং সমর্থন প্রদান করি। আমাদের বিশেষজ্ঞরা আপনাকে সঠিক পরামর্শ দিতে প্রস্তুত।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fadeIn delay-200">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">ক্যারিয়ারের সুযোগ</h3>
            <p className="text-gray-600">
              আমরা আমাদের প্ল্যাটফর্মের মাধ্যমে ব্যক্তিদের তাদের কর্মজীবনকে সম্পূর্ণরূপে গড়ে তুলতে সহায়তা করি। আমাদের সাথে যোগ দিন এবং কৃষি খাতে আপনার কর্মজীবন শুরু করুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
