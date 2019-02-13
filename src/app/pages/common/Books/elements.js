import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${props => props.theme.white.lighten(.5)};
  color: ${props => props.theme.black.darken(.8)};
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookListContainer = styled.div`
  justify-content: center;
  padding: 5rem;

  position: relative;
  @media (max-width: 468px) {
    padding: 2rem;
  }
`;

export const BookItem = styled.div`
  text-align: center;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: .5rem;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    opacity: .8;
    background: rgba(200, 200, 200, .8);
  }
  div[class="name"] {
    margin-left: 2rem;
    color: ${props => props.theme.black()}
  }
`;
