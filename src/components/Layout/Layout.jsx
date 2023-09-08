import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import { LinkeSide } from "../Main/LinkeSide";

const Layout = (props) => {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <div className="flex">
        <div>{props.children}</div>

        <LinkeSide />
      </div>
    </Fragment>
  );
};

export default Layout;
