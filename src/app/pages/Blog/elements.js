import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 80%;
  height: auto;
  background: #B7B5B9;
  position: absolute;
`;

export const ContentContainer = styled.div`
  position: relative;
  padding-bottom: 1rem;
  background: ${props => props.theme.white.lighten(1)};
  padding-top: 2rem;
  @media (max-width: 468px) {
  }
`;

export const SwitchContentContainer = styled.div`
  position: relative;
  height: auto;
  box-sizing: border-box;
  padding: 2rem;
  @media (min-width: 47.5rem) {
    margin-right: 25vw;
    margin-left: 25vw;
    margin-bottom: 0;
    padding: 0;
    margin-top: 0;
    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12); */
  }
`;

export const SideOneContainer = styled.div`
  height: 20vh;
  background: black;
  color: white;
  @media (min-width: 468px) {
    border: 1px dotted black;
    position: absolute;
    top: 0;
    right: 0;
    width: 25vw;
    margin-top: 0;
  }
`;