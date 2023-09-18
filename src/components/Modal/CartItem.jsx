import React, { Fragment } from "react";
import Ticket from "./Ticket";

const CartItem = ({ data }) => {
  return (
    <Fragment>
      <div className="my-8">
        <p className="mb-8 font-bold">بلیط های افزوده شده به سبد خرید :</p>
        {/* <!-- subject --> */}
        {/* <p className="font-bold text-center text-gray-500"> */}
          {/* شوی ستارگان | سانس 26 دوشنبه 16 مرداد 1402: */}
          {/* {data.eventTitle} */}
        {/* </p> */}

        {data.tickets.map((ticket) => (
          <Ticket key={ticket.id} data={ticket} eventTitle={data.eventTitle}/>
        ))}
      </div>
    </Fragment>
  );
};

export default CartItem;
