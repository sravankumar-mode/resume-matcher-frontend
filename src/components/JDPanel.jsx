export default function JDPanel({ jd }) {
  if (!jd) return null;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Job Description</h2>

      {/* Job Title */}
      {jd.job_title && (
        <div>
          <h3 className="font-semibold text-gray-700">Job Title</h3>
          <p className="text-gray-900 mt-1">{jd.job_title}</p>
        </div>
      )}

      {/* Experience */}
      {jd.min_experience && (
        <div>
          <h3 className="font-semibold text-gray-700">Experience Required</h3>
          <p className="text-gray-900 mt-1">{jd.min_experience} years</p>
        </div>
      )}

      {/* Overview */}
      {jd.job_overview && (
        <div>
          <h3 className="font-semibold text-gray-700">Overview</h3>
          <p className="text-gray-900 mt-1 leading-relaxed">{jd.job_overview}</p>
        </div>
      )}

      {/* Required Skills */}
      {jd.required_skills?.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-700">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {jd.required_skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Preferred Skills */}
      {jd.preferred_skills?.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-700">Preferred Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {jd.preferred_skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
