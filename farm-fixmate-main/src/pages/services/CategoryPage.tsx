import { useParams } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "আধুনিক কৃষি প্রযুক্তির ব্যবহার",
    excerpt: "আধুনিক কৃষি প্রযুক্তি কীভাবে ফসলের উৎপাদন বাড়াতে সাহায্য করে তা জানুন",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "technology",
  },
  {
    id: 2,
    title: "জৈব সার তৈরির পদ্ধতি",
    excerpt: "বাড়িতে জৈব সার তৈরির সহজ পদ্ধতি এবং এর ব্যবহার সম্পর্কে বিস্তারিত",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "organic",
  },
  {
    id: 3,
    title: "ফসলের রোগ প্রতিরোধ",
    excerpt: "ফসলের বিভিন্ন রোগ এবং তার প্রতিরোধের উপায় সম্পর্কে জানুন",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "crop-care",
  },
  {
    id: 4,
    title: "কৃষি পণ্যের বাজার মূল্য",
    excerpt: "বর্তমান বাজারে কৃষি পণ্যের মূল্য এবং বিক্রয়ের কৌশল",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "market",
  },
  {
    id: 5,
    title: "আধুনিক কৃষি যন্ত্রপাতি",
    excerpt: "কৃষি কাজে ব্যবহৃত আধুনিক যন্ত্রপাতি সম্পর্কে বিস্তারিত তথ্য",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "equipment",
  },
  {
    id: 6,
    title: "স্মার্ট ইরিগেশন সিস্টেম",
    excerpt: "স্মার্ট সেচ ব্যবস্থা এবং এর সুবিধা সম্পর্কে জানুন",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "technology",
  },
  {
    id: 7,
    title: "জৈব কীটনাশক",
    excerpt: "প্রাকৃতিক উপায়ে কীটপতঙ্গ নিয়ন্ত্রণের পদ্ধতি",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "organic",
  },
  {
    id: 8,
    title: "ফসল সংরক্ষণ পদ্ধতি",
    excerpt: "ফসল সংরক্ষণের আধুনিক ও পরম্পরাগত পদ্ধতি",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "crop-care",
  },
  {
    id: 9,
    title: "ডিজিটাল মার্কেটিং",
    excerpt: "কৃষি পণ্যের অনলাইন বিপণন কৌশল",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "market",
  },
  {
    id: 10,
    title: "কৃষি যন্ত্রের রক্ষণাবেক্ষণ",
    excerpt: "কৃষি যন্ত্রপাতির যত্ন ও রক্ষণাবেক্ষণ পদ্ধতি",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "equipment",
  },
  {
    id: 11,
    title: "অনলাইন কৃষি প্রশিক্ষণ কোর্স",
    excerpt: "ঘরে বসে অনলাইনে কৃষি বিষয়ক প্রশিক্ষণ নিন",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "training",
  },
  {
    id: 12,
    title: "আধুনিক কৃষি প্রযুক্তি শিক্ষা",
    excerpt: "নতুন প্রযুক্তি ব্যবহারের মাধ্যমে কৃষি উন্নয়ন",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    category: "training",
  },
  {
    id: 13,
    title: "কৃষক প্রশিক্ষণ কর্মশালা",
    excerpt: "সরাসরি প্রশিক্ষকের সাথে কৃষি বিষয়ক জ্ঞান আদান-প্রদান",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "training",
  },
  {
    id: 14,
    title: "ডিজিটাল কৃষি শিক্ষা",
    excerpt: "স্মার্টফোন ও কম্পিউটার ব্যবহার করে কৃষি শিক্ষা",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "training",
  },
  {
    id: 15,
    title: "বিশেষজ্ঞ দ্বারা প্রশিক্ষণ",
    excerpt: "অভিজ্ঞ কৃষি বিশেষজ্ঞদের দ্বারা প্রশিক্ষণ সেশন",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    category: "training",
  }
];

const getCategoryTitle = (category: string | undefined) => {
  switch (category) {
    case "technology":
      return "কৃষি প্রযুক্তি";
    case "crop-care":
      return "ফসল রক্ষণাবেক্ষণ";
    case "organic":
      return "জৈব কৃষি";
    case "market":
      return "বাজার সংযোগ";
    case "equipment":
      return "কৃষি উপকরণ";
    case "training":
      return "কৃষি প্রশিক্ষণ";
    default:
      return "";
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryPosts = blogPosts.filter((post) => post.category === category);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {getCategoryTitle(category)}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categoryPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
