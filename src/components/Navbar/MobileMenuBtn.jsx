import React from "react";

const MobileMenuBtn = ({ toggleSideBarVisibilityHandler }) => {
  const toggleSideBarVisibility = () => {
    toggleSideBarVisibilityHandler();
  };
  return (
    <button
      type="button"
      onClick={toggleSideBarVisibility}
      className="inline-flex items-center justify-center p-2 text-black bg-gray-300 rounded-md hover:bg-opacity-75 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      id="sidebar-btn"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="block w-6 h-6"
        x-description="Heroicon name: outline/bars-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        ></path>
      </svg>
      <svg
        className="hidden w-6 h-6"
        x-description="Heroicon name: outline/x-mark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};

export default MobileMenuBtn;
