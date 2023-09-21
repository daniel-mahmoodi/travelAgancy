import React, { Fragment } from "react";
import SequenceItem from "./SequenceItem";

const SequenceItems = ({ data }) => {
  console.log("sequenceitems", data);
  return (
    <Fragment>
      {data.map((item) => <SequenceItem data={item} />)}
    </Fragment>
  );
};

export default SequenceItems;
