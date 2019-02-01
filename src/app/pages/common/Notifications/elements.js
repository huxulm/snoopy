import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .notifications-leave {
    opacity: 1;
  }
  .notifications-leave.notifications-leave-active {
    transition: all 300ms ease;
    opacity: 0.01;
  }
`;
export const NotificationContainer = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 0;
  z-index: 100;
`;

