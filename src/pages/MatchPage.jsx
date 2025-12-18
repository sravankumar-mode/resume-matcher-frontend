import { useState } from "react";
import FileUpload from "../components/FileUpload";
import ScoreCard from "../components/ScoreCard";
import BreakdownCards from "../components/BreakdownCards";
import JDPanel from "../components/JDPanel";
import ResumePanel from "../components/ResumePanel";

export default function MatchPage() {
  const [result, setResult] = useState(null);

  return (
    
    // <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-12 pt-28">
      <div className="w-full max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Resume <span className="text-blue-600">vs</span> Job Description Matcher
          </h1>
          <p className="text-gray-600 text-lg">
            Compare resume & JD with an AI-powered scoring engine.
          </p>
        </header>

        {/* Upload Section */}
        <div className="w-full">
          <FileUpload onResult={setResult} />
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-10 animate-fadeIn">

            {/* ScoreCard */}
            <div className="mx-auto max-w-2xl">
              <ScoreCard score={result.score} verdict={result.verdict} />
            </div>

            {/* Breakdown */}
            <div className="max-w-5xl mx-auto">
              <BreakdownCards breakdown={result.breakdown} />
            </div>

            {/* JD + Resume side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <JDPanel jd={result.jd_data} />
              <ResumePanel resume={result.resume_data} />
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
