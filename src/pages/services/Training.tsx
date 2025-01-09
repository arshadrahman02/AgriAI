const Training = () => {
      const content = [
        "কৃষি প্রশিক্ষণ কেন্দ্র: আপনার নিকটবর্তী কৃষি প্রশিক্ষণ কেন্দ্রে যোগ দিন।",
        "অনলাইন কোর্স: অনলাইনে কৃষি বিষয়ক কোর্স করুন।",
        "কর্মশালা: কৃষি বিষয়ক কর্মশালায় অংশ নিন।",
        "কৃষি মেলা: কৃষি মেলায় অংশ নিয়ে নতুন প্রযুক্তি সম্পর্কে জানুন।",
        "কৃষি প্রদর্শনী: কৃষি প্রদর্শনীতে অংশ নিয়ে নতুন যন্ত্রপাতি দেখুন।",
        "বিশেষজ্ঞ পরামর্শ: কৃষি বিশেষজ্ঞদের কাছ থেকে পরামর্শ নিন।",
      ];

      return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-primary mb-8">
            কৃষি প্রশিক্ষণ
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            কৃষি বিষয়ক প্রশিক্ষণ এবং কর্মশালা সম্পর্কে বিস্তারিত জানুন।
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default Training;
