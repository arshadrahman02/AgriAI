import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthError } from "@supabase/supabase-js";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        const { data: roleData } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", session.user.id)
          .eq("role", "admin")
          .maybeSingle();

        if (roleData) {
          toast.success("অ্যাডমিন হিসেবে সফলভাবে লগইন হয়েছে");
          navigate("/admin/dashboard");
        } else {
          toast.success("সফলভাবে লগইন হয়েছে");
          navigate("/");
        }
      }
      if (event === "SIGNED_OUT") {
        setErrorMessage("");
        navigate("/auth");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          আপনার অ্যাকাউন্টে প্রবেশ করুন
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {errorMessage && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#16a34a',
                    brandAccent: '#15803d',
                  },
                },
              },
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: "ইমেইল",
                  password_label: "পাসওয়ার্ড",
                  button_label: "লগইন করুন",
                },
                sign_up: {
                  email_label: "ইমেইল",
                  password_label: "পাসওয়ার্ড",
                  button_label: "রেজিস্টার করুন",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;