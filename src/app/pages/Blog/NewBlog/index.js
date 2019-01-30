/*
 * @Author: lingming.xu
 * @Date: 2019-01-09 15:27:12
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { Container } from "./elements";
import Chip from "@material-ui/core/Chip";
import Editor from "../../common/Editor";
import "../Detail/index.scss";
import "./index.scss";

class NewBlog extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.signals.editor.loadTags();
  }

  onCodeChange = code => {
    this.props.signals.editor.onCreatingCodeChange({ code });
  };

  render() {
    const { docs = [] } = this.props.store.editor.tags || {};
    return (
      <Container>
        <Editor mode={1} onChange={this.onCodeChange} tags={docs} />
      </Container>
    );
  }
}
export default inject("signals", "store")(observer(NewBlog));
