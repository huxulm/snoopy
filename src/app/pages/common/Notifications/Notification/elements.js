import styled from 'styled-components';
// import theme from 'common/theme';

export const Container = styled.div`
  position: relative;
  width: 300px;
  padding: 1rem 0;

  color: white;
  border-radius: 2px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  border-left: 2px solid transparent;
  border-color: ${props => {
    if (props.type === 'error') return props.theme.red.darken(0.2)();
    if (props.type === 'warning') return props.theme.primary.darken(0.2);
    if (props.type === 'success') return props.theme.green();
    return props.theme.secondary();
  }};

  background-color: ${props => props.theme.background2.darken(0.2)()};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  vertical-align: middle;
  line-height: 1.15;
  box-sizing: border-box;
  color: ${(props) => props.theme.white()};
  font-size: 1rem;

  span {
    flex: 11;
  }

  svg {
    flex: 1;
  }
`;

export const Title = styled.span`
  display: inline-block;
  font-weight: 400;
  margin: 0;
`;

export const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: auto;
`;

export const Button = styled.div`
  transition: 0.3s ease all;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  background-color: ${props => {
    if (props.type === 'error') return props.theme.redBackground.lighten(0.2);
    if (props.type === 'warning') return props.theme.primary.darken(0.5);
    return props.theme.secondary.darken(0.1);
  }};
  font-weight: 500;

  &:hover {
    background-color: ${props => {
      if (props.type === 'error') return props.theme.redBackground.lighten(0.1);
      if (props.type === 'warning') return props.theme.primary.darken(0.6);
      return props.theme.secondary.darken(0.2);
    }};
  }
`;

export const CloseIconHandler = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  color: white;
  cursor: pointer;
`;
