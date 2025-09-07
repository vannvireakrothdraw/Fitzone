import React from "react";

function Component4() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/your-bg.jpg')] bg-cover bg-center opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="transition transform hover:scale-105">
          <svg
            className="mx-auto w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6h13M4 6h.01M4 6v13M4 19h16"
            />
          </svg>
          <h3 className="text-yellow-400 font-bold text-lg mt-2">Diverse Routines</h3>
          <p className="text-gray-300 text-sm">
            Diverse exercise routines to prevent boredom and foster interest
          </p>
        </div>

        {/* Feature 2 */}
        <div className="transition transform hover:scale-105">
          <svg
            className="mx-auto w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1M12 4a4 4 0 110 8 4 4 0 010-8z"
            />
          </svg>
          <h3 className="text-yellow-400 font-bold text-lg mt-2">Group Fitness</h3>
          <p className="text-gray-300 text-sm">
            Group fitness classes for social interaction and community building
          </p>
        </div>

        {/* Feature 3 */}
        <div className="transition transform hover:scale-105">
          <svg
            className="mx-auto w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 12h12M12 6v12"
            />
          </svg>
          <h3 className="text-yellow-400 font-bold text-lg mt-2">Tailored Fitness</h3>
          <p className="text-gray-300 text-sm">
            Tailored fitness programs and customized workouts
          </p>
        </div>

        {/* Feature 4 */}
        <div className="transition transform hover:scale-105">
          <svg
            className="mx-auto w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="text-yellow-400 font-bold text-lg mt-2">Fitness Blogs</h3>
          <p className="text-gray-300 text-sm">
            Stay updated with fitness trends, classes and activities
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component4;
