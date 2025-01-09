import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, BookOpen, CheckSquare } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .single();

      if (!roleData) {
        navigate("/");
      }
    };

    checkAdminStatus();
  }, [navigate]);

  const stats = [
    {
      title: "মোট কোর্স",
      value: "২৫",
      icon: BookOpen,
      color: "text-blue-600",
      link: "/admin/courses"
    },
    {
      title: "অপেক্ষমান কোর্স",
      value: "৮",
      icon: CheckSquare,
      color: "text-yellow-600",
      link: "/admin/courses"
    },
    {
      title: "মোট ব্যবহারকারী",
      value: "১২০",
      icon: Users,
      color: "text-green-600",
      link: "#"
    },
    {
      title: "মোট বিশ্লেষণ",
      value: "৩৫০",
      icon: BarChart,
      color: "text-purple-600",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">অ্যাডমিন ড্যাশবোর্ড</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <Button
                variant="ghost"
                className="mt-4 w-full justify-start"
                onClick={() => stat.link && navigate(stat.link)}
              >
                বিস্তারিত দেখুন
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>সাম্প্রতিক কার্যক্রম</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span>নতুন কোর্স যোগ করা হয়েছে</span>
                <span className="text-sm text-muted-foreground">১০ মিনিট আগে</span>
              </li>
              <li className="flex items-center justify-between">
                <span>কোর্স অনুমোদন করা হয়েছে</span>
                <span className="text-sm text-muted-foreground">৩০ মিনিট আগে</span>
              </li>
              <li className="flex items-center justify-between">
                <span>নতুন ব্যবহারকারী যোগ হয়েছে</span>
                <span className="text-sm text-muted-foreground">১ ঘন্টা আগে</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>দ্রুত লিঙ্ক</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => navigate("/admin/courses")}>
              কোর্স ব্যবস্থাপনা
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              মূল পেইজ
            </Button>
            <Button variant="outline" onClick={() => navigate("/courses/create")}>
              নতুন কোর্স
            </Button>
            <Button variant="outline" onClick={() => navigate("/analyze")}>
              ফসল বিশ্লেষণ
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;