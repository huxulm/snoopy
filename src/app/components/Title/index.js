import styled from 'styled-components';

export default styled.h1`
  color: ${props => props.color || 'white'};
  font-size: ${props => props.size || '2.5rem'};
  font-weight: ${props => props.weight || 600 };
  background-color: transparent;
  margin-top: 0;
  border: none;
  outline: none;
  text-align: center;
`;
