import {
  Container,
  AboutProfileContainer,
  BaseInfo,
  ProflieInfo,
  ProfileImg,
  DescribeInfo,
  QRCodeContainer,
  Contact
} from "./elements";
import React from "react";
import Header from "../common/Header";
import Footer from "../Footer";
import { inject, observer } from "mobx-react";
import Row from "common/components/flex/Row";
import QRCode from "qrcode.react";
import Tooltip from "common/components/Tooltip";
import SocialLink from "./SocialLink";
import GoMail from "react-icons/lib/go/mail";

import avatar from "./avatar.jpeg";
import wechat from "./wechat_qrcode.jpg";

const EMAIL = "janeysessions@gmail.com";

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: 0,
    }
  }

  changeProfile = (val, e) => {
    this.setState(({ profile }) => {
      return {
        profile: val && val === 0 ? val : (profile > 0? 0 : 1),
      }
    });
  }

  render() {
    const _says = '\"Murphy\'s law doesn\'t mean that something bad will happen. It means that whatever can happen, will happen.\"      \n- Cooper';
    const { profile } = this.state; 
    return (
      <Container>
        {/* <Header /> */}
        <AboutProfileContainer>
          <BaseInfo>
            <Row>
              <Tooltip title="点击查看二维码" position="bottom">
                <ProflieInfo onClick={this.changeProfile}>
                  {
                    profile === 0?
                    <ProfileImg src={avatar} height={'300'}
                    width={'300'}/> 
                    :
                    <QRCodeContainer>
                      {/* <QRCode value="http://www.xulingming.cn" renderAs="svg" width="100%" height="100%" bgColor="transparent"/> */}
                      <img src={wechat} width="100%" height="100%"></img>
                    </QRCodeContainer >
                  }
                </ProflieInfo>
              </Tooltip>
            </Row>
            <DescribeInfo>
              {_says}
            </DescribeInfo>
          </BaseInfo>
          <SocialLink/>
          <Contact>
            <GoMail width="1.2rem" color={'#4F5051'}></GoMail>
            <a href={`mailto:${EMAIL}`}><div className="email">{EMAIL}</div></a>
          </Contact>
        </AboutProfileContainer>
      </Container>
    )
  }
  
}

export default inject('store', 'signals')(observer(About));