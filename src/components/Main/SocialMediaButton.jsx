import React from "react";
// import { Link } from "react-router-dom";
const SocialMediaButton = () => {
  return (
    <div className="relative group">
      <button
        className="fixed duration-200 bottom-[20px] left-[20px] bg-green-400 z-10"
        id="socialNetwork"
        style={{
          display: "block",
          position: "fixed",
          // bottom: "20px",
          // right: "30px",
          // zIndex: "99",
          border: "none",
          outline: "none",
          // backgroundColor: "green",
          color: "white",
          cursor: "pointer",
          padding: "15px",
          borderRadius: "50%",
        }}
      >
        <ion-icon
          className="w-6 h-6 p-2 text-white rounded-full bg-secondary-400"
          name="share-social-outline"
        ></ion-icon>
      </button>
      <div className="dropdown-space before:bottom-0 before:top-[100%] fixed opacity-0 top-[400px] left-[20px] group-focus-within:top-[200px] group-focus-within:opacity-100 duration-300 flex-col gap-3 mb-10">
        <div className="hidden z-[100] group-focus-within:flex flex-col gap-3">
          <a href="/#">
            <ion-icon
              className="w-6 h-6 p-2 text-white bg-blue-400 rounded-full"
              name="logo-twitter"
            ></ion-icon>
          </a>
          <a href="/#">
            <ion-icon
              className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 rounded-full text-white h-6 w-6"
              name="logo-instagram"
            ></ion-icon>
          </a>
          <a href="/#">
            <ion-icon
              className="w-6 h-6 p-2 text-white bg-blue-500 rounded-full"
              name="logo-facebook"
            ></ion-icon>
          </a>
          <a href="/#">
            <ion-icon
              className="w-6 h-6 p-2 text-white bg-green-500 rounded-full"
              name="logo-whatsapp"
            ></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaButton;
