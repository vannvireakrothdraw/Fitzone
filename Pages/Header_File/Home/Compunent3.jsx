import React, { useState, useEffect } from "react";

function SearchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z"
      />
    </svg>
  );
}

function Component3() {
  const gyms = [
    { name: "IFitness HSR Layout", code: "560102", img: "https://images.unsplash.com/photo-1594737625785-cff9c6a8a1f4" },
    { name: "Gold's Gym Koramangala", code: "560095", img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" },
    { name: "Anytime Fitness Whitefield", code: "560066", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
    { name: "Cult Fit Indiranagar", code: "560038", img: "https://images.unsplash.com/photo-1571019613914-85f342c1d4b1" },
  ];

  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
      setCurrent(0);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Total pages / steps
  const totalPages = itemsPerView === 1 ? gyms.length : Math.ceil(gyms.length / itemsPerView);

  // ✅ Translate value constant
  const translateValue = itemsPerView === 1 ? current * 100 : current * (100 / itemsPerView);

  // Prev / Next
  const prevSlide = () => setCurrent(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  const nextSlide = () => setCurrent(prev => (prev === totalPages - 1 ? 0 : prev + 1));

  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:px-20">
      {/* Header + Search */}
      <div className="mb-10 w-[300px] md:w-[80%] lg:w-[70%] mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Find the nearest <span className="text-yellow-400">Fit.Zone</span> to you
        </h1>
        <div className="flex w-full md:w-[80%] items-center border border-gray-400 rounded-lg overflow-hidden">
          <input type="text" placeholder="Enter a location" className="flex-1 px-4 py-2 bg-gray-800 text-white focus:outline-none" />
          <button className="bg-white text-black px-4 py-[10px]">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${translateValue}%)`,
            width: `${gyms.length * (100 / itemsPerView)}%`,
          }}
        >
          {gyms.map((gym, index) => (
            <div key={index} className="p-4" style={{ width: `${100 / itemsPerView}%` }}>
              <div className="bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <img src={gym.img} alt={gym.name} className="w-full h-56 object-cover" />
                <div className="p-4 flex-1">
                  <h2 className="text-lg font-semibold">{gym.name}</h2>
                  <p className="text-sm text-gray-400">{gym.code}</p>
                </div>
                <div className="flex space-x-2 p-4 pt-0">
                  <button className="flex-1 bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 transition">Explore Now</button>
                  <button className="flex-1 bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 transition">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full text-lg font-bold">{"<"}</button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full text-lg font-bold">{">"}</button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full ${current === index ? "bg-yellow-400" : "bg-gray-500"}`}></button>
        ))}
      </div>
    </div>
  );
}

export default Component3;
