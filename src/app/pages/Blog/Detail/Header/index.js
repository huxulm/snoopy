import React from "react";
import { DetailHeaderContainer } from "./elements";

export default ({ title, bgUrl }) => {
  return (
    <DetailHeaderContainer bg={bgUrl}>
      <div className="title">{title}</div>
    </DetailHeaderContainer>
  );
};
