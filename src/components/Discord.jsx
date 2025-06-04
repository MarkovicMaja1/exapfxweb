import React from "react";
import joinDiscordImage from "../assets/joindiscord.png";

const Discord = () => {
  return (
    <div 
      className="flex items-center justify-center py-24 p-6" 
      style={{ backgroundColor: "rgb(21, 21, 21)" }}
    >
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

          {/* Mask Layer */}
          <div
            className="absolute bottom-0 left-0 w-full h-[14%] z-20"
            style={{ backgroundColor: "rgb(21, 21, 21)" }}
          ></div>

          {/* Overlay Card */}
          <div 
            className="absolute w-[90%] mx-auto p-6 bg-gradient-to-br from-[#1d8348] to-[#145c33] rounded-xl shadow-lg text-white z-30"
          >
            <div className="flex flex-col items-center mb-5">
              <div className="w-12 h-12 bg-[#f9e79f] rounded-full flex items-center justify-center text-2xl font-bold text-[#1d8348] mb-4">
                EC
              </div>
              <div className="text-center w-full">
                <div className="text-sm text-white mb-1">ECAPFX invited you to join</div>
                <div className="text-xl font-extrabold text-white mb-2">ECAPFX</div>
                <div className="text-xs mt-1">
                  <span className="text-white">🟢 5 Online</span>
                  <span className="text-white"> • 10 Members</span>
                </div>
              </div>
            </div>
            <a
              href="https://discord.gg/eBkRpp66"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#f9e79f] to-[#e8c74d] hover:from-[#f7d86e] hover:to-[#d7b73c] text-[#000000] font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300"
            >
              Join Discord Community <i className="fab fa-discord" />
            </a>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">Join our Discord Community</h2>
          <p className="text-white mb-6">
            Connect with like-minded traders, share insights, get real-time updates, and be part of an engaging and supportive community from ECAPFX.
          </p>
          <ul className="space-y-2 mb-6 text-white">
            <li className="flex items-center gap-2">
              <span className="text-[#1d8348]">✔</span> Support Channels
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#1d8348]">✔</span> Exclusive Offers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#1d8348]">✔</span> Trading Education
            </li>
          </ul>
          <div className="flex gap-4">
            <a
              href="https://discord.gg/eBkRpp66"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1d8348] to-[#145c33] hover:from-[#156437] hover:to-[#0e3f24] px-6 py-2 rounded text-white inline-block transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#chooseplan"
              className="bg-gradient-to-r from-[#1d8348] to-[#145c33] hover:from-[#156437] hover:to-[#0e3f24] px-6 py-2 rounded text-white inline-block transition duration-300"
            >
              Select Plan
            </a>
          </div>
        </div>
      </div>
            {/* Custom Scoped CSS */}
      <style jsx>{`
        .py-24 {
            padding-bottom: 0rem;
            padding-top: 6rem;
        }
      `}</style>
    </div>
  );
};

export default Discord;