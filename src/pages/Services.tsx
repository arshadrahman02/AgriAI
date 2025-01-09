import { Leaf, Settings, ShoppingCart, Book, Users, Wrench, Sprout } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: "কৃষি প্রযুক্তি",
      description: "আধুনিক কৃষি প্রযুক্তি এবং পদ্ধতি সম্পর্কে জানুন",
      icon: Leaf,
      path: "/services/technology",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "ফসল রক্ষণাবেক্ষণ",
      description: "ফসল রক্ষণাবেক্ষণের গুরুত্বপূর্ণ টিপস",
      icon: Sprout,
      path: "/services/crop-care",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "জৈব কৃষি",
      description: "জৈব কৃষি পদ্ধতি এবং এর উপকারিতা",
      icon: Leaf,
      path: "/services/organic-farming",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "বাজার সংযোগ",
      description: "কৃষি পণ্যের বাজার সংযোগ এবং মূল্য নির্ধারণ",
      icon: ShoppingCart,
      path: "/services/market-access",
      color: "bg-red-100 text-red-800",
    },
    {
      title: "কৃষি উপকরণ",
      description: "কৃষি উপকরণ এবং যন্ত্রপাতি সম্পর্কে তথ্য",
      icon: Wrench,
      path: "/services/equipment",
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "কৃষি প্রশিক্ষণ",
      description: "কৃষি বিষয়ক প্রশিক্ষণ এবং কর্মশালা",
      icon: Book,
      path: "/services/training",
      color: "bg-pink-100 text-pink-800",
    },
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-green-50 to-white text-foreground">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        আমাদের সেবাসমূহ
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        কৃষি সম্পর্কিত বিভিন্ন বিষয়ে জ্ঞান এবং তথ্য জানতে নিচের বিভাগগুলি দেখুন
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((category, index) => (
          <Card
            key={index}
            className={`hover:shadow-xl transition-shadow cursor-pointer ${category.color}`}
            onClick={() => handleCardClick(category.path)}
          >
            <CardHeader className="flex flex-row items-center">
              <category.icon className="w-6 h-6 text-primary mr-2" />
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{category.description}</p>
              <button className="mt-4 text-primary hover:text-primary/80">
                আরও জানুন →
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
