const StatsSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">১০০০+</div>
            <div className="text-gray-600">সন্তুষ্ট কৃষক</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">৫০+</div>
            <div className="text-gray-600">বিশেষজ্ঞ</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">২৪/৭</div>
            <div className="text-gray-600">সহায়তা</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">৯৫%</div>
            <div className="text-gray-600">সফলতার হার</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;