import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
      <div className="w-full max-w-lg lg:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="hidden w-5 h-5 text-gray-200 lg:block"
              x-description="Heroicon name: mini/magnifying-glass"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            id="search"
            className="hidden lg:block w-full rounded-md border focus:gray-600 border-gray-200 bg-transparent py-2 pl-10 pr-3 leading-5 text-gray-200 font-light text-[13px] placeholder-gray-200 focus:outline-none duration-300 sm:text-sm"
            placeholder="جست و جو"
            type="search"
            name="search"
            // style="font-weight: 100 !important"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
