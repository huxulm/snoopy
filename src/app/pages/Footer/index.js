import React from "react";
import { Container, CopyRight } from "./elements";

const style = {
  color: "#f1f1f1",
  fontWeight: 500,
  textAlign: "center"
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container {...this.props}>
        <CopyRight>
          ©2017~2019&nbsp;
          <a href="http://www.xulingming.cn" style={style}>
            Snoopy
          </a>
          &nbsp;.皖ICP备
          <a style={style} href="#">
            17008795
          </a>
          号<br /> Powered with React.js.
        </CopyRight>
      </Container>
    );
  }
}

export default Footer;
