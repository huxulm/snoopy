import React from "react";
import { Container, Title, Summary, Status } from "./elements";
import noop from "lodash/noop";

const ListItem = ({
  id,
  authorId,
  title,
  summary,
  bgImg,
  author = "Jackdon",
  createTime = "2018-08-22",
  onItemClick = noop,
  onAuthorClick = noop,
}) => {
  return (
    <Container className="list-item" onClick={onItemClick.bind(this, id)}>
      <Title>
        {title}
      </Title>
      <Summary>
        {summary}
      </Summary>
      <Status>
        {`Posted by `}<a onClick={onAuthorClick.bind(this, authorId)}>{author}</a>
        {` at ${createTime}`}
      </Status>
    </Container>
  );
}

export default ListItem;
