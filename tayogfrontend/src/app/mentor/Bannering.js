export default function Bannering() {
  return (
    <div className="flex m-4 p-12 bg-gray-200 rounded-lg shadow-md">
      <div className="flex justify-center items-center w-96 rounded-lg mr-6">
        <div className="absolute bg-pink-300 h-80 w-64 rounded-2xl -translate-x-12 translate-y-12"></div>
        <div className="absolute bg-white h-80 w-64 rounded-2xl translate-x-12 -translate-y-12 p-6">
          <Description />
        </div>
      </div>
      <div className="w-7/12">
        <h2 className="text-3xl text-blue font-bold mb-4">
          Invest in your research journey with a dedicated mentor
        </h2>
        <p className="text-gray-400 mb-4">
          Seeking to excel in your research endeavors? Eager to refine your
          methodologies or enhance your scholarly pursuits? Access personalized
          guidance and expert insights from a research mentor or coach online.
          Let TAYOG empower you to navigate the research landscape with
          confidence and achieve your academic aspirations.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>Thousands of mentors available</li>
          <li>Hundreds of diverse domain</li>
          <li>From top Institutes</li>
          <li>Personal chats</li>
          <li>1-on-1 calls</li>
          <li>92% satisfaction rate</li>
        </ul>
        <button className="bg-blue text-white py-2 px-6 rounded-lg text-sm">
          Find my mentor
        </button>
      </div>
    </div>
  );
}

const Description = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-evenly mb-4 text-black">
        <div className="">
          <div className="font-semibold">Dr. R. Prakashan</div>
          <div className="text-xs text-gray-500">
            PhD in Nano technology, IIT Patna
          </div>
        </div>
        <div className="h-12 w-12 bg-gray-200 rounded-full flex-grow"></div>
      </div>
      <div className="flex justify-between text-xs rounded-md bg-gray-200 p-1 my-2 text-black">
        <span className="">Mentorship</span>
        <span className="text-orange-500 font-bold">₹2000/-</span>
      </div>
      <div className="bg-black w-full h-[1px] my-2"></div>
      <div className="bg-gray-200 p-1 rounded-md text-black text-xs">
        Intro Session
      </div>
      <div className="bg-gray-200 p-1 rounded-md text-black text-xs">
        CV Review
      </div>
      <div className="bg-gray-200 p-1 rounded-md text-black text-xs">
        Expert Session
      </div>
    </div>
  );
};
