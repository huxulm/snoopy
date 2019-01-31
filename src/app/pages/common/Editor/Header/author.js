import FaUser from "react-icons/lib/fa/user";
import React from "react";

export default function ({ name = "Jackdon", onClick }) {
  return (
    <div onClick={onClick} className="it">
      <FaUser color={"#969696"}/>
      <div className="tx">{name}</div>
    </div>
  );
}
