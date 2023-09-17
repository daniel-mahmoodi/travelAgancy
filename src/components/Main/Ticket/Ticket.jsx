import React from "react";
import IncreaseDecreaseButton from "./IncreaseDecreaseButton";

const Ticket = ({ data }) => {
  const {
    id,
    name,
    serviceId,
    serviceitle,
    servicePrice,
    commission,
    discount,
    capacity,
    reservedTemporary,
  } = data;
  return (
    <tr className="bg-opacity-30 text-gray-950 bg-blue-50 hover:bg-blue-100 hover:bg-opacity-30">
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4 flex justify-end">
        {reservedTemporary === 0 ? (
          ""
        ) : (
          <span className="inline-block p-1 mr-2 text-xs text-white bg-yellow-500 rounded-md relative top-[-2px]">
            {`رزرو:${reservedTemporary}`}
          </span>
        )}
        <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
          {capacity}
        </span>
      </td>
      <td className="px-6 py-4">{servicePrice}</td>
      <td className="px-6 py-4">{commission}</td>
      <td className="px-6 py-4">{servicePrice + commission}</td>
      <td className="px-6 py-4">
        <IncreaseDecreaseButton data={data} />
      </td>
    </tr>
  );
};

export default Ticket;
