import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold mb-2">
              JOIN <span className="text-amber-500">MOKSHA</span> SPIRITUAL,
            </h2>
            <h3 className="text-xl font-bold mb-4">
              WHERE INNER PEACE BEGINS.
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Embark on a transformative journey with MOKSHA SPIRITUAL.
              Discover meditation, mindfulness, and spiritual practices that
              nurture inner peace, balance, harmony, and enlightenment.
              Connect with a community dedicated to holistic well-being,
              self-discovery, and spiritual growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Get to know</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Packages</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src="/moksha-logo.png"
              alt="Moksha Logo"
              className="w-24 h-auto"
            />
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact Us :</h4>
                <p className="text-gray-400">+ 123 456 78645</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Mail Us :</h4>
                <p className="text-gray-400">moksha@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Visit Us :</h4>
                <p className="text-gray-400">
                  No. 166, Colombo,<br />
                  Western Province,<br />
                  Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h4 className="text-lg font-semibold">
              Join our email. First to know about Our Updates.
            </h4>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-80 px-4 py-2 bg-gray-800 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-6 py-2 bg-amber-500 text-white rounded-r-full hover:bg-amber-600 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;