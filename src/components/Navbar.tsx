import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [session, setSession] = useState<any>(null);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "যোগাযোগ", path: "/contact" },
    { name: "ক্যারিয়ার", path: "/careers" },
  ];

  React.useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session);
    };

    fetchSession();
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">ফার্মফিক্সমেট</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <Link to={link.path}>
                      <Button
                        variant={isActive(link.path) ? "default" : "ghost"}
                        className="text-base text-white"
                      >
                        {link.name}
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black">সেবাসমূহ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2 bg-grey-200">
                      <Link
                        to="/services/buy"
                        className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        ফসল কিনুন
                      </Link>
                      <Link
                        to="/services/sell"
                        className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        ফসল বিক্রি করুন
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${session.user.email}`} alt="User Avatar" />
                      <AvatarFallback>{session.user.email[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/sign-in">
                  <Button variant="outline" className="text-white bg-green-400">Sign In</Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="text-white ">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary/10"
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
            <div className="relative group">
              <button className="w-full flex items-center justify-between px-3 py-2 text-base font-medium hover:bg-primary/10 rounded-md">
                সেবাসমূহ
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    to="/services/buy"
                    className="block px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    ফসল কিনুন
                  </Link>
                  <Link
                    to="/services/sell"
                    className="block px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    ফসল বিক্রি করুন
                  </Link>
                </div>
              </div>
            </div>
            {session?.user ? (
              <Button variant="ghost" className="w-full justify-start" onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <>
                <Link to="/sign-in">
                  <Button variant="outline" className="w-full text-white">Sign In</Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="w-full text-white ">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
