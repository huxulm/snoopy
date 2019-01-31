import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Container } from "./elements";
import UserMenu from "../UserMenu";
import SignInButton from "../SignInButton";
import { withRouter } from "react-router-dom";
import HomeIcon from "./home-icon";

class Header extends Component {
  state = {
    opacity: 1,
    isLogedIn: true
  };

  componentDidMount() {
    const { clientHeight } = this.headerRef;
    window.addEventListener("scroll", e => {
      let y = window.scrollY;
      console.log(`scrollTop:${window.scrollY}`);
      this.setState({
        opacity:
          y / 2 < clientHeight ? (1 - y / 2 / clientHeight).toFixed(2) : 0
      });
    });
  }

  redirectToHome = () => {
    if (this.props.history) {
      this.props.history.push('/');
    }
  }

  render() {
    const { jwt } = this.props.store;
    return (
      <Container
        ref={e => (this.headerRef = e)}
        opacity={this.state.opacity}
        justifyContent="space-between"
      >
        <HomeIcon style={{ height: '1.5rem', width: '1.5rem' }} size="1.2rem" color="#D3D9E4" onClick={this.redirectToHome}/>
        {/* a space here, make profile position at the end */}
          <div></div>
        {
          jwt == null?
          <SignInButton /> : <UserMenu />
        }
      </Container>
    );
  }
}

export default withRouter(inject("store", "signals")(observer(Header)));
