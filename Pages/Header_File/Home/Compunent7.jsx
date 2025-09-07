import React from 'react'

function Compunent7() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Commit to fitness today</h2>
          <p className="text-gray-400 text-sm mb-6">
            Stay Ahead Of The Fitness Curve, Get Latest Updates And Offers
            Through Our Newsletter
          </p>

          {/* Newsletter */}
          <div className="flex w-full max-w-md ">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none border-1 border-white rounded-xl mr-[3px] text-gray-50"
            />
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-r-lg font-semibold hover:bg-yellow-500">
              Subscribe
            </button>
          </div>

          {/* App Links */}
          <div className="flex gap-4 mt-6">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Centers Near You</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Partner.fit.zone</a></li>
            <li><a href="#" className="hover:text-yellow-400">Fitzone Support</a></li>
          </ul>
        </div>
      </div>

      {/* Social + Bottom Note */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex gap-5 mb-4 md:mb-0">
          <a href="#" className="hover:text-yellow-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-yellow-400"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center md:text-left">
          © copyright Fit.zone | Created by Infominez
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Compunent7
