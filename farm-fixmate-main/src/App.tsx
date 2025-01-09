import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./integrations/supabase/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Buy from "./pages/services/Buy";
import Sell from "./pages/services/Sell";
import ServicesPage from "./pages/services";
import CategoryPage from "./pages/services/CategoryPage";
import AuthPage from "./pages/Auth";
import CoursesPage from "./pages/courses";
import CreateCoursePage from "./pages/courses/create";
import AdminCoursesPage from "./pages/admin/courses";
import AdminDashboard from "./pages/admin/Dashboard";
import { toast } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

function AppContent() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Initialize session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session?.user) {
        await checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
        queryClient.clear();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
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
        toast.error("অ্যাডমিন স্ট্যাটাস চেক করতে সমস্যা হয়েছে");
        return;
      }

      setIsAdmin(!!data);
    } catch (error) {
      console.error("Error checking admin status:", error);
      toast.error("অ্যাডমিন স্ট্যাটাস চেক করতে সমস্যা হয়েছে");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={session && isAdmin ? <Navigate to="/admin/dashboard" replace /> : <Index />} />
          <Route
            path="/analyze"
            element={session ? <Index /> : <Navigate to="/auth" replace />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<CategoryPage />} />
          <Route path="/services/buy" element={<Buy />} />
          <Route path="/services/sell" element={<Sell />} />
          <Route
            path="/auth"
            element={!session ? <AuthPage /> : (isAdmin ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/" replace />)}
          />
          <Route
            path="/courses"
            element={session ? <CoursesPage /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/courses/create"
            element={session ? <CreateCoursePage /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/admin/dashboard"
            element={session && isAdmin ? <AdminDashboard /> : <Navigate to="/" replace />}
          />
          <Route
            path="/admin/courses"
            element={session && isAdmin ? <AdminCoursesPage /> : <Navigate to="/" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;