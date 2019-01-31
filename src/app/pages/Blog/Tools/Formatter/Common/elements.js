import styled from "styled-components";

export const Container  = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.white.lighten(1)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 5%;
  @media (max-width: 468px) {
    padding: 2%;
  }
`;

export const FormatterArea = styled.textarea`
  width: 100%;
  padding: 20px;
  border: 0;
  box-sizing: border-box;
  font-size: 1.3em;
  resize: none;
  outline: none;
  line-height: 1.3;
  font-family: inherit;
`;