const BenefitsSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                alt="কৃষি প্রযুক্তি"
                className="rounded-lg shadow-xl animate-fadeIn"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-8">
                আধুনিক কৃষি প্রযুক্তি
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    AI প্রযুক্তি ব্যবহার করে দ্রুত ফসলের রোগ নির্ণয়
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    বিশেষজ্ঞ কৃষিবিদদের পরামর্শ
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    ২৪/৭ সহায়তা সেবা
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;