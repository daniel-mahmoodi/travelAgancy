import React, { Fragment, useEffect, useState } from "react";

const ScrollBackToTopButton = () => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  // Function to handle scrolling
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  };

  // Function to scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  //.

  return (
    <Fragment>
      {isButtonVisible && (
        <button
          className="fixed bottom-[20px] right-[20px] lg:right-[300px] bg-green-500 z-10"
          id="myScrollbackBtn"
          title="Go to top"
          onClick={() => topFunction()}
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
      )}
    </Fragment>
  );
};

export default ScrollBackToTopButton;
