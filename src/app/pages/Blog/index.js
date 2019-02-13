import React from "react";
import { Container, SideOneContainer, ContentContainer, SwitchContentContainer } from "./elements";
import BlogHeader from "./BlogHeader";
import Footer from "../Footer";
import history from "../../utils/history";
import { Switch, Route } from "react-router-dom";
import Loadable from "../../utils/Loadable";
import { inject, observer } from "mobx-react";
import Weibo from "app/components/Icons/weibo";
import qs from "query-string";
import NewBlog from "./NewBlog";

import "./index.scss";

const List = Loadable(() =>
  import(/* webpackChunkName: 'page-blog-list' */ "./List")
);

const Detail = Loadable(() =>
  import(/* webpackChunkName: 'page-blog-detail' */ "./Detail")
);


class Blog extends React.Component {
  state = {
    showHead: true
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.conRef.scrollTo(0, 0);
    history.listen((location, action) => {
      if (/blog\/[0-9A-Za-z]{24}$/.test(location.pathname)) {
        this.setState({
          showHead: false
        });
      } else {
        this.setState({
          showHead: true
        });
      }
    });
    this.props.signals.loadPortalPage();
  }

  getSwitchStyle = ({ pathname }) => {

    if (pathname !== '/blog') {
      return { boxShadow: 'none' };
    }
    return null;
  }

  render() {
    const { location } = this.props;
    const scrollTop = this.props.store.scrollTop;
    const user = this.props.store.user;
    let switchStyle = this.getSwitchStyle(location);
    let isScrolling = scrollTop > 50;
    return (
      <Container className="bl" ref={e => (this.conRef = e)}>
        <BlogHeader
          onClickBack={e => {
            history.push("/blog");
          }}
          hasLogged={!!user}
          className={`blog-header ${this.state.showHead == true? 'onscroll' : (isScrolling? 'onscroll' : '')}`}
          onClickBackHome={e => history.push("/")}
        />
        <ContentContainer>
          <Switch>
            <SwitchContentContainer style={switchStyle}>
              <Route exact path="/blog" render={( { location } ) => {
                if (location.search) {
                  let query = qs.parse(location.search);
                  if (query.flag === 'new_blog') {
                    return <NewBlog/>;
                  }
                }
                return <List/>;
              }} />
              <Route exact path="/blog/:id" component={Detail} />
            </SwitchContentContainer>
          </Switch>
          {/* <SideOneContainer vertical horizontal>
            other...
          </SideOneContainer> */}
        </ContentContainer>
        <Footer color={"#000"} background={"#EBEBEB"}/>
      </Container>
    );
  }
}

export default inject('signals', 'store')(observer(Blog));