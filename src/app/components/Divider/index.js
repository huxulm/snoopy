import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.color? props.color : 'white'};
  height: ${props => props.height? props.height : '2px'};
  margin: ${props => props.margin? props.margin : '0'};
  width: 100%;
`;