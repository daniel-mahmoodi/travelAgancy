import React from "react";
import Navbar from "../Navbar/Navbar";
import { SideBar } from "./SideBar";
import SummaryDashboard from "./SummaryDashboard";
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
import Breadcrumbs from "./BreadCumb";
import SupportingTickets from "../Ticket/SupportingTickets";
const MainPage = () => {
  const isLoggedIn = true;
  return (
    <div>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/">
              <Navbar />
              <Breadcrumbs />
              <SideBar />
              {/* <BreadCumb /> */}

              <SocialMediaButton />
              <ScrollBackToTopButton />
            </Route>
            <Route path="/" exact>
              <Redirect to="/summary-dashboard" />
            </Route>
            <Route path="/summary-dashboard" exact>
              <SummaryDashboard />
            </Route>
            <Route path="/buying-tickets" exact>
              <BuyingTickets />
            </Route>
            <Route path="/user-profile" exact>
              <ProfileInformation />
            </Route>
            <Route path="/wallet" exact>
              <Wallet />
            </Route>
            <Route path="/tickets" exact>
              <TicketInformaitonPageFrontVersion />
            </Route>
            <Route path="/summary-dashboard/supporting/supporting-tickets" exact>
              <SupportingTickets />
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
          <SummaryDashboard />
        </Route>
      </Switch>
      <EndOfThePage />
    </div>
  );
};
export default MainPage;
