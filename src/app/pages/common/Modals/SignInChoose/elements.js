import styled from "styled-components";
import Row from "common/components/flex/Row";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.2rem;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
`;

export const SignInItem = styled(Row)`
  background: transparent;
  padding: .8rem;
  height: 3rem;
  font-size: 1rem;
  justify-content: center;
  transition: all 100ms ease-in-out;
  &:hover {
    background: lightgray;
    font-size: 1.2rem;
  }
`;