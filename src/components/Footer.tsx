import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">কৃষিমেট</h3>
            <p className="text-gray-300">
              আমরা কৃষকদের জন্য একটি ডিজিটাল প্ল্যাটফর্ম যা তাদের ফসল পরিচর্যায় সহায়তা করে।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition">
                  ক্যারিয়ার
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/buy" className="text-gray-300 hover:text-white transition">
                  ফসল কিনুন
                </Link>
              </li>
              <li>
                <Link to="/services/sell" className="text-gray-300 hover:text-white transition">
                  ফসল বিক্রি করুন
                </Link>
              </li>
              <li>
                <Link to="/analyze" className="text-gray-300 hover:text-white transition">
                  ফসল বিশ্লেষণ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">সোশ্যাল মিডিয়া</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} কৃষিমেট। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
