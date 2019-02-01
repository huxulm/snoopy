/*
 * @Author: lingming.xu 
 * @Date: 2018-11-29 15:21:59 
 */
import React from "react";
import { ListContainer, BtnGroupContainer, BtnLoader } from "./elements";
import ListItem from "./ListItem";
import history from "app/utils/history";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { Transition, Trail, animated } from "react-spring";

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { queryBlogList } = this.props.signals;
    queryBlogList();
  }

  onItemClick = (id, tags, e) => {
    history.push(`/blog/${id}`);
    const { signals } = this.props;
    signals.editor.loadSource({ id });
  };

  render() {
    const { total = 0, pageNo = 1, totalPages = 0, docs = [] } = this.props.store.blogList || {};
    const { queryBlogList } = this.props.signals;
    let disableNext = pageNo == totalPages;
    let disablePrev = pageNo == 1;
    return (
      <ListContainer>
        {docs.map(v => (
          <ListItem
            key={v.id}
            summary={v.mdContent}
            createTime={moment(v.createTime).format("MM/DD YYYY")}
            id={v.id}
            author={v.author}
            title={v.title}
            onItemClick={this.onItemClick}
          >
            {v}
          </ListItem>
        ))}
        {total > 0 && (
          <BtnGroupContainer>
            <BtnLoader
              style={{
                marginRight: "1rem",
                cursor: disablePrev ? "not-allowed" : "pointer",
                background: disablePrev ? "#DFDEDE" : "white"
              }}
              onClick={e => {
                if (queryBlogList) {
                  queryBlogList({ page: pageNo > 1 ? pageNo - 1 : 1 });
                }
              }}
            >
              PREVIOUS POSTS
            </BtnLoader>
            <BtnLoader
              style={{
                cursor: disableNext ? "not-allowed" : "pointer",
                background: disableNext ? "#DFDEDE" : "white"
              }}
              onClick={e => {
                queryBlogList({
                  page: pageNo < totalPages ? pageNo + 1 : totalPages
                });
              }}
            >
              OLD POSTS
            </BtnLoader>
          </BtnGroupContainer>
        )}
      </ListContainer>
    );
  }
}

export default inject('store', 'signals')(observer(BlogList));
