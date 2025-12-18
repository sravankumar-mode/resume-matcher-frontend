import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";     // <-- NEW
import MatchPage from "./pages/MatchPage";
import HistoryPage from "./pages/HistoryPage";
import MatchDetailsPage from "./pages/MatchDetailsPage";

function App() {
  return (
    <BrowserRouter>
      {/* Global Navbar */}
      <Navbar />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<MatchPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/:id" element={<MatchDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
