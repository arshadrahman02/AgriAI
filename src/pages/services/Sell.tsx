import { Store } from "lucide-react";

const Sell = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Sell Your Crops
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-8">
          <Store className="w-8 h-8 text-primary mr-3" />
          <h2 className="text-2xl font-semibold">List Your Produce</h2>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Crop Type
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="e.g., Wheat, Rice, Corn"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity (in tons)
            </label>
            <input
              type="number"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price per ton (USD)
            </label>
            <input
              type="number"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Enter your location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Describe your produce (quality, harvest date, etc.)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            List for Sale
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
