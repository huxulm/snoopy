import FaEdit from "react-icons/lib/fa/edit";
import React from "react";

export default function ({ name = "Jackdon", onClick }) {
  return (
    <div onClick={onClick} className="it ed">
      <FaEdit />
    </div>
  );
}
