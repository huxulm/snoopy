import styled from "styled-components";
import Relative from "common/components/Relative";
import Row from "common/components/flex/Row";

export const Container = styled(Relative)`
  margin-right: 20px;
`;

export const ClickableContainer = styled(Row)`
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  border-radius: 2px;
  display: flex;
`;

export const ProflieInfo = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  margin-right: 1em;
  color: white;

  @media (max-width: 468px) {
    display: none;
  }
`;