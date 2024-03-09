import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white px-6 py-2 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4 lg:space-x-8">
        <a className="text-xl flex items-center" href="/">
          <Image
            src="/tayog.svg"
            alt="Tayog"
            className=""
            width={124}
            height={32}
          />
        </a>
        <div className="hidden md:flex space-x-2 lg:space-x-4">
          <NavLink href="/" text="Home" />
          <NavLink href="#" text="Thoughts" />
          <NavLink href="#" text="Events" />
          <NavLink href="#" text="Mentor" />
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-8">
        <button className="text-sm bg-transparent text-blue-700 py-2 px-4 border border-blue-500 shadow-xs shadow-blue-600 rounded">
          Post a Job
        </button>
        <button className="text-sm bg-orange-500 hover:bg-orange-700 text-white py-2 px-6 rounded">
          Sign In
        </button>
      </div>
    </nav>
  );
}

const NavLink = ({ href, text }) => {
  return (
    <a
      className="text-gray-600 hover:text-blue-800 text-lg px-3 py-2 mt-1 group"
      href={href}
    >
      {text}
      <div className="bg-blue-800 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
    </a>
  );
};
