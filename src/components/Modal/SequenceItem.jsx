import React, { useEffect, useState } from "react";
import Sans from "./Sans";
import useDateConverter from "../Hooks/useDataConverter";
const SequenceItem = ({ data }) => {
  const { executeDateTime, sansList } = data;
  const [convertedDate, setConvertedDate] = useState("");
  const { Year, dayOfWeek, DayOfMonth, Month } =
    useDateConverter(convertedDate);
  useEffect(() => {
    if (executeDateTime) {
      setConvertedDate(executeDateTime);
    }
  }, [executeDateTime]);

  return (
    <li className="mb-2 mr-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
        <svg
          className="w-2.5 h-2.5 text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
        </svg>
      </span>
      <div className="flex w-full">
        <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
          {`${dayOfWeek} ${DayOfMonth} ${Month} ${Year}`}
        </h3>
        <div className="w-[2000px] relative top-[-10px]">
          <div className="flex justify-between w-full">
            {sansList.map((sansItem) => (
              <Sans sansItem={sansItem} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default SequenceItem;
