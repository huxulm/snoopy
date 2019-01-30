import * as React from 'react';
import CodeMirror from 'codemirror';
import { withTheme } from 'styled-components';

// import type { ModuleError, Module } from 'common/types';
import { getCodeMirror } from 'app/utils/codemirror';

import 'codemirror/theme/monokai.css';

import { Container, CodeContainer } from './elements';
import PropTypes from "prop-types";

const documentCache = {};

class CodemirrorEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initializeCodeMirror().then(() => {
      console.log('Successfully initialized codemirror.')
    }).catch(err => {
      console.log(err);
      console.log('Initializing codemirror went into error!');
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) {
      this.changeCode(this.props.code);
    } 
  }
  
  getCode = () => this.codemirror.getValue();

  handleChange = (cm, change) => {
    if (change.origin !== 'setValue' && this.props.onChange) {
      this.props.onChange(cm.getValue(), this.props.id);
    }
  }

  handleSaveCode = async () => {
    const onSave = this.props.onSave;
    if (onSave) {
      onSave(this.getCode());
    }
  }

  initializeCodeMirror = async () => {
    const el = this.codemirrorElement;
    const { code, id, title, mode } = this.props;
    const _mode = await this.getMode(mode);

    documentCache[id] = new CodeMirror.Doc(code || '', _mode);

    this.codemirror = getCodeMirror(el, documentCache[id] || code);

    this.codemirror.on('changes', this.handleChange);
    this.codemirror.setOption('mode', _mode);
  }

  getMode = async (mode) => {
    if (mode == null) return 'jsx';

    if (mode === 'css' || mode === 'scss' || mode === 'less') {
      await import(/* webpackChunkName: 'codemirror-css' */ 'codemirror/mode/css/css');
      if (mode === 'less') {
        return 'text/x-less';
      }
      if (mode === 'scss') {
        return 'text/x-scss';
      }
      return 'css';
    } else if (mode === 'html') {
      await import(/* webpackChunkName: 'codemirror-html' */ 'codemirror/mode/htmlmixed/htmlmixed');
      return 'htmlmixed';
    } else if (mode === 'md' || mode === 'markdown') {
      await import(/* webpackChunkName: 'codemirror-html' */ 'codemirror/mode/markdown/markdown');
      return 'markdown';
    } else if (mode === 'json') {
      return 'application/json';
    }
    return 'jsx';
  }

  getDoc = () => {
    return this.codemirror.getDoc();
  }

  setCode = (code) => {
    this.codemirror.setValue(code);
  }

  changeCode = (code, moduleId) => {
    const pos = this.codemirror.getCursor();
    this.codemirror.setCursor(pos);
    if (
      code !== this.getCode()
    ) {
      this.codemirror.setValue(code);
    }
  };

  render() {
    return (
      <Container>
        <CodeContainer>
          <div
            style={{
              height: '100%',
              fontSize: 14,
            }}
            ref={node => {
              this.codemirrorElement = node;
            }}
          />
        </CodeContainer>
      </Container>
    )
  }
}

CodemirrorEditor.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  code: PropTypes.string,
  id: PropTypes.string,
}

export default withTheme(CodemirrorEditor);
