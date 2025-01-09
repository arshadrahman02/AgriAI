import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();

      if (error) {
        console.error("Error checking admin status:", error);
        return;
      }

      setIsAdmin(!!data);
    } catch (error) {
      console.error("Error checking admin status:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("সফলভাবে লগআউট হয়েছে");
      navigate("/");
    } catch (error) {
      toast.error("লগআউট করতে ব্যর্থ হয়েছে");
    }
  };

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "সেবাসমূহ", path: "/services" },
    { name: "কোর্সসমূহ", path: "/courses" },
    { name: "যোগাযোগ", path: "/contact" },
    { name: "ক্যারিয়ার", path: "/careers" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">ফার্মফিক্সমেট</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className="text-base"
                >
                  {link.name}
                </Button>
              </Link>
            ))}

            {isAdmin && (
              <Link to="/admin/dashboard">
                <Button variant="outline">অ্যাডমিন প্যানেল</Button>
              </Link>
            )}

            {user ? (
              <>
                <Link to="/analyze">
                  <Button>শুরু করুন</Button>
                </Link>
                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  লগআউট
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button>
                  <LogIn className="mr-2 h-4 w-4" />
                  লগইন
                </Button>
              </Link>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {isAdmin && (
              <Link
                to="/admin/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                অ্যাডমিন প্যানেল
              </Link>
            )}

            {user ? (
              <>
                <Link
                  to="/analyze"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
                  onClick={() => setIsOpen(false)}
                >
                  শুরু করুন
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10"
                >
                  লগআউট
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
                onClick={() => setIsOpen(false)}
              >
                লগইন
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;