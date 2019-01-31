/*
 * @Author: lingming.xu
 * @Date: 2018-11-29 15:21:39
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { Container } from "./elements";
import "./index.scss";
import { withRouter } from "react-router-dom";
import Editor from "../../common/Editor";

class Detail extends React.Component {
  state = {
    data: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.signals.editor.loadSource({id: this.props.match.params.id});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.signals.editor.loadSource({id: this.props.match.params.id});
    }
  }

  onChange = (value, id) => {
    console.log(`id:${id}\nvalue:${value}`);
  };

  onSave = value => {
    console.log(`saved:\nvalue:${value}`);
  };

  render() {
    return (
      <Container style={{
        height: '100vh',
        paddingBottom: '3rem'
      }} innerRef={e => (this.conRef = e)}>
        <Editor onChange={this.onChange} mode={2}/>
      </Container>
    );
  }
}

export default inject('signals', 'store')(observer(Detail));