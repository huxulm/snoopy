import React from "react";
import { DetailHeaderContainer, BottomContainer, BottomTagsContainer } from "./elements";
import Author from "./author";
import DateTime from "./datetime";
import Heart from "./heart";
import Edit from "./edit";
import Chip from "@material-ui/core/Chip"
import FaceIcon from "@material-ui/icons/FaceOutlined";
import { inject, observer } from "mobx-react";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tagsWrapper: {
    height: '20px'
  }
}

class EditorHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, createTime, praiseCount, author, bgUrl, onEditClicked, store, tags = ['js'] } = this.props;
    const canEdit = true || store.jwt && store.user && store.user.name === 'jackdon';
    return (
      <DetailHeaderContainer bgUrl={bgUrl}>
        <div className="title">{title}</div>
        <BottomContainer>
          <DateTime className="it" time={createTime}/>
          <Author className="it" name={author}/>
          <Heart className="it" count={praiseCount}/>
          {canEdit? <Edit onClick={onEditClicked}/> : null}
        </BottomContainer>
        <BottomTagsContainer>
          {this.renderTags()}
        </BottomTagsContainer>
      </DetailHeaderContainer>
    );
  }

  renderTags() {
    return (
      <Chip color="default" icon={<FaceIcon />} className={this.props.classes.tagsWrapper} clickable={true} label="JavaScript" variant="outlined"/>
    );
  }
}

export default inject('signals', 'store')(observer(withStyles(styles)(EditorHeader)));
