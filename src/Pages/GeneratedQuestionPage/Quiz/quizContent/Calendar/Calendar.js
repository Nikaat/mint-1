import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

function CalendarComp(props) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="quizContent">
      <div className="header">
        <h1 className="headerTitle">{props.header}</h1>
      </div>
      <div className="calendarComp">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="calendar-caption">
          Selected date: {date.toDateString()}
        </div>
      </div>
    </div>
  );
}

export default CalendarComp;
