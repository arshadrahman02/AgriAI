import { Outlet } from "react-router-dom";

const MarketAccess = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        বাজার সংযোগ
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        কৃষি পণ্যের বাজার সংযোগ এবং মূল্য নির্ধারণ সম্পর্কে বিস্তারিত জানুন।
      </p>
      <Outlet />
    </div>
  );
};

export default MarketAccess;
