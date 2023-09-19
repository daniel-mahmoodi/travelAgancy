import React, { useState } from "react";
import { Link } from "react-router-dom";
const MessageIcon = () => {
  const [isMessageDropdownVisible, setIsMessageDropdownVisible] =
    useState(false);
  const handleMessageIconClick = () => {
    setIsMessageDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsMessageDropdownVisible(false);
    }, 1000);
  };
  return (
    <div className="cursor-pointer">
      <button
        type="button"
        className="navbar-message-icon_button badge"
        onClick={handleMessageIconClick}
      >
        <span className="sr-only">View notifications</span>
        <ion-icon
          className="h-6 w-6 relative top-[3px]"
          name="chatbox-ellipses-outline"
        ></ion-icon>
      </button>

      <div
        className={`navbar-message_dropdown ${
          isMessageDropdownVisible ? "" : "hidden"
        } bg-white`}
      >
        <div className="flex-col" onMouseLeave={handleMouseLeave}>
          <Link className="block duration-200 pe-8 hover:bg-gray-50" to="/#">
            <div className="relative flex items-center gap-4 p-4 rounded-lg">
              <img
                className="w-10 h-10 rounded-full"
                src="../img/icons8-avatar-96.png"
                alt=""
              />
              <div>
                <p className="text-[12px] font-light">امیر</p>
                <p className="text-gray-400 text-[10px] mt-2 font-light">
                  3 دقیقه پیش
                </p>
              </div>
              <span className="bg-red-500 text-white absolute rounded-full px-2 py-1 top-[12px] right-[10px] text-[8px]">
                2
              </span>
            </div>
          </Link>
          <hr />
          <Link className="block duration-200 pe-8 hover:bg-gray-50" to="/#">
            <div className="relative flex items-center gap-4 p-4 rounded-lg">
              <img
                className="w-10 h-10 rounded-full"
                src="../img/icons8-avatar-96.png"
                alt=""
              />
              <div>
                <p className="text-[12px] font-light">امیر</p>
                <p className="text-gray-400 text-[10px] mt-2 font-light">
                  3 دقیقه پیش
                </p>
              </div>
              <span className="bg-red-500 text-white absolute rounded-full px-2 py-1 top-[12px] right-[10px] text-[8px]">
                2
              </span>
            </div>
          </Link>
          <hr />
          <Link className="block duration-200 pe-8 hover:bg-gray-50" to="/#">
            <div className="relative flex items-center gap-4 p-4 rounded-lg">
              <img
                className="w-10 h-10 rounded-full"
                src="../img/icons8-avatar-96.png"
                alt=""
              />
              <div>
                <p className="text-[12px] font-light">امیر</p>
                <p className="text-gray-400 text-[10px] mt-2 font-light">
                  3 دقیقه پیش
                </p>
              </div>
              <span className="bg-red-500 text-white absolute rounded-full px-2 py-1 top-[12px] right-[10px] text-[8px]">
                2
              </span>
            </div>
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MessageIcon;
