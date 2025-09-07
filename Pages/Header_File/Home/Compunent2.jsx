import React from 'react'

function Compunent2() {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold">EXPLORE</h1>
        <h2 className="text-5xl font-extrabold tracking-wide">OUR PLANS</h2>
        <p className="mt-2 text-gray-300">
          Tailored plans for endurance and performance
        </p>

        <div className="mt-6 flex gap-6 justify-center">
          <div className="border-2 border-red-500 rounded-lg px-6 py-4 text-left">
            <h3 className="font-bold text-lg">FitX</h3>
            <p className="text-yellow-400">Starting @</p>
            <p className="text-red-400 text-lg font-semibold">
              ₹1,042 / month
            </p>
          </div>

          <div className="border-2 border-blue-500 rounded-lg px-6 py-4 text-left">
            <h3 className="font-bold text-lg">ZoneX</h3>
            <p className="text-yellow-400">Starting @</p>
            <p className="text-green-400 text-lg font-semibold">
              ₹1,333 / month
            </p>
          </div>
        </div>

        <button className="mt-6 bg-yellow-400 text-black font-bold px-8 py-3 rounded-md shadow-md hover:bg-yellow-300">
          Explore Now!
        </button>

        <p className="mt-2 text-xs text-gray-400">
          *₹1,333/- billed annually. Cancel anytime.
        </p>
      </div>
    </div>
  )
}

export default Compunent2
