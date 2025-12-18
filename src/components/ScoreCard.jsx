export default function ScoreCard({ score, verdict }) {
  return (
    <div className="p-6 bg-blue-50 shadow rounded-2xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Overall Match Score</h2>

      <div className="text-center">
        <div className="text-5xl font-bold">{score}%</div>
        <div className="text-gray-700 text-lg mt-2">{verdict}</div>
      </div>
    </div>
  );
}
