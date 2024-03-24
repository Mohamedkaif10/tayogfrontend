import React from "react";
import EachMentor from "./EachMentor";

const InfiniteScroll = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-blue text-3xl font-semibold">Top Mentors</div>
      <div className="flex items-center m-4">
        <EachMentor />
        <EachMentor />
        <EachMentor />
        <EachMentor />
      </div>
      <div className="py-6 flex items-center space-x-12">
        <button className="bg-blue text-white py-2 px-6 my-2 mr-4 rounded-lg">
          Find my mentor
        </button>
        <a className="underline text-blue">Become a Mentor</a>
      </div>
    </div>
  );
};

export default InfiniteScroll;
