import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CropCareDetails = () => {
  const { blogId } = useParams();

  const blogs = [
    {
      id: 1,
      title: "মাটির স্বাস্থ্য পরীক্ষা",
      content: "মাটির স্বাস্থ্য পরীক্ষা করে সঠিক সার ব্যবহার করুন। নিয়মিত মাটির পরীক্ষা করলে ফসলের জন্য প্রয়োজনীয় পুষ্টি উপাদান জানা যায়।",
      image: "/soil-test.jpg",
    },
    {
      id: 2,
      title: "রোগ প্রতিরোধ",
      content: "ফসলের রোগ প্রতিরোধের জন্য সঠিক ব্যবস্থা নিন। রোগ প্রতিরোধের জন্য নিয়মিত পর্যবেক্ষণ এবং সঠিক কীটনাশক ব্যবহার করুন।",
      image: "/disease-control.jpg",
    },
    {
      id: 3,
      title: "পোকা নিয়ন্ত্রণ",
      content: "ফসলের পোকা নিয়ন্ত্রণের জন্য জৈব কীটনাশক ব্যবহার করুন। পোকা নিয়ন্ত্রণের জন্য নিয়মিত পর্যবেক্ষণ এবং সঠিক কীটনাশক ব্যবহার করুন।",
      image: "/pest-control.jpg",
    },
    {
      id: 4,
      title: "আগাছা দমন",
      content: "আগাছা দমনের জন্য সঠিক পদ্ধতি অনুসরণ করুন। আগাছা দমনের জন্য নিয়মিত নিড়ানি এবং আগাছানাশক ব্যবহার করুন।",
      image: "/weed-control.jpg",
    },
    {
      id: 5,
      title: "সঠিক সেচ",
      content: "ফসলের জন্য সঠিক সময়ে এবং পরিমাণে সেচ দিন। সঠিক সময়ে সেচ দিলে ফসলের ফলন ভালো হয়।",
      image: "/irrigation-system.jpg",
    },
    {
      id: 6,
      title: "পর্যাপ্ত আলো",
      content: "ফসলের জন্য পর্যাপ্ত আলোর ব্যবস্থা করুন। পর্যাপ্ত আলো পেলে ফসলের বৃদ্ধি ভালো হয়।",
      image: "/sunlight.jpg",
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

export default CropCareDetails;
