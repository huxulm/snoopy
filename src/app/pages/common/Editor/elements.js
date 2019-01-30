import styled from "styled-components";

export const EditorContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: ${props => props.isFull? 0 : '0 25% 0 25%'};
  z-index: 1;
  transition: .2s all ease-in-out;
  padding-bottom: 3rem;
  /* background: #2E2E30; */

  @media (max-width: 468px) {
    padding-left: 0;
    padding-right: 0;
    background: inherit;
  }
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
    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
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
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
  }

  .Resizer.vertical:hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .Resizer.disabled {
    cursor: not-allowed;
  }
  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;
