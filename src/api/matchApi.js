import axios from "axios";

export const scoreResume = async (jdFile, resumeFile) => {
  const formData = new FormData();
  formData.append("jd_file", jdFile);
  formData.append("resume_file", resumeFile);

  const res = await axios.post(
    // "http://127.0.0.1:8000/match/score",
    "https://sravan-resume-score-backend.purpleglacier-cb044e02.westus2.azurecontainerapps.io/match/score",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};
