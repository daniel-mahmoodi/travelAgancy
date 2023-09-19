import React from "react";
import { Link } from "react-router-dom";
const LogoInNavbar = () => {
  return (
    <div className="flex-shrink-0">
      <Link className="flex items-center" to="/#">
        <span className="reltive top-[3px] text-white">Tailwind</span>
        <img
          className="block relative right-[5px] h-8 w-8"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=300"
          alt="Your Company"
        />
      </Link>
    </div>
  );
};

export default LogoInNavbar;
