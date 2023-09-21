import { useEffect, useState } from "react";
import moment from "jalali-moment";

const useDateConverter = (date) => {
  const [convertedDate, setConvertedDate] = useState({
    Year: "",
    dayOfWeek: "",
    DayOfMonth: "",
    TimeOfDay: "",
    hour: "",
    minute: "",
    second: "",
    Month: "",
  });
  useEffect(() => {
    if (date) {
      const gmtDateTime = moment.utc(date, "YYYY-MM-DD HH:mm:ss");
      const iranDateTime = gmtDateTime.local().locale("fa");
      const iranDateTimeFormatted = iranDateTime.format(
        "jMM/jDD/jYYYY HH:mm:ss"
      );
      const Year = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("YYYY");
      const dayOfWeek = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("dddd");
      const Month = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("MMMM");
      const TimeOfDay = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("HH:mm:ss");
      const hour = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("HH");
      const minute = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("mm");
      const second = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("ss");
      const DayOfMonth = moment(iranDateTimeFormatted, "jMM/jDD/jYYYY HH:mm:ss")
        .locale("fa")
        .format("D");

      setConvertedDate({
        Year,
        dayOfWeek,
        DayOfMonth,
        TimeOfDay,
        hour,
        minute,
        second,
        Month,
      });
    }
  }, [date]);

  return convertedDate;
};

export default useDateConverter;
