import React, { Fragment } from "react";
import Ticket from "./Ticket";
import { useSelector } from "react-redux";

const TicketsInSequenceModal = () => {
  const tickets = useSelector((state) => state.card.tickets);
  console.log("tickets", tickets);
  return (
    <Fragment>
      {tickets && tickets.map((ticket) => <Ticket key={ticket.id} data={ticket} />)}
    </Fragment>
  );
};

export default TicketsInSequenceModal;
