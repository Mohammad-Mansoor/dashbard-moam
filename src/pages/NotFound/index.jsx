import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative SVG Blob */}
      <svg
        className="absolute w-[800px] h-[800px] -top-32 -left-40 opacity-20 animate-spin-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#6366f1"
          d="M43.1,-71.9C55.4,-63.4,65.9,-55.2,70.9,-44.3C75.8,-33.5,75.3,-19.9,72.4,-7.3C69.4,5.4,64.1,16.9,57.6,27.8C51.2,38.8,43.5,49.2,33.5,58.3C23.6,67.4,11.8,75.3,0.1,75.1C-11.5,74.8,-23.1,66.3,-35.3,59C-47.5,51.6,-60.3,45.4,-65.4,35.4C-70.5,25.4,-67.8,11.7,-64.8,-0.4C-61.8,-12.5,-58.5,-22.9,-53.2,-33.8C-47.9,-44.7,-40.7,-56.1,-30.7,-65.1C-20.7,-74.2,-7.8,-80.9,3.9,-86.3C15.7,-91.7,31.4,-95.4,43.1,-87.1Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
