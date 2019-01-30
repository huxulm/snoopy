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

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { queryBlogList } = this.props.signals;
    queryBlogList();
  }

  onItemClick = (id, e) => {
    history.push(`/blog/${id}`);
    const { signals } = this.props;
    signals.editor.loadSource({ id });
  };

  render() {
    const { total = 0, pageNo, docs = [] } = this.props.store.blogList || {};
    return (
      <ListContainer>
        {docs.map(v => (
          <ListItem
            key={v.id}
            summary={v.mdContent}
            createTime={moment(v.createTime).format("MM/DD YYYY")}
            id={v.id}
            title={v.title}
            onItemClick={this.onItemClick}
          >
            {v}
          </ListItem>
        ))}
        {total > 0 && (
          <BtnGroupContainer>
            <BtnLoader style={{ marginRight: "1rem" }}>
              PREVIOUS POSTS
            </BtnLoader>
            <BtnLoader>OLD POSTS</BtnLoader>
          </BtnGroupContainer>
        )}
      </ListContainer>
    );
  }
}

export default inject('store', 'signals')(observer(BlogList));
