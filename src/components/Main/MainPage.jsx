import React from "react";
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

  const isLoggedIn = true;
  return (
    <div>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/">
              <Navbar />
              <LinkeSide />
              {/* <BreadCumb /> */}
              <EndOfThePage />
              <SocialMediaButton />
              <ScrollBackToTopButton/>
              
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <Main />
            </Route>
            <Route path="/buying-tickets" exact>
              <BuyingTickets />
            </Route>
            <Route path="/profile-sign-in" exact>
              <ProfileInformation />
            </Route>
            <Route path="/wallet" exact>
              <Wallet />
            </Route>
            <Route path="/tickets" exact>
              <TicketInformaitonPageFrontVersion />
            </Route>
          </>
        ) : (
          <>
            <Redirect to="/login-form" />
            <Route path="/login-form" exact>
              <LoginForm />
            </Route>
          </>
        )}
        <Route path="*">
          <Main />
        </Route>
      </Switch>
    </div>
  );
};
export default MainPage;
