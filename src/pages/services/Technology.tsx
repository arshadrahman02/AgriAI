import { ShoppingCart } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      name: "কৃষি ড্রোন",
      description:
        "ফসলের পর্যবেক্ষণ, স্প্রে করা এবং ডেটা সংগ্রহের জন্য ড্রোন ব্যবহার করুন।",
      image: "/public/Screenshot 2025-01-09 225613.png",
      price: "প্রি-অর্ডার",
    },
    {
      name: "স্মার্ট সেন্সর",
      description:
        "মাটির আর্দ্রতা, তাপমাত্রা এবং পুষ্টির মাত্রা পরিমাপের জন্য সেন্সর ব্যবহার করুন।",
      image: "/public/Screenshot 2025-01-09 225918.png",
      price: "প্রি-অর্ডার",
    },
    {
      name: "স্বয়ংক্রিয় সেচ",
      description:
        "সময় এবং প্রয়োজন অনুযায়ী স্বয়ংক্রিয়ভাবে জল সরবরাহ করুন।",
      image: "/public/Screenshot 2025-01-09 230124.png",
      price: "প্রি-অর্ডার",
    },
    {
      name: "GPS ট্র্যাকিং",
      description: "ফসলের অবস্থান এবং গতিবিধি ট্র্যাক করুন।",
      image: "/gps.jpg",
      price: "প্রি-অর্ডার",
    },
    {
      name: "রোবোটিক হার্ভেস্টার",
      description:
        "স্বয়ংক্রিয়ভাবে ফসল কাটার জন্য রোবোটিক হার্ভেস্টার ব্যবহার করুন।",
      image: "/harvester.jpg",
      price: "প্রি-অর্ডার",
    },
    {
      name: "ভার্টিক্যাল ফার্মিং সিস্টেম",
      description:
        "কম জায়গায় উল্লম্বভাবে ফসল ফলানোর জন্য এই প্রযুক্তি ব্যবহার করুন।",
      image: "/vertical-farm.jpg",
      price: "প্রি-অর্ডার",
    },
    {
      name: "বায়োটেকনোলজি",
      description: "ফসলের উন্নত জাত উদ্ভাবনে বায়োটেকনোলজি ব্যবহার করুন।",
      image: "/biotech.jpg",
      price: "প্রি-অর্ডার",
    },
    {
      name: "ওয়েদার স্টেশন",
      description: "স্থানীয় আবহাওয়ার তথ্য জানতে ওয়েদার স্টেশন ব্যবহার করুন।",
      image: "/weather-station.jpg",
      price: "প্রি-অর্ডার",
    },
    {
      name: "সোলার পাম্প",
      description: "সৌর শক্তি ব্যবহার করে সেচের জন্য পাম্প চালান।",
      image: "/solar-pump.jpg",
      price: "প্রি-অর্ডার",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-green-50 to-white text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">কৃষি প্রযুক্তি</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          আধুনিক কৃষি প্রযুক্তি এবং পদ্ধতি সম্পর্কে বিস্তারিত জানুন।
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="rounded-md mb-4 h-40 w-full object-cover"
            />
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-semibold">{tech.name}</h2>
            </div>
            <p className="text-gray-700 mb-4">{tech.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-primary">
                {tech.price}
              </span>
              <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                কিনুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
