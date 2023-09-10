import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { LinkeSide } from "./LinkeSide";
import Main from "./Main";
import EndOfThePage from "./EndOfThePage";
import SocialMediaButton from "./SocialMediaButton";
import ScrollBackToTopButton from "./ScrollBackToTopButton";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import BuyingTickets from "../Ticket/BuyingTickets";
import ProfileInformation from "../Auth/ProfileInformation";
import TicketInformaitonPageFrontVersion from "../Ticket/TicketInformaitonPageFrontVersion";
import Wallet from "../Wallet/Wallet";
import LoginForm from "../Auth/LoginForm";
const MainPage = () => {
  //
  // State to manage the button's visibility
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
  const isLoggedIn = true;
  return (
    <div>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/">
              <Navbar />
              {/* <!-- ====== side bar starts here ==== --> */}
              <LinkeSide />
              {/* <BreadCumb /> */}
              {/* <!-- === main content starts here ====  --> */}
              {/* <!-- === end of the page === --> */}
              <EndOfThePage />
              {/* <!-- ==== social media button ====== --> */}
              <SocialMediaButton />
              {isButtonVisible && (
                <ScrollBackToTopButton topFunction={topFunction} />
              )}
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Main />
            </Route>
            <Route path="/buying-tickets">
              <BuyingTickets />
            </Route>
            <Route path="/profile-sign-in">
              <ProfileInformation />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/tickets">
              <TicketInformaitonPageFrontVersion />
            </Route>
            <Route path="*">
              <Redirect path="/home" />
            </Route>
          </>
        ) : (
          <>
            <Redirect to="/login-form" />
            <Route path="/login-form">
              <LoginForm />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
};
export default MainPage;
