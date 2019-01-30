import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: auto;
  margin: 0 25% 0 25%;
  overflow: scroll;
  background: ${props => props.theme.white.lighten(1)};
  font-size: 20px;
  @media (max-width: 468px) {
    padding: 5px;
    margin: 0;

    .md-view img {
      width: 50%;  
    }
  }
`;

export const DownloadButtonWrapper = styled.div`
  position: relative;
  position: fixed;
  top: 5rem;
  right: calc(25% + 1rem);
  cursor: pointer;
  @media (max-width: 468px) {
    top: 2rem;
    right: 1rem;
  }
`;

export const DownloadButton = styled.div`
  /* position: sticky; */
  border-radius: 50%;
  background: black;
  height: 3rem;
  width: 3rem;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  overflow: hidden;
  transition: .2s all ease-in-out;
  box-shadow: 10px 10px 85px 0px rgba(101,135,194,1);
  :hover {
    background: #5B86C5;
  }
`;