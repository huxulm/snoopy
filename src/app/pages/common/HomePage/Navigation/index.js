import React, { PureComponent } from "react";
import { Container, NavList, NavItem, MainTitle, SecondTitle, LangSelectContainer } from "./elements";
import Divider from "app/components/Divider";
import { withRouter, NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { withNamespaces } from "react-i18next";

const ROUTES = [
  {
    path: '/home',
    name: 'home',
  }, {
    path: '/blog',
    name: 'blog',
  }, {
    path: '/life',
    name: 'maybe life',
  }, {
    path: '/about',
    name: 'about',
  }
];
class Navigation extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        {/* <LangSelectContainer><span>中</span>|<span>EN</span></LangSelectContainer> */}
        <MainTitle>{t('mainTitle')}</MainTitle>
        <SecondTitle>Xu Lingming's Personal Website.</SecondTitle>
        <Divider height={'1px'} margin={'5px 0 5px 0'} color={'#3B3B3B'}/>
        <NavList>
          {ROUTES.map((item, idx) => (
            <NavItem key={idx} onClick={e => {
              this.props.history.push(item.path);
            }}>{t(item.name).toUpperCase()}</NavItem>
          ))}
        </NavList>
      </Container>
    );
  }
}

export default inject('store', 'signals')(observer(withNamespaces()(Navigation)));