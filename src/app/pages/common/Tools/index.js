import React from "react";
import { Container, ToolsContainer, ToolsItem } from "./elements";
import { Switch, Route } from "react-router-dom";
import SqlFormatter from "./Formatter/SqlFormatter";
// import CommonFormatter from "./Formatter/Common";
import history from "../../../utils/history";
import { withRouter } from 'react-router-dom';
import Loadable from "app/utils/Loadable";

const ToolsCommon = Loadable(() =>
  import(/* webpackChunkName: 'page-tools-common' */ "./Formatter/Common")
);

class FormatterIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickSQLFormatter = () => {
    history.push("/tools/sql");
  };

  onClickCommonFormatter = () => {
    history.push("/tools/common");
  };

  render() {
    return (
      <Container>
        <Switch>
          <Route
            exact
            path="/tools"
            render={props => (
              <ToolsContainer>
                <ToolsItem onClick={this.onClickCommonFormatter}>
                  通用代码格式化
                </ToolsItem>
              </ToolsContainer>
            )}
          />
          <Route exact path="/tools/sql" component={SqlFormatter} />
          <Route exact path="/tools/common" component={ToolsCommon} />
        </Switch>
      </Container>
    );
  }
}

export default withRouter(FormatterIndex);
