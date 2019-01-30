import React from "react";
import _GoBack from "react-icons/lib/io/ios-arrow-back";
import styled from "styled-components";

const GoBack = styled(_GoBack)`
  margin-left: 2rem;
  padding: .2rem;
  transition: 200ms all ease-in-out;
  background: rgba(225, 225, 225, .4);
  @media (max-width: 468px) {
    margin-left: .5rem;
  }
  :hover {
    background: rgba(225, 225, 225, .2);
    transform: scale(1.1);
  }
`;

export default function({ onClick }) {
  return <GoBack style={{ height: '1.5rem', width: '1.5rem' }} size="1.2rem" color="#D3D9E4" onClick={onClick}/>;
}