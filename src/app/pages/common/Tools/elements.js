import styled, { injectGlobal } from "styled-components";

// eslint-disable-next-line
injectGlobal`
  .Resizer {
    background: none;
    opacity: 1;
    z-index: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
  }
 
  .Resizer:hover {
    -webkit-transition: all 2s ease;
    transition: all 2s ease;
  }
 
  .Resizer.horizontal {
    height: 5px;
    margin: -5px 0;
    border-top: 5px solid rgba(255, 255, 255, 0.5);
    border-bottom: 5px solid rgba(255, 255, 255, 0.5);
    cursor: row-resize;
    width: 100%;
  }

  .Resizer.horizontal:hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.vertical {
    width: 5px;
    margin: 0 -5px;
    border-left: 5px solid rgba(153, 153, 153, 1);
    border-right: 5px solid rgba(153, 153, 153, 1);
    cursor: col-resize;
  }

  .Resizer.vertical:hover {
    border-left: 5px solid rgba(153, 153, 153, 1);
    border-right: 5px solid rgba(153, 153, 153, 1);
  }
  .Resizer.disabled {
    cursor: not-allowed;
  }
  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${props => props.theme.white.lighten(.9)};
  color: ${props => props.theme.black.darken(.8)};
  position: fixed;
`;

export const ToolsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 15rem;
  grid-template-rows: 8rem 8rem;
  grid-gap: 1rem;
  padding: 2rem;
  @media (max-width: 468px) {
    padding: 5rem;
    grid-template-columns: 15rem;
  }
`;

export const ToolsItem = styled.div`
  background-color: #8C8C8C;
  background-image: linear-gradient(130deg, black 0%, #8C8C8C 85%, white 100%);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #fff;
  border-radius: 4px;
  border: 6px solid #8C8C8C;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    opacity: .8;
  }
`;
