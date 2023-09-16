import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      const currentLinkLength = currentLink.length;
      currentLink += `/${crumb}`;
      return (
        <div className="crumb flex justify-start items-center" key={crumb}>
          {/* <nav
            className="flex mb-4 mt-[110px] lg:mr-[300px] lg:ml-[80px] mr-0 ml-0 px-6"
            aria-label="Breadcrumb"
          > */}
         
            <li className="inline-flex items-center">
              {currentLinkLength > 0 && (
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
              )}
              <Link
                to={currentLink}
                className="inline-flex items-center text-sm font-bold text-gray-700 hover:text-blue-500 duration-300"
              >
                {crumb === "summary-dashboard" && "داشبورد"}
                {crumb === "wallet" && "کیف پول"}
                {crumb === "user-profile" && "پروفایل"}
                {crumb === "buying-tickets" && "خرید بلیط"}
                {crumb === "supporting" && "پشتیبانی"}
                {crumb === "supporting-tickets" && "انتخاب"}
                {/* {crumb} */}
              </Link>
            </li>
        </div>
      );
    });

  return (
    <nav
      className="flex mb-4  lg:mr-[300px] lg:ml-[80px] mr-0 ml-0 px-6"
      // aria-label="Breadcrumb"
    >
       <ol className="inline-flex mt-[110px] items-center space-x-1 md:space-x-3 mt-8">

      {crumbs}
       </ol>
    </nav>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// const BreadCumb = () => {
//   return (
//     <div>
//       <nav
//         className="flex mb-4 mt-[110px] lg:mr-[300px] lg:ml-[80px] mr-0 ml-0 px-6"
//         aria-label="Breadcrumb"
//       >
//         <ol className="inline-flex items-center space-x-1 md:space-x-3">
//           <li className="inline-flex items-center">
//             <Link
//               to="#"
//               className="inline-flex items-center text-sm font-bold text-gray-700 hover:text-blue-500 duration-300"
//             >
//               صفحه اصلی
//             </Link>
//           </li>
//           <li>
//             <div className="flex items-center">
//               <svg
//                 className="w-3 h-3 rotate-180 text-gray-400 mx-2"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//               <Link
//                 to="#"
//                 className="ml-1 text-sm font-bold text-gray-700 hover:text-blue-500 duration-300"
//               >
//                 پروژه ها
//               </Link>
//             </div>
//           </li>
//           <li aria-current="page">
//             <div className="flex items-center">
//               <svg
//                 className="w-3 h-3 rotate-180 text-gray-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//               <span className="ml-1 mx-3 text-sm font-bold text-gray-500 md:ml-2 dark:text-gray-400">
//                 پیشخوان
//               </span>
//             </div>
//           </li>
//         </ol>
//       </nav>
//     </div>
//   );
// };

// export default BreadCumb;
