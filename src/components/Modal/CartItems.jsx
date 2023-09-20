import React, { Fragment } from "react";
import CartItem from "./CartItem";

const CartItems = ({ data }) => {
  // console.log("gr data in cartItems", data);

  // Create a Map to store the grouped items
  const groupedItems = new Map();

  // Iterate through the tickets array
  for (const ticket of data.tickets) {
    const key = `${ticket.sansId}-${ticket.executeDate}`;
    // console.log("groupedArray key", key, ticket);
    // Check if the key exists in the Map
    if (!groupedItems.has(key)) {
      // If not, create a new array for this key
      groupedItems.set(key, []);
    }

    // Add the ticket to the corresponding group
    groupedItems.get(key).push(ticket);
  }

  // Convert the Map values to an array of grouped items
  const groupedArray = Array.from(groupedItems.values());

  console.log("groupedArray", groupedArray, data.eventTitle);
  return (
    <Fragment>
      <div className="my-8">
        <p className="mb-8 font-bold">بلیط های افزوده شده به سبد خرید :</p>
        {groupedArray?.map((item) => (
          <CartItem data={item} eventTitle={data.eventTitle} />
        ))}
      </div>
    </Fragment>
  );
};

export default CartItems;
