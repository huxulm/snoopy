import React, { Component } from "react";
import { Container } from "./elements";
import { inject, observer } from "mobx-react";
import { Switch, Route } from "react-router-dom";
import Loadable from "../utils/Loadable";
import Modals from "./common/Modals";
import SlideImage from "app/components/SlideImage";
import Notifications from 'app/pages/common/Notifications';
import { withNamespaces } from 'react-i18next';
// import _ToolsPage from /* webpackChunkName: 'page-tools' */ "../pages/common/Tools"
import "normalize.css";

const SignIn = Loadable(() =>
  import(/* webpackChunkName: 'page-sign-in' */ "./common/SignIn")
);

const HomePage = Loadable(() =>
  import(/* webpackChunkName: 'page-home' */ "./common/HomePage")
);

const Portal = Loadable(() =>
  import(/* webpackChunkName: 'page-home' */ "./Portal")
);

const Blog = Loadable(() =>
  import(/* webpackChunkName: 'page-blog' */ "./Blog")
);

const About = Loadable(() =>
  import(/* webpackChunkName: 'page-about' */ "./About")
);

const Resume = Loadable(() =>
  import(/* webpackChunkName: 'page-resume' */ "./Resume")
);

const LifePage = Loadable(() =>
  import(/* webpackChunkName: 'page-resume' */ "./LifePage")
);

const ToolsPage = Loadable(() =>
  import(/* webpackChunkName: 'page-tools' */ "../pages/common/Tools")
);

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    // Without this the app won't update on route changes, we've tried using
    // `withRouter`, but it caused the app to remount on every route change.
    return true;
  }

  render() {
    return (
      <Container>
        <Notifications />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={Portal} />
          <Route exact path="/About" component={About} />
          <Route exact path="/pr/2018-LAST" component={Resume} />
          <Route path="/blog" component={Blog} />
          <Route path="/life" component={LifePage} />
          <Route path="/signin/:jwt?" component={SignIn} />
          <Route path="/tools" component={ToolsPage}/>
        </Switch>
        <Modals />
        <SlideImage />
      </Container>
    );
  }
}

const NotFound = ({ match, location }) => {
  return (window.location = location.pathname);
};

Routes.propTypes = {};

export default inject("signals", "store")(observer(Routes));
