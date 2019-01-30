import styled from "styled-components";
import Row from "common/components/flex/Row";

export const Container = styled(Row)`
  width: 100%;
  height: 3rem;
  background: ${props => props.theme.white.lighten(1)};
  opacity: ${props => `${props.opacity}`};
  position: sticky;
  top: 0;
`;