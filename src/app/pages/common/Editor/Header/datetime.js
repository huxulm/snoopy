import FaCalendar from "react-icons/lib/fa/calendar";
import React from "react";

export default function({ time = "2018-12-13", onClick }) {
  return (
    <div onClick={onClick} className="it">
      {" "}
      <FaCalendar color={"#969696"}/>
      <div className="tx">{time}</div>
    </div>
  );
}
