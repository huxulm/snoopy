import FaUser from "react-icons/lib/fa/user";
import React from "react";

export default function ({ name = "Jackdon", onClick }) {
  return (
    <div onClick={onClick} className="it">
      <FaUser />
      <div className="tx">{name}</div>
    </div>
  );
}
