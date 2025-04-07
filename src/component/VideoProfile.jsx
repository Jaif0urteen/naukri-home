import React from 'react';
import { Share2 } from 'lucide-react';

const VideoProfile = () => {
  return (
    <section className="px-4 md:px-8 mb-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Section */}
          <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Tips for Effective Job Search: Mastering Your Online Profile
            </h1>
            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <span>By Naukri Team, 24 Mar, 2023</span>
              <Share2 size={16} className="text-gray-400 cursor-pointer" />
            </div>
            <p className="text-gray-700 mb-6">
              Discover essential tips to build a compelling online profile for your job search.
              Stand out to employers and maximize your opportunities. Start today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded text-sm font-semibold shadow hover:bg-blue-700 transition">
                Start creating resume FREE →
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded text-sm font-semibold hover:bg-blue-50 transition">
                Get expert help
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://media.licdn.com/dms/image/v2/C5612AQHcwyGx21yi-A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1541087243466?e=2147483647&v=beta&t=Jk03lXfp44op3koS9O5857bh3X4BwZb-F-XbNqs9CNA"
              alt="Video Profile Illustration"
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProfile;
