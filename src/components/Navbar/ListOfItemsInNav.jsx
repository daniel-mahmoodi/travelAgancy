import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export const ListOfItemsInNav = () => {
  const [activeButtonId, setActiveButtonId] = useState("home");
  const handleButtonClick = (id) => {
    setActiveButtonId("");
  };
  return (
    <div>
      <div className="flex space-x-4">
        <NavLink
          id="home"
          to="/summary-dashboard"
          onClick={handleButtonClick}
          className="navbar-link"
          activeClassName="navbar-link_active"
          aria-current="page"
          // x-state:on="Current"
          // x-state:off="Default"
        >
          پیشخوان
        </NavLink>
        {/* 
        <NavLink
          id="dl"
          to="download"
          onClick={handleButtonClick}
          className='navbar-link'
          activeClassName="navbar-link_active"
        >
          دانلود ها
        </NavLink> */}
        <NavLink
          id="profile"
          to="/user-profile"
          onClick={handleButtonClick}
          className="navbar-link"
          activeClassName="navbar-link_active"
        >
          پروفایل
        </NavLink>
        <NavLink
          id="wallet"
          to="/wallet"
          onClick={handleButtonClick}
          // className="navbar-link_active"
          className="navbar-link"
          activeClassName="navbar-link_active"
        >
          کیف پول
        </NavLink>

        {/* <NavLink to="/summary-dashboard" onClick={handleButtonClick} className={`navbar-link${activeButtonId}? 'wallet': '' `}>
          صفحه اصلی
        </NavLink> */}

        <NavLink
          id="tickets"
          to="/buying-tickets"
          onClick={handleButtonClick}
          className="navbar-link"
          activeClassName="navbar-link_active"
        >
          تیکت ها
        </NavLink>
      </div>
    </div>
  );
};
