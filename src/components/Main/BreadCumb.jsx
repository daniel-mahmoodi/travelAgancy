import React from "react";
import { Link } from "react-router-dom";
const BreadCumb = () => {
  return (
    <div>
      <nav
        className="flex mb-4 mt-[110px] lg:mr-[300px] lg:ml-[80px] mr-0 ml-0 px-6"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="#"
              className="inline-flex items-center text-sm font-bold text-gray-700 hover:text-blue-500 duration-300"
            >
              صفحه اصلی
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 rotate-180 text-gray-400 mx-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="#"
                className="ml-1 text-sm font-bold text-gray-700 hover:text-blue-500 duration-300"
              >
                پروژه ها
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 rotate-180 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 mx-3 text-sm font-bold text-gray-500 md:ml-2 dark:text-gray-400">
                پیشخوان
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCumb;
