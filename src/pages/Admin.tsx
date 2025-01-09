import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import UserManagement from "./admin/users";
import ContentManagement from "./admin/content";
import CourseManagement from "./admin/courses";
import Analytics from "./admin/analytics";
import Settings from "./admin/settings";
import SystemLogs from "./admin/logs";


const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const checkAdmin = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Error fetching session:", error);
          navigate("/sign-in");
          return;
        }

        if (data?.session?.user) {
          // Simple admin check based on email
          const adminEmails = ["arshadrahman2122@gmail.com"];
          setIsAdmin(adminEmails.includes(data.session.user.email));
        } else {
          navigate("/sign-in");
        }
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [navigate]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Access Denied
        </h1>
        <p className="text-gray-600 mb-8">
          You do not have permission to view this page.
        </p>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </div>
    );
  }

  const adminLinks = [
    {
      title: "User Management",
      description: "Manage user accounts and permissions.",
      path: "/admin/users",
      component: UserManagement,
    },
    {
      title: "Content Management",
      description: "Manage content on the website.",
      path: "/admin/content",
      component: ContentManagement,
    },
    {
      title: "Course Management",
      description: "Manage courses on the website.",
      path: "/admin/courses",
      component: CourseManagement,
    },
    {
      title: "Analytics",
      description: "View website analytics and reports.",
      path: "/admin/analytics",
      component: Analytics,
    },
    {
      title: "Settings",
      description: "Configure website settings.",
      path: "/admin/settings",
      component: Settings,
    },
    {
      title: "System Logs",
      description: "View system logs and errors.",
      path: "/admin/logs",
      component: SystemLogs,
    },
  ];

  const currentComponent = adminLinks.find((link) => link.path === params.section)?.component;

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-sky-100 to-teal-100">
      {currentComponent ? (
        <currentComponent />
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center text-primary mb-8">
            Admin Panel
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Welcome to the admin panel. Here you can manage the application.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminLinks.map((link, index) => (
              <Link to={`${link.path}`} key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <span className={`text-primary text-2xl mr-2 ${link.icon}`}>
                    {/* Add icons here */}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {link.title}
                  </h2>
                </div>
                <p className="text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
