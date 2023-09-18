import React, { Fragment } from "react";
import CartItem from "./CartItem";

const CartItems = ({ data }) => {
  console.log("data in cartItems", data);
  return (
    <Fragment>
      {data?.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
    </Fragment>
  );
};

export default CartItems;
