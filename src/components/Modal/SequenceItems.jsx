import React, { Fragment } from "react";
import SequenceItem from "./SequenceItem";
import { useSelector } from "react-redux";

const SequenceItems = () => {
  const sequencesItems = useSelector((state) => state.card.sequencesItems);
  console.log('sequenceitems',sequencesItems);
  return (
    <Fragment>
      {sequencesItems.map((item) => (
        <SequenceItem data={item} />
      ))}
    </Fragment>
  );
};

export default SequenceItems;
