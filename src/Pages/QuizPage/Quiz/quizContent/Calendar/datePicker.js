import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
// eslint-disable-next-line
import persian from "react-date-object/calendars/persian";
// eslint-disable-next-line
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/red.css";

import classes from "./datePicker.module.css";

function Date_Picker(props) {
  const [value, setValue] = useState(new Date());

  return (
    <div className={classes.quizContent}>
      <div className={classes.header}>
        <h1 className={classes.headerTitle}>{props.header}</h1>
      </div>
      <div className={classes.calendarContainer}>
        <DatePicker
          value={value}
          onChange={setValue}
          inputClass={classes.customInput}
          className="rmdp-prime red"
          showOtherDays
          editable={false}
          placeholder="click to open"
          // calendar={persian}
          // locale={persian_fa}
        />
      </div>
    </div>
  );
}

export default Date_Picker;
