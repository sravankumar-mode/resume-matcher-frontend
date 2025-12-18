import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(data);
  }, []);

  return (
    // <div className="min-h-screen bg-gray-100 p-10">
    <div className="min-h-screen px-6 py-6 pt-28">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Match History</h2>

        {history.length === 0 && (
          <p className="text-gray-500 text-lg">No history found.</p>
        )}

        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => navigate(`/history/${item.id}`)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.resume_data?.candidate_name}
                </h3>

                <span className="text-lg font-bold text-blue-600">
                  {item.score?.toFixed(2)}%
                </span>
              </div>

              <p className="text-gray-600">{item.verdict}</p>

              <p className="text-xs text-gray-400 mt-1">
                {new Date(item.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
