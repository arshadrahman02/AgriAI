import { Leaf } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      title: "CEO",
      name: "Arshad Rahman",
      description: "The visionary leader behind Krishimate, driving innovation and growth.",
      image: "/ceo.jpg",
    },
    {
      title: "CTO",
      name: "John Doe",
      description: "The technical expert, ensuring the platform's reliability and scalability.",
      image: "/cto.jpg",
    },
    {
      title: "CIO",
      name: "Jane Smith",
      description: "The strategic thinker, managing information and data for better decision-making.",
      image: "/cio.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-green-50 to-white text-foreground">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        আমাদের সম্পর্কে
      </h1>
      <div className="max-w-6xl mx-auto space-y-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex md:flex-row flex-col"
          >
            <div className="md:w-1/2">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-primary">{member.title}</h2>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
