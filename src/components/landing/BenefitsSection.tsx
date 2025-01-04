import { Leaf } from "lucide-react";

const BenefitsSection = () => {
  const technologies = [
    {
      name: "কৃষি ড্রোন",
      description: "ফসলের পর্যবেক্ষণ, স্প্রে করা এবং ডেটা সংগ্রহের জন্য ড্রোন ব্যবহার করুন।",
      image: "/drone.jpg",
    },
    {
      name: "স্মার্ট সেন্সর",
      description: "মাটির আর্দ্রতা, তাপমাত্রা এবং পুষ্টির মাত্রা পরিমাপের জন্য সেন্সর ব্যবহার করুন।",
      image: "/sensor.jpg",
    },
    {
      name: "স্বয়ংক্রিয় সেচ",
      description: "সময় এবং প্রয়োজন অনুযায়ী স্বয়ংক্রিয়ভাবে জল সরবরাহ করুন।",
      image: "/irrigation.jpg",
    },
    {
      name: "AI ভিত্তিক রোগ নির্ণয়",
      description: "কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে ফসলের রোগ দ্রুত সনাক্ত করুন।",
      image: "/ai.jpg",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            আধুনিক কৃষি প্রযুক্তি
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
