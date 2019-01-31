import React from "react";
import CodeBlock from "app/components/CodeBlock";
import { inject, observer } from "mobx-react";
import { EditorContainer } from "./elements";
import SplitPane from "react-split-pane";
import Markdown from "react-markdown";
import Header from "./Header";
import { withScreenSize } from "@vx/responsive";
import CodeMirror from "app/components/CodeEditor/CodeMirror";
import Loading from "app/components/Loading";
import PropTypes from "prop-types";
import Preview from "./Preview";
import Controller from "./Controller";
import Fullscreen from "react-full-screen";
import Footer from "../../Footer";
import moment from "moment";

const TMP_MD = `
# Write anything you want here...
`;

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFull: props.mode == 1, defaultTags: props.tags };
  }

  onChange = (value, id) => {
    if (this.props.onChange) {
      this.props.onChange(value, id);
    }
  };

  onSave = value => {
    if (this.props.onSave) {
      this.props.onSave(value);
    }
  };

  onClickFullscreen = () => {
    this.setState(({ isFull }) => ({ isFull: !isFull }));
  };

  onClickSave = () => {
    const { mode } = this.props;
    if (mode == 1) {
      this.props.signals.editor.onSaveCreatingClicked();
    } else {
      this.props.signals.editor.onSaveEditingClicked({
        mdContent: this.editor.getCode()
      });
    }
  };

  onClickCancel = () => {
    this.props.signals.editor.onCancelEditingClicked();
  };

  onClickCtrlHeading = () => {};

  onTitleChanged = e => {
    var title = e.target.value;
    const { mode } = this.props;
    if (mode == 1) {
      this.props.signals.editor.saveCreatingTitle({ title });
    } else {
      this.props.signals.editor.saveTitle({ title });
    }
  };

  onCreateTimeChanged = e => {
    var _createTime = e.target.value;
    var createTime = moment(_createTime).toISOString();
    const { mode } = this.props;
    if (mode == 1) {
      this.props.signals.editor.saveCreatingCreateTime({ createTime });
    } else {
      this.props.signals.editor.saveCreateTime({ createTime });
    }
  };

  onModifyTimeChanged = e => {
    var _modifyTime = e.target.value;
    var modifyTime = moment(_modifyTime).toISOString();
    const { mode } = this.props;
    if(mode == 1) {
      this.props.signals.editor.saveCreatingModifyTime({ modifyTime });
    } else {
      this.props.signals.editor.saveCreatingModifyTime({ modifyTime });
    }
  };

  onTagsSelected = (tag) => {
    this.props.signals.editor.onAddCreatingTag({ tag });
  }

  componentDidMount() {
  }

  componentWillUpdate() {
    if (this.editorRef) {
      window.removeEventListener('scroll', this.onEditorScroll);
    }
  }

  onEditorScroll = (e) => {
    console.log(`page is scrolling...`);
    const { onScrollChange } = this.props.signals;
    if (onScrollChange) {
      onScrollChange({ scrollTop: e.target.scrollTop });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.editorRef) {
      this.editorRef.addEventListener('scroll', this.onEditorScroll);
    }
  }

  componentWillUnmount() {
    if (this.editorRef) {
      window.removeEventListener('scroll', this.onEditorScroll);
    }
  }

  render() {
    const { mode = 1, screenWidth } = this.props;
    const {
      isPreview,
      isLoading,
      originSource,
      currentEditing,
      currentCreating
    } = mode == 2 ? this.props.store.editor : this.getDefaultNewBlog();
    if (mode == 2 && (isLoading || originSource == null)) {
      return <Loading loading={isLoading} color={"#528570"} />;
    }
    const {
      mdContent,
      title,
      createTime,
      modifyTime,
      author,
      tags,
      cover = ""
    } = isPreview ? originSource : mode == 2 ? currentEditing : currentCreating;
    return (
      <EditorContainer isFull={this.state.isFull} ref={e => {this.editorRef = e;}}>
        <Fullscreen
          enabled={false}
          onChange={isFull =>
            this.setState({
              isFull
            })
          }
        >
          {isPreview ? (
            <Preview
              title={title}
              mdContent={mdContent}
              author={author}
              tags={tags}
              createTime={createTime}
              coverUrl={cover}
              onEditClicked={() => {
                this.props.signals.editor.onEidtButtonClicked();
              }}
            />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", height: '100%' }}>
              <Controller
                onClickFullscreen={this.onClickFullscreen}
                onClickSave={this.onClickSave}
                onClickCancel={this.onClickCancel}
                title={title}
                createTime={moment(createTime).format("l")}
                modifyTime={moment(modifyTime).format("l")}
                onCreateTimeChanged={this.onCreateTimeChanged}
                onTitleChanged={this.onTitleChanged}
                onModifyTimeChanged={this.onModifyTimeChanged}
                tags={tags}
                onTagsSelected={this.onTagsSelected}
              />
              <SplitPane
                style={{ position: "relative" }}
                split={screenWidth < 468 ? "horizontal" : "vertical"}
                size={"50%"}
                defaultSize={mode == 2? "50%" : "100%"}
                pane1Style={{ height: "100%" }}
                pane2Style={{ overflow: "auto", height: "100%" }}
              >
                <CodeMirror
                  mode="markdown"
                  code={mdContent}
                  id="1"
                  ref={e => (this.editor = e)}
                  onChange={this.onChange}
                  onSave={this.onSave}
                />
                <div style={{ background: "#FFF", width: '100%', display: 'flex', height: '100%' }}>
                  <Markdown
                    className="md-view"
                    source={mdContent}
                    skipHtml={false}
                    escapeHtml={false}
                    renderers={{ code: CodeBlock }}
                  />
                </div>/
                )}
              </SplitPane>
            </div>
          )}
        </Fullscreen>
      </EditorContainer>
    );
  }

  getDefaultNewBlog = () => {
    return {
      isPreview: false,
      isLoading: false,
      currentCreating: {
        ...this.props.store.editor.currentCreating,
      }
    };
  };
}

Editor.propTypes = {
  /**
   * 编辑器模式
   * 1 创建
   * 2 修改
   */
  mode: PropTypes.number
};

export default withScreenSize(inject("signals", "store")(observer(Editor)));
