import React, { useEffect, useState } from "react";
import useDateConverter from "../Hooks/useDataConverter";
import { useDispatch, useSelector } from "react-redux";
import { fetchTicketsbySans } from "../../store/card-actions";
const Sans = ({ sansItem }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { fromDateTime, toDateTime, title, id } = sansItem;
  const [convertedDateFrom, setConvertedDateFrom] = useState("");
  const [convertedDateTo, setConvertedDateTo] = useState("");
  const { hour: hourFrom } = useDateConverter(convertedDateFrom);
  const { hour: hourTo } = useDateConverter(convertedDateTo);
  useEffect(() => {
    if (fromDateTime) {
      setConvertedDateFrom(fromDateTime);
      setConvertedDateTo(toDateTime);
    }
  }, [fromDateTime, toDateTime]);
  const getTicketsHandler = () => {
    dispatch(fetchTicketsbySans(id, token));
  };
  return (
    <button
      onClick={getTicketsHandler}
      className="p-2 text-sm border rounded-md w-[calc(50%-2px)]"
    >
      {` ${title} ${hourFrom}-${hourTo}`}
      <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
        20
      </span>
    </button>
  );
};

export default Sans;
