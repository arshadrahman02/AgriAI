import { useState } from "react";
    import { Input } from "@/components/ui/input";
    import { Button } from "@/components/ui/button";
    import { Label } from "@/components/ui/label";
    import { Textarea } from "@/components/ui/textarea";
    import { toast } from "sonner";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

    interface Course {
      title: string;
      description: string;
      instructor: string;
    }

    const Course = () => {
      const [courses, setCourses] = useState<Course[]>([]);
      const [newCourse, setNewCourse] = useState<Course>({
        title: "",
        description: "",
        instructor: "",
      });

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewCourse((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newCourse.title && newCourse.description && newCourse.instructor) {
          setCourses((prev) => [...prev, newCourse]);
          setNewCourse({ title: "", description: "", instructor: "" });
          toast.success("কোর্স আপলোড করা হয়েছে!");
        } else {
          toast.error("অনুগ্রহ করে সব তথ্য পূরণ করুন!");
        }
      };

      return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-primary mb-8">
            কোর্স
          </h1>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <Label htmlFor="title">কোর্সের শিরোনাম</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={newCourse.title}
                  onChange={handleInputChange}
                  placeholder="কোর্সের শিরোনাম লিখুন"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">কোর্সের বিবরণ</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newCourse.description}
                  onChange={handleInputChange}
                  placeholder="কোর্সের বিবরণ লিখুন"
                  required
                />
              </div>
              <div>
                <Label htmlFor="instructor">শিক্ষকের নাম</Label>
                <Input
                  type="text"
                  id="instructor"
                  name="instructor"
                  value={newCourse.instructor}
                  onChange={handleInputChange}
                  placeholder="শিক্ষকের নাম লিখুন"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                কোর্স আপলোড করুন
              </Button>
            </form>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>শিক্ষক: {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default Course;
