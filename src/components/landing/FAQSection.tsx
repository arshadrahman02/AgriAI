import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "এই প্ল্যাটফর্মটি কিভাবে কাজ করে?",
      answer:
        "আমাদের প্ল্যাটফর্মটি AI প্রযুক্তি ব্যবহার করে ফসলের ছবি বিশ্লেষণ করে রোগ নির্ণয় করে এবং সমাধানের পরামর্শ দেয়।",
    },
    {
      question: "আমি কিভাবে আমার ফসল বিক্রি করতে পারি?",
      answer:
        "আমাদের প্ল্যাটফর্মে আপনি আপনার ফসলের ছবি, বিবরণ এবং মূল্য যোগ করে বিক্রি করতে পারেন।",
    },
    {
      question: "আমি কিভাবে বিশেষজ্ঞদের পরামর্শ পেতে পারি?",
      answer:
        "আমাদের প্ল্যাটফর্মে আপনি সরাসরি কৃষি বিশেষজ্ঞদের সাথে যোগাযোগ করতে পারেন এবং তাদের পরামর্শ নিতে পারেন।",
    },
    {
      question: "এই প্ল্যাটফর্মটি ব্যবহার করতে কি কোন ফি লাগে?",
      answer:
        "আমাদের প্ল্যাটফর্মটি ব্যবহার করার জন্য কোন ফি লাগে না। এটি সম্পূর্ণ বিনামূল্যে।",
    },
    {
      question: "আমি কিভাবে আমার প্রোফাইল তৈরি করব?",
      answer:
        "আমাদের প্ল্যাটফর্মে আপনি খুব সহজেই আপনার ইমেইল এবং পাসওয়ার্ড দিয়ে একটি প্রোফাইল তৈরি করতে পারেন।",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          সাধারণ জিজ্ঞাসা
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
