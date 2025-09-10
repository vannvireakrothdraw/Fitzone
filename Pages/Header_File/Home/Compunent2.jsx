import React from 'react'

function Compunent2() {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/Pictuer/download.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold md:text-[70px]">EXPLORE</h1>
        <h2 className="text-6xl font-montserrat font-extrabold text-stroke md:text-[100px]">OUR PLANS</h2>
        <p className="mt-2 text-gray-300">
          Tailored plans for endurance and performance
        </p>

        <div className="mt-6 flex gap-6 justify-center">
          <div className="border-1 border-red-500 rounded-lg px-6 py-[2px] text-center">
            <h3 className="text-lg">FitX</h3>
            <p className="text-yellow-400">Starting @ <br/>₹1,042 / month</p>
          </div>

          <div className="border-1 border-blue-500 rounded-lg px-6 py-[2px] text-center">
            <h3 className="text-lg">ZoneX</h3>
            <p className="text-yellow-400">Starting @<br/>₹1,333 / month</p>
          </div>
        </div>

        <button className="mt-6 bg-yellow-300 text-black px-8 py-3 rounded-md shadow-md lg:hover:bg-yellow-300">
          Explore Now!
        </button>

        <p className="mt-2 text-xs">
          *₹1,333/- billed annually. Cancel anytime.
        </p>
      </div>
    </div>
  )
}

export default Compunent2
