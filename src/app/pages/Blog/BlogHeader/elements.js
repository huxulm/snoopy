import styled from "styled-components";
import Row from "common/components/flex/Row";

export const Container = styled(Row)`
  width: 100%;
  height: 3.5rem;
  background: ${props => props.theme.white.lighten(1)};
  z-index: 10;
  vertical-align: middle;
  position: sticky;
  top: 0;
  padding-left: 1rem;
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.theme.gray.lighten(.5)};
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;

export const Title = styled.div`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
  align-items: center;
  line-height: 1.25rem;
  padding: 0.125rem;
  font-weight: 800;
  font-size: 1rem;
  margin-left: .5rem;
  ::before {
    content: ' ';
  }
  :hover {
    color: #FC9C89;
    text-decoration: underline;
  }
`;

export const DotIndicator = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-left: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  background: ${props => props.hasLogged? props.theme.green() : props.theme.gray()};
`;