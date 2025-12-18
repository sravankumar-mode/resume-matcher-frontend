import { useState, useEffect } from "react";
import { scoreResume } from "../api/matchApi";
import { CloudUpload, FileText, User, Loader2 } from "lucide-react";

export default function FileUpload({ onResult }) {
  const [jdFile, setJdFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isTakingLong, setIsTakingLong] = useState(false);

  const uploadBoxStyle =
    "flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-300 shadow-lg bg-white hover:shadow-xl transition duration-200 cursor-pointer space-y-4";

  // --------------------------------
  // TIMER LOGIC (auto start on loading)
  // --------------------------------
  useEffect(() => {
    if (!loading) return;

    setTimer(30);
    setIsTakingLong(false);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsTakingLong(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [loading]);

  // --------------------------------
  // Submit
  // --------------------------------
  const handleSubmit = async () => {
    if (!jdFile || !resumeFile) {
      alert("Please upload both JD and Resume!");
      return;
    }

    setLoading(true);

    try {
      const result = await scoreResume(jdFile, resumeFile);

      // Save to local storage history
      const old = JSON.parse(localStorage.getItem("history") || "[]");

      const newItem = {
        id: Date.now(),
        created_at: new Date().toISOString(),
        jd_file_name: jdFile.name,
        resume_file_name: resumeFile.name,
        ...result,
      };

      localStorage.setItem("history", JSON.stringify([newItem, ...old]));

      onResult(result);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ---------------- FULLSCREEN LOADING OVERLAY ---------------- */}
      {loading && (
        <div className="
          fixed inset-0 z-[9999]
          bg-black/50 backdrop-blur-md
          flex flex-col items-center justify-center
          text-white px-4
        ">
          <Loader2 className="w-16 h-16 animate-spin mb-6" />

          <h2 className="text-2xl font-semibold mb-2">
            Processing the Resume...
          </h2>

          <p className="text-lg opacity-90">
            Estimated Time: {timer > 0 ? `${timer}s` : "Finalizing..."}
          </p>

          {isTakingLong && (
            <p className="mt-4 text-sm opacity-75 animate-pulse">
              ⚡ Almost done… generating results…
            </p>
          )}
        </div>
      )}
      {/* ------------------------------------------------------------ */}

      <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200 space-y-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Upload Files
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* JD Upload */}
          <label className={uploadBoxStyle}>
            <FileText className="w-12 h-12 text-blue-600" />
            <p className="font-semibold text-gray-700 text-lg">
              Upload Job Description (JD)
            </p>

            <div className="text-sm text-gray-500">
              {jdFile ? jdFile.name : "Choose a JD PDF file"}
            </div>

            <input
              type="file"
              className="hidden"
              onChange={(e) => setJdFile(e.target.files[0])}
            />
          </label>

          {/* Resume Upload */}
          <label className={uploadBoxStyle}>
            <User className="w-12 h-12 text-green-600" />
            <p className="font-semibold text-gray-700 text-lg">
              Upload Resume
            </p>

            <div className="text-sm text-gray-500">
              {resumeFile ? resumeFile.name : "Choose a Resume PDF file"}
            </div>

            <input
              type="file"
              className="hidden"
              onChange={(e) => setResumeFile(e.target.files[0])}
            />
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mx-auto bg-blue-500 text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition disabled:opacity-60 flex items-center justify-center gap-2" >
          <CloudUpload className="w-6 h-6" />
          Analyze Matching Score
        </button>
      </div>
    </>
  );
}
