import React from "react";

export default function({ margin, index, photo, direction, top, left, onClick }) {

  return (
    <img src={photo.src}></img>
  );
}
