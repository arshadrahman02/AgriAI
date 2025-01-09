import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useAuth } from "@/context/auth-context";

const CreateCoursePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!user) {
      toast.error("আপনাকে লগইন করতে হবে");
      navigate("/auth");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from("courses").insert({
        title,
        description,
        video_url: videoUrl,
        status: "pending",
        user_id: user.id
      });

      if (error) throw error;

      toast.success("কোর্স সফলভাবে জমা দেওয়া হয়েছে");
      navigate("/courses");
    } catch (error) {
      toast.error("কোর্স জমা দিতে সমস্যা হয়েছে");
      console.error("Error creating course:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">নতুন কোর্স তৈরি করুন</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            কোর্সের শিরোনাম
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            বিবরণ
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
          />
        </div>

        <div>
          <label htmlFor="videoUrl" className="block text-sm font-medium mb-2">
            ভিডিও URL
          </label>
          <Input
            id="videoUrl"
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "জমা দেওয়া হচ্ছে..." : "কোর্স জমা দিন"}
        </Button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
