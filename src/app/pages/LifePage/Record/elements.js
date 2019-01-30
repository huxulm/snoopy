import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  height: auto;
  margin-top: 2rem;
  background: ${props => props.theme.white.lighten(.5)};
  overflow: scroll;
  @media (max-width: 468px) {
    margin-top: 0;
    width: 100vw;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 2rem;
  line-height: 2rem;
  @media (max-width: 468px) {
    padding: .5rem;
  }
  background: ${props => props.theme.white.lighten(1)}
`;
