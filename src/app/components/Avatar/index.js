import React from "react";
import styled from "styled-components";

const Container = styled.img`
  height: ${props => (props.size ? props.size : "48px")};
  /* width: ${props => (props.size ? props.size : "48px")}; */
  transform: scale(.75);
  border-radius: 50%;
`;
export default ({ src, size }) => {
  return <Container src={src} size={size} />;
};
