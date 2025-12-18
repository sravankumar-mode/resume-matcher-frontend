import { useParams, useNavigate } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";
import BreakdownCards from "../components/BreakdownCards";
import JDPanel from "../components/JDPanel";
import ResumePanel from "../components/ResumePanel";
import { ArrowLeft } from "lucide-react";

export default function MatchDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const history = JSON.parse(localStorage.getItem("history") || "[]");
  const match = history.find((item) => item.id == id);

  if (!match) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-600 text-lg mb-4">Match not found.</p>
        <button
          onClick={() => navigate("/history")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    // <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4 pt-28">

      <div className="max-w-7xl mx-auto space-y-10">

        <button
          onClick={() => navigate("/history")}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft size={20} /> Back to History
        </button>

        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-900">Match Details</h1>
          <p className="text-gray-600 text-lg">Candidate vs Job Description</p>
        </header>

        <div className="mx-auto max-w-2xl">
          <ScoreCard score={match.score} verdict={match.verdict} />
        </div>

        <div className="max-w-5xl mx-auto">
          <BreakdownCards breakdown={match.breakdown} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <JDPanel jd={match.jd_data} />
          <ResumePanel resume={match.resume_data} />
        </div>

      </div>
    </div>
  );
}
