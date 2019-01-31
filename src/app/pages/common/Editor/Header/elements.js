import styled from "styled-components";

export const DetailHeaderContainer = styled.div`
  min-height: ${props => props.height? props.height : '44.2vh'};
  width: 100%;
  /* background: #297AFF; */
  background: ${props => props.bgUrl? `url("${props.bgUrl}")` : "transparent"};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
  display: flex;
  align-items: center;
  position: relative;
  max-height: 18rem;
  .title {
    font-size: 2rem;
    height: auto;
    color: ${props => props.theme.black.lighten(.15)};
    padding: 1rem 0 3rem 5rem;
    font-weight: 600;
    /* background: rgba(0, 0, 0, .2); */
    width: 100%;

    @media (max-width: 467px) {
      padding: 1rem 1rem 3rem 1rem;
    }
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
  color: #969696;

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
    cursor: pointer;
  }
  .it .tx {
    margin-left: .2rem;
  }
`;

export const BottomTagsContainer = styled(BottomContainer)`
  padding-right: 2rem;
  bottom: 0;
`;