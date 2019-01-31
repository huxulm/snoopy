import React from "react";
import { Container, CopyRight } from "./elements";
const style = {
  color: "#2C2C2C",
  fontWeight: 500,
  verticalAlign: "text-top",
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
          ©2017~2019{" "}
          <a href="http://www.xulingming.cn" style={style}>
            Snoopy
          </a>
          . 皖ICP备
          <a style={style} href="#">
            17008795
          </a>
          号<br /> Powered by R&N.
        </CopyRight>
      </Container>
    );
  }
}

export default Footer;
