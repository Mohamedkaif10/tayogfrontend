import React from "react";

const EachMentor = () => {
  return (
    <div className="m-2 p-5 text-black border border-gray-200 rounded-lg shadow-lg w-72 flex items-center justify-between">
      <div>
        <div className="font-semibold">K Vivek Kumar</div>
        <div className="text-slate-500 text-xs">BTech in Computer Science</div>
      </div>
      <img
        src="https://th.bing.com/th/id/OIP.wJdhCCpGskqKaAqG0mB7QgHaHa?rs=1&pid=ImgDetMain"
        alt="Mentor"
        className="w-1/4 rounded-full"
      />
    </div>
  );
};

export default EachMentor;
