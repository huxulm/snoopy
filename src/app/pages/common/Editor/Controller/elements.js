import styled from "styled-components";
import Centered from "common/components/flex/Center";
import Row from "common/components/flex/Row";
import Button from "app/components/Button";

export const Container = styled(Row)`
  position: sticky;
  top: 0;
  z-index: 10;
  height: auto;
  background: ${props => props.theme.gray.lighten(0.5)};
  border: ${props => `2px solid ${props.theme.gray.lighten(0.5)}`};
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`;

export const CtrlGroupWrapper = styled(Centered)`
  height: 2.5rem;
  width: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: ${props => `1px solid lightgray`};
`;

export const CtrlItemWrapper = styled(Centered)`
  height: 100%;
  width: 2.5rem;
  background: ${props => props.theme.primary.lighten(.5)};
  transition: .2s all ease-in-out;
  :hover {
    background: ${props => props.theme.primary.darken(.1)};
    transform: scale(1.1);
  }
`;

export const StyledButton = styled(Button)`
  color: ${props => props.theme.black.greyscale(0)};
  :hover {
    background: ${props => props.theme.primary.greyscale(.5)};
    color: ${props => props.theme.black.greyscale(.5)};
  }
`;

export const CtrlContentWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;