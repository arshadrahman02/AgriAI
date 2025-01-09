import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrganicFarming = () => {
  const blogs = [
    {
      id: 1,
      title: "জৈব সার ব্যবহার",
      excerpt: "রাসায়নিক সারের পরিবর্তে জৈব সার ব্যবহার করুন।",
      image: "/organic-fertilizer.jpg",
    },
    {
      id: 2,
      title: "প্রাকৃতিক কীটনাশক",
      excerpt: "প্রাকৃতিক উপাদান দিয়ে তৈরি কীটনাশক ব্যবহার করুন।",
      image: "/natural-pesticide.jpg",
    },
    {
      id: 3,
      title: "ফসল আবর্তন",
      excerpt: "মাটির উর্বরতা বজায় রাখতে ফসল আবর্তন করুন।",
      image: "/crop-rotation.jpg",
    },
    {
      id: 4,
      title: "কম্পোস্ট তৈরি",
      excerpt: "বাড়িতেই কম্পোস্ট তৈরি করে ব্যবহার করুন।",
      image: "/compost.jpg",
    },
    {
      id: 5,
      title: "সবুজ সার",
      excerpt: "সবুজ সার ব্যবহার করে মাটির উর্বরতা বাড়ান।",
      image: "/green-manure.jpg",
    },
    {
      id: 6,
      title: "জৈব বীজ",
      excerpt: "জৈব পদ্ধতিতে উৎপাদিত বীজ ব্যবহার করুন।",
      image: "/organic-seeds.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-green-50 to-white text-foreground">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        জৈব কৃষি
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        জৈব কৃষি পদ্ধতি এবং এর উপকারিতা সম্পর্কে বিস্তারিত জানুন।
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-md mb-4 h-40 w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="text-primary">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <Link to={`/services/organic-farming/${blog.id}`} className="text-primary hover:text-primary/80">
                আরও পড়ুন →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrganicFarming;
