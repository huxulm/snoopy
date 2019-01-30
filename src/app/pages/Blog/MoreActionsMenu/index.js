import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddIcon from '@material-ui/icons/Add';
import CreateBlogAction from './Actions/createBlog';
import BrowserToolsAction from './Actions/browserTools';
import history from "app/utils/history";

import {
  Container,
  ClickableContainer,
} from "./elements";
import Tooltip from "common/components/Tooltip";
import HoverMenu from "app/components/HoverMenu/index";
import Menu from "./Menu";

class MoreActionsMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() { }

  render() {
    return (
      <Container>
        <ClickableContainer>
          <Tooltip title="jackdon" size={"small"}>
            <AddIcon
              color={"action"}
              onClick={e => {
                this.setState({
                  open: true
                });
              }}
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
            <Menu {...this.props} menuActions={
              [
                {
                  onClick: () => {
                    history
                      .push('/blog?_f=new_blog');
                  },
                  children: <CreateBlogAction />
                },

                {
                  onClick: () => {
                    history
                      .push('/tools');
                  },
                  children: <BrowserToolsAction />
                }
              ]
            } />
          </HoverMenu>
        )}
      </Container>
    );
  }
}

export default inject("store", "signals")(observer(MoreActionsMenu));
