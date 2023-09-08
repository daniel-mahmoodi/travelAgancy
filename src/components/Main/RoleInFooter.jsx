import React from "react";
import { Link } from "react-router-dom";
const RoleInFooter = () => {
  return (
    <div>
      <div className="flex justify-center lg:mr-[400px] mt-[10px] mb-[5px]">
        <div className="flex rounded-md items-center gap-2 text-gray-500 font-medium text-[10px]">
          <Link to="/">
            {" "}
            <img
              className="w-[20px]"
              src="../img/Tailwind_CSS_Logo.svg.png"
              alt=""
            />
          </Link>
          <span className="p-1 bg-transparent rounded-md">
            {" "}
            تمامی حقوق برای تیلویند محفوظ است
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoleInFooter;
