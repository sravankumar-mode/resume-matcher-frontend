import axios from "axios";

// const API_BASE = "http://127.0.0.1:8000/match";
const API_BASE = "https://sravan-resume-score-backend.purpleglacier-cb044e02.westus2.azurecontainerapps.io/match";

// ---------------------------------------------
// Get ALL match history
// ---------------------------------------------
export const getMatchHistory = async () => {
  const res = await axios.get(`${API_BASE}/history_matches`);
  // returns: { status, count, results: [...] }
  return res.data.results || [];
};

// ---------------------------------------------
// Get SINGLE match by ID
// ---------------------------------------------
export const getMatchById = async (id) => {
  const res = await axios.get(`${API_BASE}/history_matches/${id}`);

  // Your backend returns a FLAT object:
  // { id, candidate_name, score, ... }
  // so we return it directly.
  return res.data;
};

// ---------------------------------------------
// Search Matches (Optional)
// ---------------------------------------------
export const searchMatches = async ({
  name = "",
  verdict = "",
  minScore = "",
  maxScore = "",
}) => {
  const params = {};

  if (name) params.name = name;
  if (verdict) params.verdict = verdict;
  if (minScore !== "") params.min_score = minScore;
  if (maxScore !== "") params.max_score = maxScore;

  const res = await axios.get(`${API_BASE}/history_matches/search`, { params });
  return res.data.results || [];
};
