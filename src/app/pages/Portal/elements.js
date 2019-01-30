import styled from "styled-components";
import Centered from "common/components/flex/Center";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PictureContainer = styled(Centered)`
  border: 5px solid white;
  height: auto;
  width: auto;
  margin: 0 auto;
  background: #BDBBBF;
  color: white;
  box-shadow: 1px 1px 3px 1px #E0DFDE;
  display: flex;
  justify-content: center;
`;

export const Picture = styled.img`
  height: 468px;
  width: 100%;
`;

export const Content = styled.div`
  text-align: center;
  margin:0;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 575px;
  }
`;

export const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
`;