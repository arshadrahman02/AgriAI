import { ShoppingCart } from "lucide-react";

const Buy = () => {
  const products = [
    {
      name: "জৈব গম",
      price: "৳২৯,৯০০/টন",
      quantity: "মজুদ: ৫০ টন",
      location: "সেন্ট্রাল ভ্যালি",
    },
    {
      name: "প্রিমিয়াম চাল",
      price: "৳৪৫,০০০/টন",
      quantity: "মজুদ: ৩০ টন",
      location: "ডেল্টা অঞ্চল",
    },
    {
      name: "তাজা ভুট্টা",
      price: "৳২৮,০০০/টন",
      quantity: "মজুদ: ২৫ টন",
      location: "মিডওয়েস্ট প্লেইনস",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        ফসল ক্রয়
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <ShoppingCart className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-lg font-medium text-primary">{product.price}</p>
              <p className="text-gray-600">{product.quantity}</p>
              <p className="text-gray-600">{product.location}</p>
            </div>
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
              এখনই কিনুন
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;