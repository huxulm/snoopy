import React from 'react';

import { Centered } from 'common/components/flex';
import Title from 'app/components/Title';
import { protocolAndHost } from "common/utils/url-generator";
// This route is supposed to be opened in a new window, after signing in with
// Github. It should return a postMessage to the parent
export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    if (props.match.params.jwt) {
      if (window.opener) {
        this.state = {
          jwt: props.match.params.jwt,
        };
        if (window.opener.location.origin === window.location.origin) {
          window.opener.postMessage(
            {
              type: 'signin',
              data: {
                jwt: props.match.params.jwt,
              },
            },
            protocolAndHost()
          );
        }
        return;
      }
      this.state = {
        redirect: '/home',
      };
      return;
    }

    this.state = {
      error: 'no message received',
    };
  }

  getMessage = () => {
    if (this.state.redirect) {
      document.location.href = "/home"; // home
      return '重定向到首页...';
    }
    if (this.state.error) {
      return `登录发生未知错误: ${this.state.error}`;
    }
    if (this.state.jwt) return `正在登入...\n${this.state.jwt}`;
    if (this.state.jwt == null) {
      setTimeout(() => {
        document.location.href = '/auth/github';
      }, 2000);
      return '重定向到登录页...';
    }

    return 'Hey';
  };

  render() {
    return (
      <Centered horizontal vertical>
        <Title>{this.getMessage()}</Title>
      </Centered>
    );
  }
}
