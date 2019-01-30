import styled from "styled-components";

export const DetailHeaderContainer = styled.div`
  height: 30vh;
  width: 100%;
  /* background: #297AFF; */
  background: #B7B5B9;
  display: flex;
  align-items: center;
  .title {
    font-size: 2rem;
    height: auto;
    color: white;
    font-weight: 600;
    margin-left: 1rem;
  }

  .title::before {
  }
  .title::before:hover {
    color: red;
  }
`;