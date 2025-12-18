import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ResumePanel({ resume }) {
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl shadow space-y-6 border">

      {/* Header */}
      <h2 className="text-2xl font-bold text-green-700">
        Candidate Overview
      </h2>

      {/* Basic Info */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-gray-700">Name</h3>
          <p className="text-gray-800">{resume.candidate_name || "N/A"}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-gray-800">{resume.email || "N/A"}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-800">{resume.phone || "N/A"}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Experience (Years)</h3>
            <p className="text-gray-800">{resume.experience_years ?? "N/A"}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Education</h3>
            <p className="text-gray-800">{resume.education || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* LinkedIn */}
      {resume.linkedin_profile && (
        <div>
          <h3 className="font-semibold text-gray-700">LinkedIn</h3>
          <a
            href={resume.linkedin_profile}
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            {resume.linkedin_profile}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Social Profiles */}
      {resume.other_social_media_profiles?.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-700">Social Profiles</h3>
          <div className="flex flex-col space-y-1">
            {resume.other_social_media_profiles.map((link, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                {link}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      <div>
        <h3 className="font-semibold text-gray-700">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {resume.skills?.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h3 className="font-semibold text-gray-700">Projects</h3>

        <button
          className="text-green-700 font-medium underline mt-2"
          onClick={() => setOpenProjects(!openProjects)}
        >
          {openProjects ? "Hide Projects" : "Show Projects"}
        </button>

        {openProjects && (
          <ul className="space-y-4 mt-4">
            {resume.all_projects?.map((p) => (
              <li
                key={p.title}
                className="p-4 bg-gray-50 rounded-xl shadow-sm border"
              >
                <strong className="text-gray-900">{p.title}</strong>
                <p className="text-gray-700 mt-1">
                  {p["description and details"]}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
