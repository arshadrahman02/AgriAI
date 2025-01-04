import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Contact Us
      </h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Our Location</h3>
              <p className="text-gray-600">
                123 Agriculture Street
                <br />
                Farming District
                <br />
                City, State 12345
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">contact@farmfixmate.com</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
