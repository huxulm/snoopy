import styled from "styled-components";
import { Container as Portal } from "../Portal/elements";
import Row from "common/components/flex/Row";

export const Container = styled(Portal)`
  justify-content: start;
`;

export const AboutProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;;
  width: auto;
  background: rgba(224, 224, 224, .8);
  color: #000;
  padding: 5%;
`;

export const ProfileImg = styled.img`
  border-radius: .5rem;
  display: flex;
  max-width: 12rem;
  max-height: 12rem;
  box-shadow: 5px 10px 25px 6px rgba(233, 236, 239, .5);
  @media (max-width: 468px) {
    width: 7rem;
    height: 7rem;
  }
`;

export const QRCodeContainer = styled.div`
  border-radius: .5rem;
  display: flex;
  box-shadow: 5px 10px 25px 6px rgba(233, 236, 239, .5);
  @media (max-width: 468px) {
    width: 8rem;
    height: 8rem;
  }
`;

export const ProflieInfo = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  color: white;
  width: 12rem;
  height: 12rem;
  @media (max-width: 468px) { 
    width: auto;
  }
`;

export const BaseInfo = styled(Row)`
  align-items: flex-start;
  padding: 5%;
  @media (max-width: 468px) { 
    padding: 2%;
    flex-direction: column; 
    align-items: center;
    margin-top: 2rem;
  }
`;

export const DescribeInfo = styled.div`
  font-size: 1.2rem;
  color: black;
  text-decoration-line: underline;
  text-decoration-color: black;
  text-decoration-style: solid;
  font-style: italic;
  padding: 1rem;
  width: 40vw;
  background: transparent;
  margin-left: 10rem;
  margin-top: 3rem;
  line-break: auto;
  hyphens:auto;
  word-wrap:break-word;
  @media (max-width: 468px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 80vw;
    font-size: 1rem;
  }
  ::selection {
    background: #ffb7b7; /* WebKit/Blink Browsers */
    color: white;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;  
  justify-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: #000;
  }
  .email {
    /* font-family: 'Tangerine', monospace, sans-serif; */
    margin-left: .5rem;
    font-weight: normal;
    font-size: 1.4rem;
    transform: translateY(-0.2rem);
  }
`;