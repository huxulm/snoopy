import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  @media screen and (max-width: 468px) {
    box-shadow: none;
  }
`;
