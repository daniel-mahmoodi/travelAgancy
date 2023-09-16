import React from "react";
import ContentLoader from "react-content-loader";

const MyCardLoader = (props) => (
  <div className=" flex flex-col justify-center items-center pb-3 overflow-hidden bg-gray-100 border border-gray-300 rounded-md shadow-md">
    <ContentLoader
      speed={2}
      width={242}
      height={200}
      viewBox="0 0 242 200"
      backgroundColor="#e6e6e6"
      foregroundColor="#d6d6d6"
      {...props}
    >
      <rect x="15" y="0" rx="4" ry="4" width="212" height="160" />
    </ContentLoader>
    <div className="px-4 mt-1 ">
      <ContentLoader
        speed={2}
        width={121}
        height={60}
        viewBox="0 0 121 60"
        backgroundColor="#e6e6e6"
        foregroundColor="#d6d6d6"
        {...props}
      >
        <rect x="15" y="0" rx="4" ry="4" width="100" height="40" />
      </ContentLoader>
    </div>
    <div className="flex justify-center gap-1 mt-8">
      <ContentLoader
        speed={2}
        width={240}
        height={50}
        viewBox="0 0 240 50"
        backgroundColor="#e6e6e6"
        foregroundColor="#d6d6d6"
        {...props}
      >
        <circle cx="60" cy="20" r="20" />
        <circle cx="105" cy="20" r="20" />
        <circle cx="150" cy="20" r="20" />
        <circle cx="195" cy="20" r="20" />
      </ContentLoader>
    </div>
  </div>
);

export default MyCardLoader;
