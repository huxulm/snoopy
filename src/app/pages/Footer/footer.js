import styled from "styled-components";
import { withScreenSize } from "@vx/responsive";

const Container = withScreenSize(styled.div`
  position: relative;
  bottom: 2rem;
  width: 100%;
  height: ${props => props.screenHeight? `${props.screenHeight / 15}px` : '40px'};
  line-height: ${props => props.screenHeight? `${props.screenHeight / 15}px` : '40px'};
  min-height: 2rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  justify-items: center;
`);

const CopyRight = styled.div`
  font-size: .6rem;
  color: #FFF;
  text-align: center;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
  line-height: .8rem;
  /* word-wrap: break-word; */
  white-space: initial;
`;
export { Container as Footer, CopyRight };