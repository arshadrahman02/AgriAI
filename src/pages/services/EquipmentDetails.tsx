import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EquipmentDetails = () => {
  const { equipmentId } = useParams();

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

  const equipment = equipments.find((equipment) => equipment.id === parseInt(equipmentId || ""));

  if (!equipment) {
    return <div>Equipment not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="rounded-md mb-4 h-64 w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-primary">{equipment.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{equipment.description}</p>
          <p className="text-lg font-medium text-primary mb-2">
            মূল্য: {equipment.price}
          </p>
          <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
            কিনুন
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EquipmentDetails;
