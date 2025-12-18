export default function LoadingOverlay({ text = "Analyzing your resume & JD..." }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center z-50">

      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-6 text-white text-lg font-semibold animate-pulse">
        {text}
      </p>
    </div>
  );
}
