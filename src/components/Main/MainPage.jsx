import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { LinkeSide } from "./LinkeSide";
import BreadCumb from "./BreadCumb";
import Main from "./Main";
import EndOfThePage from "./EndOfThePage";
import SocialMediaButton from "./SocialMediaButton";
import ScrollBackToTopButton from "./ScrollBackToTopButton";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import BuyingTickets from "../Ticket/BuyingTickets";
import ProfileInformation from '../Auth/ProfileInformation';
import { Wallet } from "react-ionicons";
import TicketInformaitonPageFrontVersion from "../Ticket/TicketInformaitonPageFrontVersion";

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

  return (
    <div
      
    >
      <Navbar />
      {/* <!-- ====== side bar starts here ==== --> */}
      <LinkeSide />
      {/* <BreadCumb /> */}
      {/* <!-- === main content starts here ====  --> */}
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/home">
          <Main />
        </Route>
        <Route path='/buyingTickets'> <BuyingTickets/> </Route>
        <Route path='/profile-sign-in'> <ProfileInformation/> </Route>
        <Route path='/wallet'> <Wallet/> </Route>
        <Route path='/tickets'> <TicketInformaitonPageFrontVersion/> </Route>
      </Switch>
      {/* <!-- === end of the page === --> */}
      <EndOfThePage />
      {/* <!-- ==== social media button ====== --> */}
      <SocialMediaButton />
      {isButtonVisible && <ScrollBackToTopButton topFunction={topFunction} />}
    </div>
  );
};
export default MainPage;
