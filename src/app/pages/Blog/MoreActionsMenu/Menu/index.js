import React from "react";
import { Container, MenuItem } from "./elements";
import SendIcon from '@material-ui/icons/Send';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { menuActions } = this.props;
    return (
      <Container>
        {menuActions
          ? menuActions.map((e, idx) => {
              return (
                <MenuItem onClick={e.onClick} key={idx}>
                  {e.children ? e.children : "👌OK"}
                </MenuItem>
              );
            })
          : null}
      </Container>
    );
  }
}
