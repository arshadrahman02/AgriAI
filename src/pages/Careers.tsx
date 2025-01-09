import { Briefcase } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Agricultural Data Scientist",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to analyze farming data and improve crop predictions.",
    },
    {
      title: "Farm Technology Specialist",
      location: "On-site",
      type: "Full-time",
      description: "Help farmers implement and maintain smart farming solutions.",
    },
    {
      title: "Agricultural Content Writer",
      location: "Remote",
      type: "Part-time",
      description: "Create engaging content about sustainable farming practices.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-green-50 to-white text-foreground">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Join Our Team
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Briefcase className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-xl font-semibold">{job.title}</h2>
              </div>
              <div className="flex space-x-4">
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {job.location}
                </span>
                <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <button className="text-primary hover:text-primary/80 font-medium">
              Apply Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
