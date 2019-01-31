import React from "react";
import { Container, DividerBar, ContentContainer } from "./elements";
import Record from "./Record";

class LifePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <DividerBar>
          记录
        </DividerBar>
        <ContentContainer>
          {/* <Record/> */}
          :( 😞 内容已保护
        </ContentContainer>
      </Container>
    );
  }
}

export default LifePage;
