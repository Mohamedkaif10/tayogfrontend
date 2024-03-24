export default function TopInstitutes() {
  return (
    <div className="bg-white w-full p-8 text-center">
      <h2 className="text-3xl font-semibold mb-8 text-blue">
        Find a Mentor from Top Institutes
      </h2>
      <div className="flex flex-wrap justify-center items-center text-gray-500 text-lg">
        <EachInstitute institute="IITs" />
        <EachInstitute institute="NITs" />
        <EachInstitute institute="National Universities" />
        <EachInstitute institute="IISERs" />
      </div>
    </div>
  );
}

const EachInstitute = ({ institute }) => {
  return (
    <div className="m-2 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-center text-blue">
        {institute}
      </h3>
      <p className="mt-2 text-sm text-center text-gray-400">
        12 active Mentors from
      </p>
      <div className="mt-4 flex justify-center space-x-2">
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar>
          <div>+4</div>
        </Avatar>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-2 border border-orange-500 text-orange-500 text-sm rounded-md">
          Explore
        </button>
      </div>
    </div>
  );
};

const Avatar = ({ children }) => {
  return (
    <div className="shadow-xl rounded-full h-10 w-10 bg-gray-500 flex justify-center items-center text-white">
      {children}
    </div>
  );
};
