import React from "react";
import { Container, MenuItem } from "./elements";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { signals } = this.props;
    return (
      <Container>
        <MenuItem onClick={e => {
          signals.logOutClicked();
        }}>退出登录</MenuItem>
      </Container>
    );
  }
}
