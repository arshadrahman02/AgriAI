import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CoursesPage = () => {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("status", "approved");
      
      if (error) {
        toast.error("কোর্স লোড করতে সমস্যা হয়েছে");
        throw error;
      }
      
      return data;
    },
  });

  if (isLoading) {
    return <div className="container mx-auto p-6">লোড হচ্ছে...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">কোর্সসমূহ</h1>
        <Link to="/courses/create">
          <Button>নতুন কোর্স তৈরি করুন</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{course.description}</p>
              <a
                href={course.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ভিডিও দেখুন
              </a>
            </CardContent>
          </Card>
        ))}

        {courses?.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            কোনো কোর্স নেই
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
