import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa"; // Import Telegram icon from react-icons
import { FaCrown } from "react-icons/fa"; // Import King Crown icon from react-icons

const HeroSection = () => {
  // Counter logic
  const [counts, setCounts] = useState({ matches: 0, successRate: 0, subscribers: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        matches: Math.min(prev.matches + 1, 100),
        successRate: Math.min(prev.successRate + 1, 99),
        subscribers: Math.min(prev.subscribers + 50, 5000), // Increment subscribers to 5000
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Countdown timer logic
  const [countdown, setCountdown] = useState(50); // Starting countdown at 50 seconds
  const totalTime = 50; // Total time for countdown in seconds

  useEffect(() => {
    if (countdown === 0) return; // Stop countdown at 0

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000); // Update countdown every second

    return () => clearInterval(timer);
  }, [countdown]);

  // Circular progress calculation
  const strokeDashoffset = (100 - (countdown / totalTime) * 100) * 2 * Math.PI * 50;

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/5205447.jpg')" }} // Replace with your image path
    >
      {/* Profile Picture */}
      <div className="relative mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-teal-400 overflow-hidden shadow-lg cursor-pointer transform hover:scale-110 transition-all duration-300">
        <img
          src="/images/fb949c7c-ed7d-480f-8555-c58d9f0c11e4.jpg" // Replace with your profile picture path
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Name with Gradient Color and Crown Icon */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
          Raghav Mumbai
        </span>
        <FaCrown className="ml-2 text-yellow-400 text-2xl" /> {/* King Crown Icon */}
      </h1>

      {/* Animated Subscriber Counter */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">{counts.subscribers.toLocaleString()}</h2>
        <p className="text-sm">Subscribers</p>
      </div>

      {/* Animated Counters */}
      <div className="flex gap-8 mb-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">{counts.matches}</h2>
          <p className="text-sm">Matches</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">{counts.successRate}%</h2>
          <p className="text-sm">Success Rate</p>
        </div>
      </div>

      {/* Big Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-400">
        Cricket Prediction King
      </h1>
      <p className="text-lg md:text-2xl mb-6">Join now to play for free</p>

      {/* Circular Countdown Timer */}
      <div className="relative mb-6">
        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#ddd"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#F59E0B"
            strokeWidth="10"
            fill="none"
            strokeDasharray="314"
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 60 60)"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-yellow-400">
          {countdown}s
        </p>
      </div>

      {/* Join Telegram Button with Icon */}
      <a
        href="https://t.me/Ipl_best_tipper_work1" // Replace with your Telegram link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-8 py-3 bg-teal-500 text-lg font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg animate-bounce"
      >
        <FaTelegramPlane className="mr-2 text-white text-xl" /> {/* Telegram Icon */}
        Join Telegram
      </a>

      {/* 100/99 Match Passed */}
      <p className="mt-6 text-md md:text-lg font-semibold text-gray-200">
        100/99 match passed
      </p>
    </div>
  );
};

export default HeroSection;

