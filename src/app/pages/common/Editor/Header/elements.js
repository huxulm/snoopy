import styled from "styled-components";

export const DetailHeaderContainer = styled.div`
  height: 38.2vh;
  width: 100%;
  /* background: #297AFF; */
  background: ${props => props.bgUrl? `url("${props.bgUrl}")` : "#B7B5B9"};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
  display: flex;
  align-items: center;
  position: relative;
  .title {
    font-size: 2rem;
    height: auto;
    color: white;
    padding: 0 1rem 0 1rem;
    font-weight: 600;
  }

  .title::before {
    color: #FFF;
  }
  .title::before:hover {
    color: red;
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  box-sizing: border-box;
  bottom: 1.8rem;
  padding: .5rem;
  color: #565a5f;

  .it:nth-child(n) {
    margin-left: 1rem;
  }
  .ed {
    display: flex;
    align-items: center;
    transition: .2s all ease-in-out;
    border: .1em solid transparent;
  }
  .ed:hover {
    background: white;
    padding: .1em;
    border: none;
    box-sizing: content-box;
  }
  .it {
    display: flex;
    flex-direction: row;
  }
  .it .tx {
    margin-left: .2rem;
  }
`;

export const BottomTagsContainer = BottomContainer.extend`
  bottom: 0;
`;