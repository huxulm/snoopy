import React from "react";
import { Container, Title, Summary, Status } from "./elements";
import noop from "lodash/noop";

const ListItem = ({
  id,
  tags,
  title,
  summary,
  bgImg,
  author = { name: '', id: '' },
  createTime = "2018-08-22",
  onItemClick = noop,
  onAuthorClick = noop,
}) => {
  return (
    <Container className="list-item" onClick={onItemClick.bind(this, id, tags)}>
      <Title>
        {title}
      </Title>
      <Summary>
        {summary}
      </Summary>
      <Status>
        {`POSTED BY `}<a onClick={onAuthorClick.bind(this, author.id)} style={{ fontWeight: 600 }} >{author.name}</a>
        {` AT ${createTime}`}
      </Status>
    </Container>
  );
}

export default ListItem;
