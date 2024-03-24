import React from "react";

export default function Search() {
  return (
    <>
      <div className="p-8 bg-white text-black">
        <div className="w-full pt-8 pb-2 flex justify-between">
          <div className="w-1/4 px-2">
            <div className="p-4 rounded-lg shadow-lg text-lg flex justify-between border border-gray-200">
              <div>All Filters</div>
              <div className="text-blue">Applied(0)</div>
            </div>
          </div>
          <div className="w-1/4 p-4 rounded-lg shadow-lg text-lg flex justify-between">
            <input
              type="text"
              className="focus:outline-none text-slate-700"
              placeholder="Search Openings"
            />
            <button className="bg-blue rounded-full text-white p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full pt-8 pb-2 flex justify-between">
          <div className="w-1/4 px-2">
            <div className="text-lg flex flex-col">
              <div className="w-full p-4 shadow-lg rounded-lg border border-gray-200">
                <div className="text-lg mb-2">Institute Type</div>
                <div className="flex space-x-4 items-center">
                  <input
                    type="checkbox"
                    name="IIT Hyderabad"
                    id="iith"
                    className="w-5 h-5"
                  />
                  <label className="text-slate-500 text-md">
                    IIT Hyderabad
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className="text-lg flex flex-col space-y-6">
              {/* One job item */}
              <div className="shadow-lg border border-gray-200 p-4 rounded-lg">
                {/* Heading */}
                <div className="flex justify-between">
                  <div className="text-blue text-2xl font-semibold">
                    Looking for High-Level Talents Indian Institute of
                    Technology Hyderabad
                  </div>
                  <div className="flex space-x-2 text-blue">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Applicants and updates */}
                <div className="flex text-xs mt-2 text-slate-600">
                  <div>Posted 3 days ago</div>
                  <div className="mx-4 w-[0.5px] bg-slate-500"></div>
                  <div>200 applicants</div>
                </div>
                {/* Information */}
                <div>
                  <ul className="text-sm my-4 list-disc ml-4">
                    <li>Hyderabad, India</li>
                    <li>Stipend: 45k - 50k</li>
                    <li>Department of Design, IIT Hyderabad</li>
                  </ul>
                </div>
                {/* Description */}
                <div className="">
                  <div className="line-clamp-1 text-lg">
                    Two-world leading universities, IIT-Hyderabad, establishing
                    the world&#39;s best score with almost no work culture
                  </div>
                </div>
                <div className="h-[1px] bg-gray-300 w-full my-4"></div>
                <div className="flex justify-between">
                  <div className="flex space-x-4 items-center text-sm">
                    <div className="text-green-600">
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
                          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        />
                      </svg>
                    </div>
                    <div>Verified post by Dr. Kumar Utkarsh</div>
                    <div>|</div>
                    <div className="text-blue underline">Google Scholar</div>
                  </div>
                  <div className="flex items-center text-sm text-slate-600 space-x-4">
                    <div>Apply before: 03rd November, 2024</div>
                    <button className="bg-blue px-6 py-2 text-white rounded-md text-base">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <div className="shadow-lg border border-gray-200 p-4 rounded-lg">
                {/* Heading */}
                <div className="flex justify-between">
                  <div className="text-blue text-2xl font-semibold">
                    Looking for High-Level Talents Indian Institute of
                    Technology Hyderabad
                  </div>
                  <div className="flex space-x-2 text-blue">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Applicants and updates */}
                <div className="flex text-xs mt-2 text-slate-600">
                  <div>Posted 3 days ago</div>
                  <div className="mx-4 w-[0.5px] bg-slate-500"></div>
                  <div>200 applicants</div>
                </div>
                {/* Information */}
                <div>
                  <ul className="text-sm my-4 list-disc ml-4">
                    <li>Hyderabad, India</li>
                    <li>Stipend: 45k - 50k</li>
                    <li>Department of Design, IIT Hyderabad</li>
                  </ul>
                </div>
                {/* Description */}
                <div className="">
                  <div className="line-clamp-1 text-lg">
                    Two-world leading universities, IIT-Hyderabad, establishing
                    the world&#39;s best score with almost no work culture
                  </div>
                </div>
                <div className="h-[1px] bg-gray-300 w-full my-4"></div>
                <div className="flex justify-between">
                  <div className="flex space-x-4 items-center text-sm">
                    <div className="text-green-600">
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
                          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        />
                      </svg>
                    </div>
                    <div>Verified post by Dr. Kumar Utkarsh</div>
                    <div>|</div>
                    <div className="text-blue underline">Google Scholar</div>
                  </div>
                  <div className="flex items-center text-sm text-slate-600 space-x-4">
                    <div>Apply before: 03rd November, 2024</div>
                    <button className="bg-blue px-6 py-2 text-white rounded-md text-base">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}