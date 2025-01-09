import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrganicFarmingDetails = () => {
  const { blogId } = useParams();

  const blogs = [
    {
      id: 1,
      title: "জৈব সার ব্যবহার",
      content: "রাসায়নিক সারের পরিবর্তে জৈব সার ব্যবহার করুন। জৈব সার মাটির উর্বরতা বাড়াতে সাহায্য করে।",
      image: "/organic-fertilizer.jpg",
    },
    {
      id: 2,
      title: "প্রাকৃতিক কীটনাশক",
      content: "প্রাকৃতিক উপাদান দিয়ে তৈরি কীটনাশক ব্যবহার করুন। এটি পরিবেশের জন্য ক্ষতিকর নয়।",
      image: "/natural-pesticide.jpg",
    },
    {
      id: 3,
      title: "ফসল আবর্তন",
      content: "মাটির উর্বরতা বজায় রাখতে ফসল আবর্তন করুন। বিভিন্ন ধরনের ফসল চাষ করলে মাটির পুষ্টি উপাদান বজায় থাকে।",
      image: "/crop-rotation.jpg",
    },
    {
      id: 4,
      title: "কম্পোস্ট তৈরি",
      content: "বাড়িতেই কম্পোস্ট তৈরি করে ব্যবহার করুন। কম্পোস্ট তৈরি করা সহজ এবং এটি মাটির জন্য খুব উপকারী।",
      image: "/compost.jpg",
    },
    {
      id: 5,
      title: "সবুজ সার",
      content: "সবুজ সার ব্যবহার করে মাটির উর্বরতা বাড়ান। সবুজ সার মাটির পুষ্টি উপাদান যোগ করে।",
      image: "/green-manure.jpg",
    },
    {
      id: 6,
      title: "জৈব বীজ",
      content: "জৈব পদ্ধতিতে উৎপাদিত বীজ ব্যবহার করুন। জৈব বীজ ব্যবহার করলে ভালো ফলন পাওয়া যায়।",
      image: "/organic-seeds.jpg",
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(blogId || ""));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-md mb-4 h-64 w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-primary">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{blog.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganicFarmingDetails;
