import React from "react";
import "./FaCalendar.css";

function Calendar_Fa(props) {
  return (
    <div className="quizContent">
      <div className="header">
        <h1 className="headerTitle">{props.header}</h1>
      </div>
      <div className="calendarComp">
        <div className="calendar-container">{/* <Calendar /> */}</div>
      </div>
    </div>
  );
}

export default Calendar_Fa;
