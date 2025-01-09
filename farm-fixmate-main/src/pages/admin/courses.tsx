import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Check, X } from "lucide-react";

const AdminCoursesPage = () => {
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["pending-courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("status", "pending");
      
      if (error) {
        toast.error("কোর্স লোড করতে সমস্যা হয়েছে");
        throw error;
      }
      
      return data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: "approved" | "rejected" }) => {
      const { error } = await supabase
        .from("courses")
        .update({ status })
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pending-courses"] });
      toast.success("কোর্সের স্ট্যাটাস আপডেট করা হয়েছে");
    },
    onError: () => {
      toast.error("স্ট্যাটাস আপডেট করতে সমস্যা হয়েছে");
    },
  });

  if (isLoading) {
    return <div className="container mx-auto p-6">লোড হচ্ছে...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">অনুমোদনের জন্য অপেক্ষমান কোর্সসমূহ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">{course.description}</p>
              <a
                href={course.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline block mb-4"
              >
                ভিডিও দেখুন
              </a>
              
              <div className="flex gap-4">
                <Button
                  onClick={() => updateStatus.mutate({ id: course.id, status: "approved" })}
                  variant="default"
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  অনুমোদন করুন
                </Button>
                <Button
                  onClick={() => updateStatus.mutate({ id: course.id, status: "rejected" })}
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  বাতিল করুন
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {courses?.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            কোনো অপেক্ষমান কোর্স নেই
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminCoursesPage;