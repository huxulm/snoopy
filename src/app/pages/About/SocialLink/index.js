import React from "react";
import { Container, LinkItem, TipContainer, LinkItemWrapper } from "./elements";
import Weibo from "app/components/Icons/weibo";
import Github from "app/components/Icons/github";
import Linkedin from "app/components/Icons/linkedin";
import QRCode from "qrcode.react";
import Tooltip from "common/components/Tooltip";

function LinkedTitle({ link }) {
  return (
    <TipContainer>
      <QRCode renderAs="svg" value={link} height="100%" width="100%"></QRCode>
    </TipContainer>
  )
}

class SocialLink extends React.Component {
  links = {
    weibo: {
      link: 'https://weibo.com/u/2950950297',
    },
    github: {
      link: 'https://weibo.com/u/2950950297'
    },
    linkedin: {
      link: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGTY83FAN-ayQAAAWdJjMMI96HkvqJXaO_0OzcJrl7tv4vxhN1uSUoMvSnofkq79HktrJ_7OjQ-dNdRrdzO8meH1iFoRoNKUDNx8D0GLboiZ11jGbJRn8-sGPRNhUGeyFabMqk=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Flingmingxu%3Ftrk%3Dchatin_wnc_redirect_pubprofile%26ctx%3Dcnpartner%26ts%3D1543127199755%26trk%3Dprofile_share_wechat'
    }
  }
  constructor(porps) {
    super(porps);
  }

  openLink = (link) => {
    // window.open(link);
  }

  render() {
    const { weibo, github, linkedin } = this.links;
    return (
      <Container>
        <LinkItemWrapper className="wrapper">
          <LinkItem className="link-item" onClick={this.openLink.bind(this, weibo.link)}>
            <Tooltip html={React.createElement(LinkedTitle, weibo)} theme="update">
              <Weibo height="1.2rem" width="1.2rem"/>
            </Tooltip>
          </LinkItem>
        </LinkItemWrapper>
        <LinkItemWrapper className="wrapper">
          <LinkItem className="link-item" onClick={this.openLink.bind(this, github.link)}>
            <Tooltip html={React.createElement(LinkedTitle, this.links.github)} theme="update">
              <Github height="1.2rem" width="1.2rem"/>
            </Tooltip>
          </LinkItem>
        </LinkItemWrapper>
        <LinkItemWrapper className="wrapper">
          <LinkItem className="link-item" onClick={this.openLink.bind(this, linkedin.link)}>
            <Tooltip html={React.createElement(LinkedTitle, this.links.linkedin)} theme="update">
              <Linkedin height="1.2rem" width="1.2rem"/>
            </Tooltip>
          </LinkItem>
        </LinkItemWrapper>
      </Container>
    )
  }
}

export default SocialLink;