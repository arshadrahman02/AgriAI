import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Equipment = () => {
  const equipments = [
    {
      id: 1,
      name: "আধুনিক লাঙ্গল",
      description: "জমি চাষের জন্য আধুনিক লাঙ্গল ব্যবহার করুন। এটি সময় এবং শ্রম সাশ্রয় করে।",
      image: "/modern-plow.jpg",
      price: "৳15,000",
    },
    {
      id: 2,
      name: "বীজ বপন যন্ত্র",
      description: "বীজ বপনের জন্য আধুনিক যন্ত্র ব্যবহার করুন। এটি বীজ বপনের কাজকে সহজ করে।",
      image: "/seed-planter.jpg",
      price: "৳25,000",
    },
    {
      id: 3,
      name: "স্প্রে মেশিন",
      description: "কীটনাশক স্প্রে করার জন্য আধুনিক স্প্রে মেশিন ব্যবহার করুন। এটি ফসলের রোগ প্রতিরোধে সাহায্য করে।",
      image: "/sprayer.jpg",
      price: "৳10,000",
    },
    {
      id: 4,
      name: "ফসল কাটার যন্ত্র",
      description: "ফসল কাটার জন্য আধুনিক যন্ত্র ব্যবহার করুন। এটি ফসল কাটার কাজকে দ্রুত করে।",
      image: "/harvester.jpg",
      price: "৳50,000",
    },
    {
      id: 5,
      name: "সেচ পাম্প",
      description: "সেচের জন্য আধুনিক পাম্প ব্যবহার করুন। এটি সেচের কাজকে সহজ করে।",
      image: "/irrigation-pump.jpg",
      price: "৳12,000",
    },
    {
      id: 6,
      name: "মাল্টিটুল",
      description: "বিভিন্ন কাজের জন্য মাল্টিটুল ব্যবহার করুন। এটি কৃষি কাজে অনেক সুবিধা দেয়।",
      image: "/multitool.jpg",
      price: "৳5,000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-green-50 to-white text-foreground">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        কৃষি উপকরণ
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        কৃষি উপকরণ এবং যন্ত্রপাতি সম্পর্কে বিস্তারিত জানুন।
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipments.map((equipment) => (
          <Card
            key={equipment.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={equipment.image}
              alt={equipment.name}
              className="rounded-md mb-4 h-40 w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="text-primary">{equipment.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{equipment.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-primary">{equipment.price}</span>
                <Link to={`/services/equipment/${equipment.id}`} className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                  কিনুন
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
