import styled from "styled-components";

export const ListContainer = styled.div`
  overflow: auto;
  /* padding-top: 2rem; */
  .list-item:nth-child(n) {
    margin-top: 4rem;
  }
  .list-item:first-child {
    margin-top: 2rem;
  }
  .list-item:last-child {
    margin-bottom: 2rem;
  }
  @media (max-width: 468px) {
    width: 100%;
    margin-top: -1rem;
    padding-top: 1rem;
    .list-item:nth-child(n) {
      margin-top: 1rem;
      border-bottom: 1px solid lightgray;
      padding-bottom: 1rem;
    }
    .list-item:first-child {
      margin-top: 1rem;
    }
    .list-item:last-child {
      margin-bottom: 3rem;
      border-bottom: none;    
      padding-bottom: 0;
    }
  }
`;

export const BtnGroupContainer = styled.div`
  display: flex;
  justify-items: center;
  float: right;
  margin: 3rem;
  justify-content: space-between;
  /* width: 100%; */
`;

export const BtnLoader = styled.div`
  cursor: pointer;
  border: 1px solid #DFDEDE;
  border-radius: 2px;
  background: white;
  width: auto;
  padding: .3rem;
  align-content: center;
  line-height: 2rem;
  height: 2rem;
  color: #000;
  font-weight: bold;
  text-align: center;
  font-size: .5rem;
  :hover {
    background: #DFDEDE;
  }

  @media (max-width: 467px) {
    height: auto;
    line-height: normal;
  }
`;