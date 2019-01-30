import styled from "styled-components";

export const Container =  styled.div`
  margin: 2% 5% 2% 5%;
  /* border: 1px dotted lightgray; */
  height: 8rem;
`;

export const Title = styled.div`
  font-size: 1.8rem;
  overflow: hidden;
  font-weight: 500;
  height: 3rem;
  line-height: 3rem;
  color: #121213;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: .5rem .8rem 0 .2rem;
  cursor: pointer;
  :hover {
    text-decoration-line: underline;
  }
  @media (max-width: 468px) {
    font-size: 1.4rem;
  }
`;

export const Summary = Title.extend`
  height: 3rem;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.5rem;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: .2rem;
  color: #3A3C3D;
  :hover {
    text-decoration: none;
  }
  @media (max-width: 468px) {
    font-size: 1rem;
  }
`;

export const Status = styled.div`
  cursor: pointer;
  width: auto;
  display: flex;
  justify-content: flex-end;
  font-style: italic;
  font-size: .6rem;
  margin: .2rem .8rem .5rem .2rem;
  color: #939497;
  a::before,a::after {
    content: " ";
    white-space: pre;
  }
  a:active,a:hover {
    color: #DAE0E4;
    text-decoration: underline; 
  }
`;