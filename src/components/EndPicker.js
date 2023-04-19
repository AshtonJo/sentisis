import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EndPick = () => {
  const [endDate, setEndDate] = useState();
  const endDateHandler = (date) => {
    setEndDate(date);
  };
  return (
    <DatePicker
      value={endDate}
      selected={endDate}
      onChange={endDateHandler}
      dateFormat={"yyyyMMdd"}
      minDate={new Date("2021-05-26")}
      showMonthDropdown
      showYearDropdown
      scrollableMonthYearDropdown
    />
  );
};

export default EndPick;
