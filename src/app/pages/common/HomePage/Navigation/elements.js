import styled from "styled-components";
import Title from "app/components/Title";

export const Container = styled.div`
  width: 26.67%;
  height: auto;
  background: rgba(233, 236, 239, .6);
  border: 20px solid transparent;
  box-sizing: content-box;
  box-shadow: 5px 10px 25px 6px rgba(233, 236, 239, .5);
  @media (max-width: 1300px) {
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    background: rgba(233, 236, 239, .2);
    margin-top: 25%;
  }
`;

export const LangSelectContainer = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: ${props => props.theme.black.lighten(.5)};
  color: white;
  height: 1.5rem;
  text-align: center;
  align-items: center;
  display: flex;
  padding: .1rem;
  border: ${props => `1px solid #ACACAC`};
  border-radius: .3rem;
`;

export const NavList = styled.div`
  list-style: none;
  width: 100%;
  height: 100%;
  background: transparent;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  @media (max-width: 468px) {
    margin-top: 8rem;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  height: 3rem;
  text-align: center;
  color: ${props => props.theme.black.lighten(.1)};
  align-content: center;
  line-height: 3rem;
  text-align: center;
  background: transparent;
  text-decoration: underline;
  justify-content: center;
  font-style: italic;
  cursor: pointer;
  border-left: 5px solid transparent;
  transition: all .2s ease-in-out;
  font-weight: 400;

  &:hover {
    background: rgba(219, 228, 255, .6);
    text-decoration: none;
    border-left: 5px solid rgb(219, 228, 255);
  }
  @media (max-width: 468px) {
    font-size: 1.5rem;
  }
`;

export const MainTitle = styled(Title)`
    font-size: 2rem;
    color: ${props => props.theme.black.darken(.1)};
`;
export const SecondTitle = styled(Title)`
    font-size: 1.2rem;
    color: ${props => props.theme.black.lighten(.1)};
`;