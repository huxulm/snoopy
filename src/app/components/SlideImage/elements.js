import styled, { keyframes } from "styled-components";
const imageAnimation = keyframes`
  0% {
	    opacity: 0;
	    animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    transform: scale(1.05);
	    animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    transform: scale(1.1);
	}
	25% {
	    opacity: 0;
	    transform: scale(1.1);
	}
	100% { opacity: 0 }
`;

export const Container = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  z-index: -1;
  li {
    list-style: none;
  }
  ::after {
    content: '';
    background: transparent url('') repeat top left;
  }
`;

export const ItemContainer = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
  opacity: 0;
  z-index: 0;
  backface-visibility: hidden;
  animation: ${imageAnimation} ${props => props.duration? props.duration : '36s'} linear infinite 0s;
`;
