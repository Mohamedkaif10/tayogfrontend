export default function EachProfile() {
  return (
    <div className="p-12">
      <div className="text-blue text-3xl font-bold">Profile</div>
      <div className="py-6 w-full flex space-x-4">
        <div className="w-1/6 h-screen flex flex-col space-y-4 text-center">
          <div className="text-white bg-orange-500 border border-orange-500 px-4 py-2">
            Public Profile
          </div>
          <div className="text-orange-500 border border-orange-500 px-4 py-2">
            Settings
          </div>
          <div className="text-orange-500 border border-orange-500 px-4 py-2">
            Activity
          </div>
        </div>
        <div className="bg-gray-200 w-full h-screen p-4 flex flex-col space-y-8">
          <div className="flex items-center space-x-8">
            <div className="w-48 aspect-square bg-white rounded-full"></div>
            <div className="flex flex-col w-full">
              <div className="text-blue">
                <div className="text-2xl font-semibold">Swarup Nath</div>
                <div className="text-sm">
                  MS in BioMedical Engineering from SWG Autonomous Institute,
                  Katrosat
                </div>
              </div>
              <div className="text-orange-500 flex space-x-4 justify-end mt-8">
                <div className="border border-orange-500 text-sm bg-white px-4 py-2 rounded-sm">
                  Save
                </div>
                <div className="border border-orange-500 text-sm bg-white px-4 py-2 rounded-sm">
                  View Activity
                </div>
                <div className="flex items-center border border-orange-500 text-sm bg-white px-4 py-2 rounded-sm">
                  <MessageIcon />
                  <div className="ml-2">Send a Message</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-700 h-48"></div>
          <div className="border-2 border-gray-700 h-48"></div>
          <div className="border-2 border-gray-700 h-48"></div>
        </div>
      </div>
    </div>
  );
}

const MessageIcon = () => {
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
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
};
