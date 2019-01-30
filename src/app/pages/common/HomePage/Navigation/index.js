import React, { PureComponent } from "react";
import { Container, NavList, NavItem, MainTitle, SecondTitle } from "./elements";
import Divider from "app/components/Divider";
import { withRouter, NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";

const ROUTES = [
  {
    path: '/home',
    name: '首页',
  }, {
    path: '/blog',
    name: '博客',
  }, {
    path: '/life',
    name: '可能是生活',
  }, {
    path: '/about',
    name: '关于',
  }
];
class Navigation extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <MainTitle>许令明的个人网站</MainTitle>
        <SecondTitle>Xu Lingming's Personal Website.</SecondTitle>
        <Divider height={'1px'} margin={'5px 0 5px 0'} color={'#3B3B3B'}/>
        <NavList>
          {ROUTES.map((item, idx) => (
            <NavItem key={idx} onClick={e => {
              this.props.history.push(item.path);
            }}>{item.name.toUpperCase()}</NavItem>
          ))}
        </NavList>
      </Container>
    );
  }
}

export default inject('store', 'signals')(observer(Navigation));