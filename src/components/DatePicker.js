import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
  const [startDate, setStartDate] = useState("");
  const startDateHandler = (date) => {
    // console.log(setStartDate(date));
    setStartDate(date);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={startDateHandler}
      dateFormat={"yyyyMMdd"}
      minDate={new Date("2021-05-21")}
      showMonthDropdown
      showYearDropdown
      scrollableMonthYearDropdown
    />
  );
};

export default DatePick;
