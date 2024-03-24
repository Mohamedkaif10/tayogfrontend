import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full bg-white text-blue py-16 px-36 flex items-center justify-between">
      <div className="w-1/2 flex flex-col space-y-6">
        <div className="text-4xl font-bold">Find your ideal Mentor</div>
        <div className="text-slate-500 text-xl">
          Connect with the research leaders and find a guiding hand for your
          success
        </div>
        <div className="text-slate-400">
          Join TAYOG&apos;s Mentor Matchmaking Program Where{" "}
          <span className="text-lg text-orange-600 font-bold">90%</span> of
          participants report accelerated research progress and{" "}
          <span className="text-lg text-orange-600 font-bold">95%</span>{" "}
          experience heightened career satisfaction. Discover the power of
          guided success today
        </div>
        <div className="my-4">
          <div className="border border-gray-400 rounded-lg shadow-lg flex justify-between items-center">
            <div className="p-4 text-slate-600">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="p-4 focus:outline-none text-gray-400"
              placeholder="Find a Mentor"
            />
            <div>
              <button className="bg-blue text-white py-2 px-6 my-2 mr-4 rounded-lg">
                Search
              </button>
            </div>
          </div>
          <div className="text-slate-500 text-sm m-2">
            Short by: Experience | Domain | Availability | Ratings
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          src="/mentor-banner.png"
          alt="Tayog"
          width={300}
          height={32}
          className=""
        />
      </div>
    </div>
  );
};

export default HeroBanner;

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};
