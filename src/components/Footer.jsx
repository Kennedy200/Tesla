import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function TeslaFooter() {
  return (
    <footer className="bg-[#0D1117] text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Tesla Logo Section */}
        <div className="flex flex-col items-start space-y-6">
  <h1 className="text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 relative">
    TESLA
    <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300 shadow-lg"></span>
  </h1>
  <p className="text-gray-400 max-w-sm">
    Accelerating the world’s transition to sustainable energy.
  </p>
</div>

        {/* Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-red-500 transition-all">
                About
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-red-500 transition-all">
                Careers
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-red-500 transition-all">
                News
              </a>
            </li>
            <li>
              <a href="/investors" className="hover:text-red-500 transition-all">
                Investors
              </a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="/model-s" className="hover:text-red-500 transition-all">
                Model S
              </a>
            </li>
            <li>
              <a href="/model-3" className="hover:text-red-500 transition-all">
                Model 3
              </a>
            </li>
            <li>
              <a href="/model-x" className="hover:text-red-500 transition-all">
                Model X
              </a>
            </li>
            <li>
              <a href="/model-y" className="hover:text-red-500 transition-all">
                Model Y
              </a>
            </li>
            <li>
              <a href="/cybertruck" className="hover:text-red-500 transition-all">
                Cybertruck
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="hover:text-red-500 transition-all">
                Contact
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-red-500 transition-all">
                Service
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-red-500 transition-all">
                FAQs
              </a>
            </li>
            <li>
              <a href="/charging" className="hover:text-red-500 transition-all">
                Charging
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Socials & Copyright */}
      <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://twitter.com/Tesla"
            className="hover:text-white transition-all"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/teslamotors/"
            className="hover:text-white transition-all"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/user/teslamotors"
            className="hover:text-white transition-all"
          >
            <FaYoutube className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/tesla-motors"
            className="hover:text-white transition-all"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} Tesla, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
