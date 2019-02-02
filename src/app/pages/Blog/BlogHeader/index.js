import React from "react";
import { Container, Title, DotIndicator } from "./elements";
import BackIcon from "../../common/Header/backword-icon";
import { ProfileImg } from "../../common/UserMenu/elements";
import MoreActionsMenu from "../MoreActionsMenu";

class BlogHeader extends React.Component {

  render = ({ title = '', onTitleClick, onClickBack, onClickBackHome, style, className = '', hasLogged = false } = this.props) => {
    return (
      <Container opacity={1} style={style} className={className}>
        <ProfileImg
          onClick={onClickBack} onDoubleClick={onClickBackHome}
          src={"http://snp-assets.oss-cn-shanghai.aliyuncs.com/blog_covers/avatar.jpeg"}
          height={25}
          width={25}
        />
        <Title children={title || 'Snoopy\'s Blog'.toUpperCase()} onClick={onTitleClick}/>
        <DotIndicator hasLogged={hasLogged}/>
        <div style={{ float: "right", position: "absolute", right: '1rem' }}>
          <MoreActionsMenu />
        </div>
      </Container>
    )
  }
  
}

export default BlogHeader;
