import { Link, useNavigate } from "react-router-dom";
import HelmetSEO from "../components/seo/HelmetSEO.jsx";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <HelmetSEO
        title="Page Not Found"
        description="The page you are looking for does not exist on AC&D Abuja."
        path="/*"
      />

      <main className="flex flex-col items-center justify-center bg-surface-500 min-h-screen text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black mb-4 text-primary-500 opacity-20">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-500">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-text-400 mb-8 max-w-md">
          The page you’re looking for doesn’t exist or has been moved. Check our
          latest interior projects instead.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 font-bold hover:bg-primary-500 hover:text-white transition-all cursor-pointer"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="px-8 py-3 rounded-full bg-primary-500 text-white font-bold hover:bg-primary-600 transition-all shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
