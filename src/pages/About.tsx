import { Leaf } from "lucide-react";

const About = () => {
  const blogs = [
    {
      title: "টেকসই কৃষি পদ্ধতি",
      description: "পরিবেশ সুরক্ষার পাশাপাশি ফসলের উৎপাদন বাড়াতে পরিবেশবান্ধব কৃষি পদ্ধতি সম্পর্কে জানুন।",
      icon: Leaf,
    },
    {
      title: "ফসলের রোগ প্রতিরোধ",
      description: "ফসলের ফলন প্রভাবিত হওয়ার আগেই সাধারণ রোগ সনাক্তকরণ এবং প্রতিরোধের জন্য গুরুত্বপূর্ণ পরামর্শ।",
      icon: Leaf,
    },
    {
      title: "স্মার্ট সেচ কৌশল",
      description: "সম্পদ সংরক্ষণ এবং ফসলের স্বাস্থ্য উন্নত করতে পানি ব্যবস্থাপনার আধুনিক পদ্ধতি।",
      icon: Leaf,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        কৃষি সম্পর্কিত তথ্য
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <blog.icon className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-xl font-semibold">{blog.title}</h2>
            </div>
            <p className="text-gray-600">{blog.description}</p>
            <button className="mt-4 text-primary hover:text-primary/80">
              আরও পড়ুন →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
