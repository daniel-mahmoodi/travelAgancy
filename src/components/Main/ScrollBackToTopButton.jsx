import React from "react";

const ScrollBackToTopButton = (props) => {
  return (
    <button
      className="fixed bottom-[20px] right-[20px] lg:right-[300px] bg-green-500 z-10"
      id="myScrollbackBtn"
      title="Go to top"
      onClick={() => props.topFunction()}
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
        name="chevron-up-outline"
      ></ion-icon>
    </button>
  );
};

export default ScrollBackToTopButton;
