import React from "react";
import { Container, Title } from "./elements";
import BackIcon from "../../common/Header/backword-icon";
import { ProfileImg } from "../../common/UserMenu/elements";
import MoreActionsMenu from "../MoreActionsMenu";

class BlogHeader extends React.Component {

  render = ({ title = '', onTitleClick, onClickBack, onClickBackHome, style, className = '' } = this.props) => {
    return (
      <Container opacity={1} style={style} className={className}>
        <ProfileImg
          onClick={onClickBack} onDoubleClick={onClickBackHome}
          src={"https://avatars3.githubusercontent.com/u/15030806?v=4"}
          height={25}
          width={25}
        />
        <Title children={title || 'Snoopy\'s Blog'.toUpperCase()} onClick={onTitleClick}/>
        <div style={{ float: "right", position: "absolute", right: '1rem' }}>
          <MoreActionsMenu />
        </div>
      </Container>
    )
  }
  
}

export default BlogHeader;
