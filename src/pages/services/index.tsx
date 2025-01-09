import { Link } from "react-router-dom";
import { Tractor, Sprout, LeafyGreen, ShoppingCart, Wrench, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    id: 1,
    title: "কৃষি প্রযুক্তি",
    description: "আধুনিক কৃষি প্রযুক্তি এবং পদ্ধতি সম্পর্কে জানুন",
    icon: Tractor,
    slug: "technology",
  },
  {
    id: 2,
    title: "ফসল রক্ষণাবেক্ষণ",
    description: "ফসল রক্ষণাবেক্ষণের গুরুত্বপূর্ণ টিপস",
    icon: Sprout,
    slug: "crop-care",
  },
  {
    id: 3,
    title: "জৈব কৃষি",
    description: "জৈব কৃষি পদ্ধতি এবং এর উপকারিতা",
    icon: LeafyGreen,
    slug: "organic",
  },
  {
    id: 4,
    title: "বাজার সংযোগ",
    description: "কৃষি পণ্যের বাজার সংযোগ এবং মূল্য নির্ধারণ",
    icon: ShoppingCart,
    slug: "market",
  },
  {
    id: 5,
    title: "কৃষি উপকরণ",
    description: "কৃষি উপকরণ এবং যন্ত্রপাতি সম্পর্কে তথ্য",
    icon: Wrench,
    slug: "equipment",
  },
  {
    id: 6,
    title: "কৃষি প্রশিক্ষণ",
    description: "কৃষি বিষয়ক প্রশিক্ষণ এবং কর্মশালা",
    icon: GraduationCap,
    slug: "training",
  },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">আমাদের সেবাসমূহ</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          কৃষি সম্পর্কিত বিভিন্ন বিষয়ে জ্ঞান এবং তথ্য জানতে নিচের বিভাগগুলি দেখুন
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {serviceCategories.map((category) => (
          <Link key={category.id} to={`/services/${category.slug}`}>
            <Button
              variant="outline"
              className="w-full h-auto p-6 flex flex-col items-center gap-4 hover:bg-primary hover:text-white transition-colors"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
