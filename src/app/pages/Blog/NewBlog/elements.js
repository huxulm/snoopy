import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.white()};
`;