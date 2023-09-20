import React, { Fragment, useEffect, useState } from "react";
import useDateConverter from "../Hooks/useDataConverter";
import { useDispatch, useSelector } from "react-redux";
import { sendRemovedTickets } from "../../store/cart-actions";
import { cartActions } from "../../store/cart-slice";
import { ScaleLoader } from "react-spinners";

const Ticket = ({ data,row}) => {
  console.log('gr',row+1);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
 ;
  const deletingTicketId = useSelector((state) => state.cart.deletingTicketId);
  console.log("deletingTicketId", deletingTicketId, data.id);

  
 
 
  console.log("data in ticket", data);
 
  const removeSequenceTicketsHandler = () => {
    //  dispatch(cartActions.eraseTicketsFromUserOrder(data.id));
    dispatch(sendRemovedTickets(token, data));
  };
  return (
    <Fragment>
      <tbody>
        <tr className="text-gray-700 bg-gray-100 border-b">
          <th
            scope="row"
            className="px-6 py-4  text-gray-700 whitespace-nowrap"
          >
            {row+1}
          </th>
          <td className="px-6 py-4">{data.ticketTitle}</td>
          <td className="px-6 py-4">{data.count}</td>
          <td className="px-6 py-4">12،700،000</td>
          <td className="px-6 py-4">
            <button onClick={removeSequenceTicketsHandler}>
              {deletingTicketId === data.id ? (
                <ScaleLoader color="#e56d6d" />
              ) : (
                <ion-icon
                  class="w-8 h-8 text-red-500"
                  name="trash-outline"
                ></ion-icon>
              )}
            </button>
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
};

export default Ticket;
