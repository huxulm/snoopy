import React, { PureComponent } from "react";
import { observer, inject } from "mobx-react";
import {
  Container,
  ClickableContainer,
  ProfileImg,
  ProflieInfo
} from "./elements";
import Tooltip from "common/components/Tooltip";
import HoverMenu from "app/components/HoverMenu/index";
import Menu from "./Menu";

class UserMenu extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      url: "https://avatars3.githubusercontent.com/u/15030806?v=4"
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <ClickableContainer>
          <ProflieInfo>jackdon</ProflieInfo>
          <Tooltip title="jackdon" size={"small"}>
            <ProfileImg
              onClick={e => {
                this.setState({
                  open: true
                });
              }}
              src={this.state.url}
              height={25}
              width={25}
            />
          </Tooltip>
        </ClickableContainer>
        {this.state.open === true && (
          <HoverMenu
            onClose={e => {
              this.setState({
                open: false
              });
            }}
          >
            <Menu {...this.props}/>
          </HoverMenu>
        )}
      </Container>
    );
  }
}

export default inject("store", "signals")(observer(UserMenu));
