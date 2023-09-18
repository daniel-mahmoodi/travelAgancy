import React, { Fragment, useEffect, useState } from "react";
import useDateConverter from "../Hooks/useDataConverter";
import { useDispatch, useSelector } from "react-redux";
import { sendRemovedTickets } from "../../store/cart-actions";
import { cartActions } from "../../store/cart-slice";

const Ticket = ({ data, eventTitle }) => {
     const dispatch = useDispatch()
     const token =useSelector((state)=>state.auth.token)
  const executeDateChange = data.executeDate.split(" ")[0].split("/");
  const dateChanges = [
    executeDateChange[2],
    executeDateChange[0],
    executeDateChange[1],
  ].join("-");
  const finalChanges = [dateChanges, data.executeDate.split(" ")[1]].join(" ");
  const [convertedDate, setConvertedDate] = useState("");
  const { Year, dayOfWeek, DayOfMonth, Month } =
    useDateConverter(convertedDate);
  console.log('data in ticket',data);
  useEffect(() => {
    if (finalChanges) {
      setConvertedDate(finalChanges);
    }
  }, [finalChanges]);
  const removeSequenceTicketsHandler =()=>{
     dispatch(cartActions.eraseTicketsFromUserOrder(data.id));
     dispatch(sendRemovedTickets(token,data))
  }
  return (
    <Fragment>
      <p className="font-bold text-center text-gray-500">
        {/* شوی ستارگان | سانس 26 دوشنبه 16 مرداد 1402: */}
        {`${eventTitle}|${data.sansTitle} ${dayOfWeek} ${DayOfMonth} ${Month} ${Year}`}
      </p>
      <table className="w-full mx-auto mt-5 text-sm text-left text-gray-500 mb-3">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 border-b rounded-lg">
          <tr>
            <th scope="col" className="px-6 py-3">
              ردیف
            </th>
            <th scope="col" className="px-6 py-3">
              عنوان
            </th>
            <th scope="col" className="px-6 py-3">
              تعداد
            </th>
            <th scope="col" className="px-6 py-3">
              قیمت
            </th>
            <th scope="col" className="px-6 py-3">
              حذف
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-700 bg-gray-100 border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
            >
              1
            </th>
            <td className="px-6 py-4">{data.ticketTitle}</td>
            <td className="px-6 py-4">{data.count}</td>
            <td className="px-6 py-4">12،700،000</td>
            <td className="px-6 py-4">
              <button onClick={removeSequenceTicketsHandler}>
                <ion-icon
                  class="w-8 h-8 text-red-500"
                  name="trash-outline"
                ></ion-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Ticket;
