import styled from 'styled-components';
import delayEffect from 'common/utils/animation/delay-effect';
import Row from "common/components/flex/Row";

export const Container = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.75);

  ${delayEffect(0)};
  top: 35px;

  right: 0;

  min-width: 200px;

  z-index: 20;
`;

export const MenuItem = styled(Row)`
  padding-left: .5rem;
  transition: 0.3s ease all;
  border-left: 2px solid transparent;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  background: #18191C;
  color: white;
  text-align: center;
  border-bottom: 1px solid rgba(112, 146, 161, .6);
  :hover {
    border-left: 2px solid #39A9FF;
    background-color: rgba(112, 146, 161, .8);
  }
`;