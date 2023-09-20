import React, { Fragment } from "react";
import CartItems from "./CartItems";

const Cart = ({ data }) => {
//   console.log("gr cart", data);
  return (
    <Fragment>
      {data.map((items) => (
        <CartItems data={items} />
      ))}
    </Fragment>
  );
};

export default Cart;
