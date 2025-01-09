import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CreateCoursePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("অনুগ্রহ করে লগইন করুন");
        navigate("/auth");
        return;
      }

      const { error } = await supabase.from("courses").insert({
        title,
        description,
        video_url: videoUrl,
        user_id: user.id,
        status: "pending"
      });

      if (error) throw error;

      toast.success("কোর্স সফলভাবে জমা দেওয়া হয়েছে");
      navigate("/courses");
    } catch (error) {
      toast.error("কোর্স তৈরি করতে সমস্যা হয়েছে");
      console.error("Error creating course:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>নতুন কোর্স তৈরি করুন</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                কোর্সের নাম
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-2 border rounded-md"
                placeholder="কোর্সের নাম লিখুন"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                বিবরণ
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full p-2 border rounded-md h-32"
                placeholder="কোর্সের বিবরণ লিখুন"
              />
            </div>

            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                ভিডিও লিংক
              </label>
              <input
                id="videoUrl"
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                required
                className="w-full p-2 border rounded-md"
                placeholder="ভিডিও লিংক দিন"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "প্রক্রিয়াকরণ হচ্ছে..." : "কোর্স জমা দিন"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCoursePage;