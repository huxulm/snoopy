import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  padding: 0.6rem;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10rem;

  .wrapper:nth-child(n) {
    border-right: 2px solid transparent;
  }
  .wrapper:last-child {
    border-right: none;
  }

  .link-item:nth-child(n) {
    margin-right: 2rem;
  }
  .link-item:last-child {
    margin-right: 0;
  }

  @media (max-width: 468px) {
    margin-top: 0rem;
  }
`;

export const LinkItemWrapper = styled.div`
  background: rgba(223, 223, 223, .4);
  height: 100%;
  width: 2rem;;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all .3s ease-in-out;
  :hover {
    background: rgba(223, 223, 223, .9);
  }
`;

export const LinkItem = styled.div`
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`;

export const TipContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid white;
  box-sizing: content-box;
`;