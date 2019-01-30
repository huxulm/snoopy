import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(250, 250, 250);
  overflow: hidden;
`;

export const DividerBar = styled.div`
  display: flex;
  height: 2rem;
  padding: 1rem;
  line-height: 2rem;
  font-size: 1.5rem;
  font-style: italic;
  background: ${props => props.theme.white.lighten(1)};
  border-bottom: 1px solid ${props => props.theme.gray()};
`;

export const ContentContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;
