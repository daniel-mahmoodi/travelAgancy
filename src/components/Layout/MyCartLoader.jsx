import React from "react";
import ContentLoader from "react-content-loader";

const MyCartLoader = (props) => (
  <div className="flex justify-center items-center flex-col">
    <div className="py-2">
      <ContentLoader
        speed={2}
        width={300}
        height={15}
        viewBox="0 0 300 15"
        backgroundColor="#f6f6f6"
        foregroundColor="#e8e8e8"
        {...props}
      >
        <rect x="0" y="0" rx="3" ry="3" width="292" height="14" />
      </ContentLoader>
    </div>

    <ContentLoader
      speed={2}
      width={350}
      height={150}
      viewBox="0 0 350 150"
      backgroundColor="#f6f6f6"
      foregroundColor="#e8e8e8"
      {...props}
    >
      <rect x="0" y="0" rx="3" ry="3" width="342" height="119" />
    </ContentLoader>
  </div>
);

export default MyCartLoader;
