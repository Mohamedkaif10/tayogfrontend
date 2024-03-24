export default function Disciplines() {
  return (
    <div className="bg-white w-full p-8 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-blue">Disciplines</h2>
      <div className="flex flex-wrap justify-center text-gray-500 text-lg">
        <EachDiscipline branch="Engineering" />
        <EachDiscipline branch="Chemistry" />
        <EachDiscipline branch="Statistics" />
        <EachDiscipline branch="Computer" />
        <EachDiscipline branch="Physics" />
        <EachDiscipline branch="Psychology" />
        <EachDiscipline branch="Mathematics" />
        <EachDiscipline branch="Biology" />
      </div>
      <button className="border border-orange-600 text-orange-600 px-6 py-2 my-8">
        Explore more Disciplines
      </button>
    </div>
  );
}

const ChemicalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  );
};

const EachDiscipline = ({ branch }) => {
  return (
    <button className="bg-gray-50 border border-gray-200 shadow-lg rounded-lg flex items-center px-8 py-4 m-4 justify-center space-x-4">
      <ChemicalIcon />
      <div className="text-black">{branch}</div>
    </button>
  );
};
