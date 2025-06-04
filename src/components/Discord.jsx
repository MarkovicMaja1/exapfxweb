import React from "react";
import joinDiscordImage from "../assets/joindiscord.png"; // Update the path if needed

const Discord = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: "rgb(21, 21, 21)" }}>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Floating Phone Image with Mask */}
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Phone Image */}
          <div className="relative z-10 animate-rise animate-float transition-all duration-1000">
            <img
              src={joinDiscordImage}
              alt="Join Discord"
              className="w-96 shadow-xl"
            />
          </div>

          {/* Mask Layer (at bottom) */}
          <div
            className="absolute bottom-0 left-0 w-full h-[14%] z-20"
            style={{ backgroundColor: "rgb(21, 21, 21)" }}
          ></div>

          {/* Fixed Overlay Card (not animated) */}
          <div className="absolute w-[90%] mx-auto p-6 bg-gray-800 rounded-xl shadow-lg text-white z-30">
            <div className="flex flex-col items-center mb-5">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 text-white">
                EC
              </div>
              <div className="text-center w-full">
                <div className="text-sm text-gray-400 mb-1">ECAPFX invited you to join</div>
                <div className="text-xl font-extrabold text-white mb-2">ECAPFX</div>
                <div className="text-xs mt-1">
                  <span className="text-green-400">🟢 5 Online</span>
                  <span className="text-gray-400"> • 10 Members</span>
                </div>
              </div>
            </div>
            <a
              href="https://discord.gg/eBkRpp66"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300"
            >
              Join Discord Community <i className="fab fa-discord" />
            </a>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">Join our Discord Community</h2>
          <p className="text-gray-300 mb-6">
            Connect with like-minded traders, share insights, get real-time updates, and be part of an engaging and supportive community from ECAPFX.
          </p>
          <ul className="space-y-2 mb-6 text-white">
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✔</span> Support Channels
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✔</span> Exclusive Offers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✔</span> Trading Education
            </li>
          </ul>
          <a
            href="https://discord.gg/eBkRpp66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded text-white inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discord;