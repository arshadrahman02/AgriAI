const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          কৃষকদের অভিজ্ঞতা
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "করিম মিয়া",
              location: "দিনাজপুর",
              text: "এই প্ল্যাটফর্মের মাধ্যমে আমি আমার ফসলের রোগ সনাক্ত করতে পেরেছি এবং দ্রুত সমাধান পেয়েছি।"
            },
            {
              name: "রহিমা বেগম",
              location: "রংপুর",
              text: "খুব সহজেই আমি আমার ফসলের ছবি তুলে AI এর মাধ্যমে রোগ নির্ণয় করতে পারি।"
            },
            {
              name: "আব্দুল করিম",
              location: "ময়মনসিংহ",
              text: "বিশেষজ্ঞদের পরামর্শ পেয়ে আমার ফসলের উৎপাদন বেড়েছে।"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;