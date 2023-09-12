import React from "react";
import { useEffect, useState, useRef } from "react";
import { ListOfItemsInNav } from "./ListOfItemsInNav";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/Ui-slice";
import { useDispatch } from "react-redux";
function Navbar() {
  const dispatch = useDispatch();
  const [isMessageDropdownVisible, setMessageDropdownVisible] = useState(false);

  // State to store the message menu interval
  const messageMenuInterval = useRef(null);

  useEffect(() => {
    // console.log('useEffect');
    // Event handler for the message icon button click
    const handleMessageIconClick = () => {
      setMessageDropdownVisible(true);
      // console.log('handleMessageIconClick');
    };

    // Event handler for mouse enter
    const handleMessageIconMouseEnter = () => {
      clearTimeout(messageMenuInterval.current);
      // console.log('handleMessageIconMouseEnter');
    };

    // Event handler for mouse leave
    const handleMessageIconMouseLeave = () => {
      messageMenuInterval.current = setTimeout(() => {
        setMessageDropdownVisible(false);
      }, 700);
      // console.log('handleMessageIconMouseLeave');
    };

    // Add event listeners when the component mounts
    document
      .querySelector(".navbar-message-icon_button")
      .addEventListener("click", handleMessageIconClick);
    document
      .querySelector(".navbar-message-icon_button, .navbar-message_dropdown")
      .addEventListener("mouseenter", handleMessageIconMouseEnter);
    document
      .querySelector(".navbar-message_dropdown")
      .addEventListener("mouseleave", handleMessageIconMouseLeave);

    // Remove event listeners when the component unmounts
    return () => {
      document
        .querySelector(".navbar-message-icon_button")
        .removeEventListener("click", handleMessageIconClick);
      document
        .querySelector(".navbar-message-icon_button, .navbar-message_dropdown")
        .removeEventListener("mouseenter", handleMessageIconMouseEnter);
      document
        .querySelector(".navbar-message-icon_button, .navbar-message_dropdown")
        .removeEventListener("mouseleave", handleMessageIconMouseLeave);
      // clearTimeout(messageMenuInterval.current);
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  // .

  //
  // State to manage the visibility of the profile dropdown
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);

  // State to store the user menu interval
  let userMenuInterval = null;

  useEffect(() => {
    // Event handler for the user menu button click
    const handleUserMenuButtonClick = () => {
      setProfileDropdownVisible(true);
    };

    // Event handler for mouse enter
    const handleMouseEnter = () => {
      clearTimeout(userMenuInterval);
    };

    // Event handler for mouse leave
    const handleMouseLeave = () => {
      userMenuInterval = setTimeout(() => {
        setProfileDropdownVisible(false);
      }, 700);
    };

    // Event handler for the sidebar button click
    const handleSidebarButtonClick = () => {
      showSideNav();
    };

    // Event handler for clicking the sidebar wrapper
    const handleSidebarWrapperClick = () => {
      hideSideNav();
    };

    // Function to show the side navigation
    const showSideNav = () => {
      // Add your logic for showing the side nav here
    };

    // Function to hide the side navigation
    const hideSideNav = () => {
      // Add your logic for hiding the side nav here
    };

    // Add event listeners when the component mounts
    document
      .querySelector("#user-menu-button")
      .addEventListener("click", handleUserMenuButtonClick);
    document
      .querySelector(".navbar-profile-dropdown_links, #user-menu-button")
      .addEventListener("mouseenter", handleMouseEnter);
    document
      .querySelector(".navbar-profile-dropdown_links, #user-menu-button")
      .addEventListener("mouseleave", handleMouseLeave);
    document
      .querySelector("#sidebar-btn")
      .addEventListener("click", handleSidebarButtonClick);
    document
      .querySelector(".sidebar-wrapper")
      .addEventListener("click", handleSidebarWrapperClick);

    // Remove event listeners when the component unmounts
    return () => {
      document
        .querySelector("#user-menu-button")
        .removeEventListener("click", handleUserMenuButtonClick);
      document
        .querySelector(".navbar-profile-dropdown_links, #user-menu-button")
        .removeEventListener("mouseenter", handleMouseEnter);
      document
        .querySelector(".navbar-profile-dropdown_links, #user-menu-button")
        .removeEventListener("mouseleave", handleMouseLeave);
      document
        .querySelector("#sidebar-btn")
        .removeEventListener("click", handleSidebarButtonClick);
      document
        .querySelector(".sidebar-wrapper")
        .removeEventListener("click", handleSidebarWrapperClick);
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  // Add your input text handling logic here, such as focusing and blurring
  // .
  // DropDown css:
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleMouseEnter = (event) => {
    // Your logic for handling mouse enter event
    setActiveIndex(0); // For example, set activeIndex to 0
  };

  const handleMouseMove = (event, index) => {
    // Your logic for handling mouse move event
    setActiveIndex(index); // For example, set activeIndex based on index
  };

  const handleMouseLeave = (event) => {
    // Your logic for handling mouse leave event
    setActiveIndex(-1); // Reset activeIndex
  };

  const handleClick = () => {
    // Your logic for handling the click event
  };
  // .
  const toggleSideBarVisibilityHandler = () => {
    dispatch(uiActions.toggleSideBarVisibility(true));
  };
  return (
    <div className="min-h-full bg-white">
      <div className="shadow-md">
        <nav x-data="{ open: false }" className="navbar">
          <div className="px-2 mx-auto sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center gap-8 px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Link className="flex items-center" to="/#">
                    <span className="reltive top-[3px] text-white">
                      Tailwind
                    </span>
                    <img
                      className="block relative right-[5px] h-8 w-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=300"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden lg:ml-10 lg:block">
                  <ListOfItemsInNav />
                </div>
              </div>
              <div className="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="hidden w-5 h-5 text-gray-200 lg:block"
                        x-description="Heroicon name: mini/magnifying-glass"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      id="search"
                      className="hidden lg:block w-full rounded-md border focus:gray-600 border-gray-200 bg-transparent py-2 pl-10 pr-3 leading-5 text-gray-200 font-light text-[13px] placeholder-gray-200 focus:outline-none duration-300 sm:text-sm"
                      placeholder="جست و جو"
                      type="search"
                      name="search"
                      // style="font-weight: 100 !important"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  type="button"
                  onClick={toggleSideBarVisibilityHandler}
                  className="inline-flex items-center justify-center p-2 text-black bg-gray-300 rounded-md hover:bg-opacity-75 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  id="sidebar-btn"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    //    x-state:on="Menu open"
                    //    x-state:off="Menu closed"
                    className="block w-6 h-6"
                    //     :className="{ 'hidden': open, 'block': !(open) }"
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
                    //    x-state:on="Menu open"
                    //    x-state:off="Menu closed"
                    className="hidden w-6 h-6"
                    //     :className="{ 'block': open, 'hidden': !(open) }"
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
              </div>

              <div className="hidden lg:ms-4 lg:block">
                <div className="flex items-center">
                  {/* <!-- ===  message icon == --> */}
                  <div className="cursor-pointer">
                    <button
                      type="button"
                      className="navbar-message-icon_button badge"
                      // onClick={() =>
                      //   setMessageDropdownVisible(!isMessageDropdownVisible)
                      // }
                    >
                      <span className="sr-only">View notifications</span>
                      <ion-icon
                        className="h-6 w-6 relative top-[3px]"
                        name="chatbox-ellipses-outline"
                      ></ion-icon>
                    </button>
                    {/* <script>
                $(window).ready(function () {
                  var messageMenuInterval = null;
                  $(".navbar-message-icon_button").click(function () {
                    $(".navbar-message_dropdown").removeClass("hidden");
                  });

                  $(".navbar-message-icon_button,.navbar-message_dropdown").mouseenter(
                    function () {
                      clearTimeout(messageMenuInterval);
                    }
                  );
                  $(".navbar-message-icon_button,.navbar-message_dropdown").mouseleave(
                    function () {
                      messageMenuInterval = setTimeout(function () {
                        $(".navbar-message_dropdown").addClass("hidden");
                      }, 700);
                    }
                  );
                });
              </script> */}
                    {/* <!-- === message icon drpdown links === --> */}
                    {/* <div className="hidden bg-white navbar-message_dropdown"> */}
                    <div
                      className={`navbar-message_dropdown ${
                        isMessageDropdownVisible ? "" : "hidden"
                      } bg-white`}
                    >
                      <div className="flex-col">
                        <Link
                          className="block duration-200 pe-8 hover:bg-gray-50"
                          to="/#"
                        >
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
                        <Link
                          className="block duration-200 pe-8 hover:bg-gray-50"
                          to="/#"
                        >
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
                        <Link
                          className="block duration-200 pe-8 hover:bg-gray-50"
                          to="/#"
                        >
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
                  {/* <!-- ===== message icon ends here ==== --> */}

                  {/* <!-- Profile dropdown --> */}

                  <div
                    className="relative flex-shrink-0 ml-3"
                    x-data="Components.menu({ open: false })"
                    x-init="init()"
                    //     @keydown.escape.stop="open = false; focusButton()"
                    //     @click.away="onClickAway($event)"
                  >
                    <div className="duration-300 group hover:opacity-75">
                      <button
                        type="button"
                        className="navbar-profile_button"
                        id="user-menu-button"
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
                      <div className=" navbar-profile-dropdown_links">
                        <Link
                          to="/login-form.html"
                          // className="block px-4 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-50 hover:text-primary-500"
                          //   x-state:on="Active"
                          //   x-state:off="Not Active"
                          //    :className="{ 'bg-gray-100': activeIndex === 0 }"
                          className={`block px-4 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-50 hover:text-primary-500 ${
                            activeIndex === 0 ? "bg-gray-100" : ""
                          }`}
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-0"
                          //    @mouseenter="onMouseEnter($event)"
                          //    @mousemove="onMouseMove($event, 0)"
                          //    @mouseleave="onMouseLeave($event)"
                          //    @click="open = false; focusButton()"
                          onMouseEnter={handleMouseEnter}
                          onMouseMove={(e) => handleMouseMove(e, 0)}
                          onMouseLeave={handleMouseLeave}
                          onClick={handleClick}
                        >
                          <ion-icon
                            className="pe-2"
                            name="log-in-outline"
                          ></ion-icon>
                          ورود/ثبت نام
                        </Link>
                        <Link
                          to="/#"
                          target="_blank"
                          className={`block px-4 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-50 hover:text-primary-500 ${
                            activeIndex === 1 ? "bg-gray-100" : ""
                          }`}
                          //    :className="{ 'bg-gray-100': activeIndex === 1 }"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-1"
                          //    @mouseenter="onMouseEnter($event)"
                          //    @mousemove="onMouseMove($event, 1)"
                          //    @mouseleave="onMouseLeave($event)"
                          //    @click="open = false; focusButton()"
                          onMouseEnter={handleMouseEnter}
                          onMouseMove={(e) => handleMouseMove(e, 1)}
                          onMouseLeave={handleMouseLeave}
                          onClick={handleClick}
                        >
                          <i className="ion-ios-gear-outline pe-2"></i>
                          تنظیمات
                        </Link>
                        <Link
                          to="/#"
                          target="_blank"
                          className={`block px-4 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-50 hover:text-primary-500 ${
                            activeIndex === 2 ? "bg-gray-100" : ""
                          }`}
                          //    :className="{ 'bg-gray-100': activeIndex === 2 }"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-2"
                          //    @mouseenter="onMouseEnter($event)"
                          //    @mousemove="onMouseMove($event, 2)"
                          //    @mouseleave="onMouseLeave($event)"
                          //    @click="open = false; focusButton()"
                          onMouseEnter={handleMouseEnter}
                          onMouseMove={(e) => handleMouseMove(e, 2)}
                          onMouseLeave={handleMouseLeave}
                          onClick={handleClick}
                        >
                          <i className="ion-power pe-2"></i>
                          خروج
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
