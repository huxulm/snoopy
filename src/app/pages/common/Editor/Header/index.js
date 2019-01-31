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

const styles = (props) => {
  return {
    tagsWrapper: {
      height: '20px',
      borderRadius: '5px',
      marginRight: '.1rem',
      color: '#969696',
    }
  }
}

class EditorHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, createTime, praiseCount, author, bgUrl, onEditClicked, store, tags = [] } = this.props;
    const canEdit = true || store.jwt && store.user && store.user.name === 'jackdon';
    return (
      <div>
        <DetailHeaderContainer bgUrl={bgUrl}>
        </DetailHeaderContainer>
        <DetailHeaderContainer height="12rem">
          <div className="title">{title}</div>
          <BottomContainer>
            <DateTime className="it" time={createTime} />
            <Author className="it" name={author && author.name} />
            <Heart className="it" count={praiseCount} />
            {canEdit ? <Edit onClick={onEditClicked} /> : null}
          </BottomContainer>
          <BottomTagsContainer>
            {tags.map((t, idx) => {
              return (
                <Chip
                  key={idx}
                  color="default"
                  className={this.props.classes.tagsWrapper}
                  clickable={true}
                  label={t.name}
                  variant="outlined"
                />
              );
            })}
          </BottomTagsContainer>
        </DetailHeaderContainer>
      </div>
    );
  }
}

export default inject('signals', 'store')(observer(withStyles(styles)(EditorHeader)));
