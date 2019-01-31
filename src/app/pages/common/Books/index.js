import React from "react";
import { Container, ToolsContainer, ToolsItem } from "./elements";
import { Switch, Route } from "react-router-dom";
import history from "app/utils/history";
import { withRouter } from 'react-router-dom';
import Loadable from "app/utils/Loadable";
import Title from "app/components/Title";

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
        <div style={{ borderBottom: "1px solid #d5d5d5" }}>
          <Title
            color="#0fd59d"
            size="1.5rem"
            weight="400"
            style={{ margin: "2rem" }}
          >
            常用工具集合:{" "}
            <span style={{ color: "#5C5C5C" }}>
              [JSON, SQL, JS(X), TypeScript, Markdown, HTML... ]
            </span>
          </Title>
        </div>
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
        </Switch>
      </Container>
    );
  }
}

export default withRouter(FormatterIndex);
