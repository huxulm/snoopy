import React from "react";
import _GoHome from "react-icons/lib/go/home";
import styled from "styled-components";

const GoHome = styled(_GoHome)`
  margin-left: 2rem;
  padding: .2rem;
  transition: 200ms all ease-in-out;
  background: rgba(225, 225, 225, .8);
  color: white;
  @media (max-width: 468px) {
    margin-left: .5rem;
  }
  :hover {
    background: rgba(225, 225, 225, .2);
    transform: scale(1.1);
  }
`;

export default function({ onClick }) {
  return <GoHome size="1.2rem" color="white" onClick={onClick}/>;
}