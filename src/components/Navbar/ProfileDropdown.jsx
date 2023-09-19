import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const ProfileDropdown = ({ activeIndex }) => {
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setProfileDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setProfileDropdownVisible(false);
    }, 1000);
  };
  return (
    <div
      className="relative flex-shrink-0 ml-3"
      x-data="Components.menu({ open: false })"
      x-init="init()"
    >
      <div className="duration-300 group hover:opacity-75">
        <button
          type="button"
          className="navbar-profile_button"
          id="user-menu-button"
          onClick={handleMouseEnter}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 hover:scale-[1.2] duration-300 rounded-full"
            src="../img/icons8-avatar-96.png"
            alt=""
          />
        </button>
      </div>

      {isProfileDropdownVisible && (
        <div
          onMouseLeave={handleMouseLeave}
          className=" navbar-profile-dropdown_links"
        >
          <NavLink
            to="/login-form.html"
            className={`block px-4 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-50 hover:text-primary-500`}
            activeClassName="bg-rose-100"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            <ion-icon className="pe-2" name="log-in-outline"></ion-icon>
            ورود/ثبت نام
          </NavLink>
          <NavLink
            to="/#"
            target="_blank"
            className={`block px-4 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-50 hover:text-primary-500 ${
              activeIndex === 1 ? "bg-gray-100" : ""
            }`}
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
          >
            <i className="ion-ios-gear-outline pe-2"></i>
            تنظیمات
          </NavLink>
          <NavLink
            to="/#"
            target="_blank"
            className={`block px-4 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-50 hover:text-primary-500 ${
              activeIndex === 2 ? "bg-gray-100" : ""
            }`}
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
          >
            <i className="ion-power pe-2"></i>
            خروج
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
