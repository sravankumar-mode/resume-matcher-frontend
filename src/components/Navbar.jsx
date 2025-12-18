import { Link, useLocation } from "react-router-dom";
import { History, Home } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition 
     ${pathname === path ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/80 backdrop-blur-lg 
        shadow-lg border-b border-gray-200
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Sravan’s Resume Score AI
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4">
          <Link to="/" className={linkStyle("/")}>
            <Home size={18} />
            Home
          </Link>

          <Link to="/history" className={linkStyle("/history")}>
            <History size={18} />
            History
          </Link>
        </div>
      </div>
    </nav>
  );
}
