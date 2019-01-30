import styled from "styled-components";
import { withScreenSize } from "@vx/responsive";

const Container = withScreenSize(styled.div`
  position: absolute;
  width: 100%;
  height: 6rem;
  line-height: 2rem;
  /* min-height: 2rem; */
  display: flex;
  background: ${props => props.background? props.background : '#000'};
  flex-direction: row;
  align-content: center;
  justify-content: center;
  justify-items: center;
  padding-top: 4rem;
  color: ${props => props.color? props.color : '#FFF'};
`);

const CopyRight = styled.div`
  font-size: .6rem;
  text-align: center;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
  line-height: .8rem;
  /* word-wrap: break-word; */
  white-space: initial;
`;
export { Container, CopyRight };