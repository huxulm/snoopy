import React from "react";
import { Container, CopyRight } from "./elements";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container {...this.props}>
        <CopyRight>
          ©2017~2019 Snoopy. 皖ICP备17008795号<br/> Powered by R&N.
        </CopyRight>
      </Container>
    );
  }
}

export default Footer;
