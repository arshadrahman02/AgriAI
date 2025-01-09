import { CheckCircle2, Sprout, Shield } from "lucide-react";

interface AnalysisResultsProps {
  results: {
    damage: string;
    solutions: string[];
    pesticides: string[];
  };
}

export const AnalysisResults = ({ results }: AnalysisResultsProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-6 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-gray-800">শনাক্তকৃত ক্ষতি</h3>
          </div>
          <p className="text-gray-700 pl-8">{results.damage}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Sprout className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold text-gray-800">প্রস্তাবিত সমাধান</h3>
          </div>
          <ul className="list-disc pl-14 space-y-1">
            {results.solutions.map((solution, index) => (
              <li key={index} className="text-gray-700">{solution}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-semibold text-gray-800">প্রস্তাবিত কীটনাশক</h3>
          </div>
          <ul className="list-disc pl-14 space-y-1">
            {results.pesticides.map((pesticide, index) => (
              <li key={index} className="text-gray-700">{pesticide}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};