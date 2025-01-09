import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CropCare = () => {
  const blogs = [
    {
      id: 1,
      title: "মাটির স্বাস্থ্য পরীক্ষা",
      excerpt: "মাটির স্বাস্থ্য পরীক্ষা করে সঠিক সার ব্যবহার করুন।",
      image: "/soil-test.jpg",
    },
    {
      id: 2,
      title: "রোগ প্রতিরোধ",
      excerpt: "ফসলের রোগ প্রতিরোধের জন্য সঠিক ব্যবস্থা নিন।",
      image: "/disease-control.jpg",
    },
    {
      id: 3,
      title: "পোকা নিয়ন্ত্রণ",
      excerpt: "ফসলের পোকা নিয়ন্ত্রণের জন্য জৈব কীটনাশক ব্যবহার করুন।",
      image: "/pest-control.jpg",
    },
    {
      id: 4,
      title: "আগাছা দমন",
      excerpt: "আগাছা দমনের জন্য সঠিক পদ্ধতি অনুসরণ করুন।",
      image: "/weed-control.jpg",
    },
    {
      id: 5,
      title: "সঠিক সেচ",
      excerpt: "ফসলের জন্য সঠিক সময়ে এবং পরিমাণে সেচ দিন।",
      image: "/irrigation-system.jpg",
    },
    {
      id: 6,
      title: "পর্যাপ্ত আলো",
      excerpt: "ফসলের জন্য পর্যাপ্ত আলোর ব্যবস্থা করুন।",
      image: "/sunlight.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-green-50 to-white text-foreground">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        ফসল রক্ষণাবেক্ষণ
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        ফসল রক্ষণাবেক্ষণের গুরুত্বপূর্ণ টিপস সম্পর্কে বিস্তারিত জানুন।
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
              <Link to={`/services/crop-care/${blog.id}`} className="text-primary hover:text-primary/80">
                আরও পড়ুন →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CropCare;
