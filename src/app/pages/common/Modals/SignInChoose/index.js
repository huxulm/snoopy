import React from "react";
import { inject, observer } from "mobx-react";
import { Container, Title, SignInItem } from "./elements";
import Weibo from "app/components/Icons/weibo";
import Github from "app/components/Icons/github";
import Divider from "app/components/Divider";
import Linkedin from "app/components/Icons/linkedin";

function SignInChoose({ signals }) {

  return (
    <Container>
      <Title>登入</Title>
      <Divider color="#5A626A" height="1px"/>
      <SignInItem onClick={e => {
        signals.signInClicked();
      }}>
        <Github size="2rem"/>
      </SignInItem>
      <SignInItem>
        <Weibo size="2rem"/>
      </SignInItem>
      <SignInItem>
        <Linkedin size="2rem"/>
      </SignInItem>
      <SignInItem>
          或用户名密码登入
      </SignInItem>
    </Container>
  );
}

export default inject("store", "signals")(observer(SignInChoose));
