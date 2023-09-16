import React, { useEffect, useState } from "react";
import useDateConverter from "../Hooks/useDataConverter";

const Sans = ({ sansItem }) => {
  const { fromDateTime, toDateTime, title } = sansItem;
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

  return (
    <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
      {` ${title} ${hourFrom}-${hourTo}`}
      <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
        20
      </span>
    </button>
  );
};

export default Sans;
