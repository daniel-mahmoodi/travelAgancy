import React, { Fragment } from "react";
import { LinkeSide } from "../SummaryDashboard/LinkeSide";

const Layout = (props) => {
  return (
    <Fragment>
      <div className="flex">
        <div>{props.children}</div>

        <LinkeSide />
      </div>
    </Fragment>
  );
};

export default Layout;
