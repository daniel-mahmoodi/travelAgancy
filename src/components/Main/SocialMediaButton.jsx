import React from "react";
// import { Link } from "react-router-dom";
const SocialMediaButton = () => {
  return (
    <div className="relative group">
      <button
        className="fixed duration-200 bottom-[20px] left-[20px] bg-secondary-400 z-10 text-white cursor-pointer rounded-full h-12 w-12 p-3 flex justify-center items-center"
        id="socialNetwork"
      >
        <ion-icon name="share-social-outline"></ion-icon>
      </button>
      <div className="dropdown-space before:bottom-0 before:top-[100%] fixed opacity-0 top-[400px] left-[20px] group-focus-within:top-[200px] group-focus-within:opacity-100 duration-300 flex-col gap-3 mb-10">
        <div className="hidden z-[100] group-focus-within:flex flex-col gap-3 ">
          <a
            href="/#"
            className="w-12 h-12 cursor-pointer flex justify-center items-center p-3 text-white bg-blue-400 rounded-full flex justify-center items-center"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="/#"
            className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-12 h-12 cursor-pointer flex justify-center items-center p-3 rounded-full text-white "
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="/#"
            className="w-12 h-12 cursor-pointer flex justify-center items-center p-3 text-white bg-blue-500 rounded-full"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="/#"
            className="w-12 h-12 cursor-pointer flex justify-center items-center p-3 text-white bg-green-500 rounded-full"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaButton;
