import React from 'react'

function Compunent6() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase m-4 tracking-wide">
        BLOG & NEWS
      </h2>
      {/* Description */}
      <p className="text-center text-gray-300 max-w-2xl leading-relaxed mb-12">
        Dive into expert tips, the latest trends, and motivating stories that will
        elevate your workout routine and wellness journey. Stay informed and
        empowered with fresh insights and practical advice to help you achieve
        your goals and live your best life.
      </p>
      {/* No Blogs Message */}
      <div className="mt-8">
        <p className="text-2xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] text-center">
          No Blogs Available <br /> at this time
        </p>
      </div>
    </div>
  )
}

export default Compunent6
