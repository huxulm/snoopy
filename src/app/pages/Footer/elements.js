import styled from "styled-components";
import { withScreenSize } from "@vx/responsive";

const Container = withScreenSize(styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  line-height: 2rem;
  /* min-height: 2rem; */
  display: flex;
  background: ${props => props.background? props.background : `linear-gradient(to bottom, #121212 0%, #323232 100%)`};
  flex-direction: row;
  align-content: center;
  justify-content: center;
  justify-items: center;
  padding-top: 4rem;
  color: ${props => props.color? props.color : '#000'};
`);

const CopyRight = styled.div`
  font-size: .6rem;
  text-align: center;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
  line-height: .8rem;
  /* word-wrap: break-word; */
  color: ${props => props.theme.black()};
  white-space: initial;
`;
export { Container, CopyRight };