import React from "react";

const SearchBanner = () => {
  return (
    <div className="p-12 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-blue text-3xl font-bold">
          Find your ideal Mentor
        </div>
        <div className="text-gray-500">
          Grab a research opportunity in your dream field
        </div>
      </div>
      <div className="flex justify-center mt-8 w-full">
        <div className="border border-gray-300 shadow-xl rounded-lg px-4 py-2 flex items-center space-x-4">
          <div className="text-gray-500">
            <SearchIcon />
          </div>
          <div className="text-gray-700">
            <input
              type="text"
              className="focus:outline-none"
              placeholder="Domain"
            />
          </div>
          <div className="w-[2px] bg-gray-300 h-2/3 rounded-full"></div>
          <div className="text-gray-700">
            <input
              type="text"
              className="focus:outline-none"
              placeholder="Skill"
            />
          </div>
          <div className="w-[2px] bg-gray-300 h-2/3 rounded-full"></div>
          <div className="text-gray-700 flex-grow">
            <input
              type="text"
              className="focus:outline-none"
              placeholder="Specialization"
            />
          </div>
          <div>
            <button className="bg-blue text-white py-2 px-8 text-sm rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        Short by: Experience | Domain | Availability | Ratings
      </div>
      <div className="my-16"></div>
    </div>
  );
};

export default SearchBanner;

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};
