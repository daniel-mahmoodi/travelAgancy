import React, { Fragment, useEffect, useState } from "react";
import Ticket from "./Ticket";
import useDateConverter from "../../Hooks/useDataConverter";

const CartItem = ({ data, eventTitle }) => {
  const [convertedDate, setConvertedDate] = useState("");
  const { Year, dayOfWeek, DayOfMonth, Month } =
    useDateConverter(convertedDate);

  const executeDateChange = data[0].executeDate.split(" ")[0].split("/");
  const dateChanges = [
    executeDateChange[2],
    executeDateChange[0],
    executeDateChange[1],
  ].join("-");
  const finalChanges = [dateChanges, data[0].executeDate.split(" ")[1]].join(
    " "
  );
  useEffect(() => {
    if (finalChanges) {
      setConvertedDate(finalChanges);
    }
  }, [finalChanges]);
  return (
    <Fragment>
      <p className="font-bold text-center text-gray-500">
        {/* شوی ستارگان | سانس 26 دوشنبه 16 مرداد 1402: */}
        {`${eventTitle}|${data[0].sansTitle} ${dayOfWeek} ${DayOfMonth} ${Month} ${Year}`}
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

        {data.map((ticket, index) => (
          <Ticket key={ticket.id} data={ticket} row={index} />
        ))}
      </table>
    </Fragment>
  );
};

export default CartItem;
