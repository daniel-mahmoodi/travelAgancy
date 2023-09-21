import React from "react";
import { ListOfItemsInNav } from "./ListOfItemsInNav";
import { uiActions } from "../../store/Ui-slice";
import { useDispatch } from "react-redux";
import Search from "./Search/Search";
import MessageIcon from "./MessageIcon";
import ProfileDropdown from "./ProfileDropdown";
import MobileMenuBtn from "./MobileMenuBtn";
import LogoInNavbar from "./LogoInNavbar";
function Navbar() {
  const dispatch = useDispatch();

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
                <LogoInNavbar />
                <div className="hidden lg:ml-10 lg:block">
                  <ListOfItemsInNav />
                </div>
              </div>
              <Search />
              <div className="flex lg:hidden">
                <MobileMenuBtn
                  toggleSideBarVisibilityHandler={
                    toggleSideBarVisibilityHandler
                  }
                />
              </div>
              <div className="hidden lg:ms-4 lg:block">
                <div className="flex items-center">
                  <MessageIcon />
                  <ProfileDropdown />
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
