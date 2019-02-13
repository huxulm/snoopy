import React from "react";
import { Container, BookListContainer, BookItem } from "./elements";
import Avatar from "@material-ui/core/Avatar";

const BOOK_ROOT = 'http://gitbook.xulingming.cn';
const BOOKS = [
  {
    name: "阿里巴巴开发手册",
    path: `${BOOK_ROOT}/alibaba-java-coding-guides`,
    author: {
      avatar: "https://avatars3.githubusercontent.com/u/1961952?s=200&v=4",
      name: "Alibaba",
      url: "https://github.com/alibaba"
    }
  },
  {
    name: "Nginx 中文文档",
    path: `${BOOK_ROOT}/nginx-docs`,
    author: {
      avatar: "https://avatars3.githubusercontent.com/u/32667109?s=200&v=4",
      name: "DocsHome",
      url: "https://github.com/DocsHome/nginx-docs"
    }
  },
  {
    name: "Node In Action",
    path: `${BOOK_ROOT}/node-in-action`,
    author: {
      avatar: "https://avatars0.githubusercontent.com/u/1639327?s=460&v=4",
      name: "SFantasy",
      url: "https://github.com/SFantasy/node-in-action"
    }
  },
  {
    name: "前端手册2018",
    path: `${BOOK_ROOT}/front-end-handbook-2018`,
    author: {
      avatar: "https://avatars0.githubusercontent.com/u/5613852?s=200&v=4",
      name: "Frontend Masters",
      url: "https://github.com/FrontendMasters/front-end-handbook-2018",
    }
  },
  {
    name: "Docker Practice",
    path: `${BOOK_ROOT}/docker_practice`,
    author: {
      avatar: "https://avatars1.githubusercontent.com/u/1920564?s=460&v=4",
      name: "yeasy",
      url: "https://github.com/yeasy/docker_practice",
    }
  }
];

class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  onBookItemClicked = ({ path }, e) => {

    window.open(path);
  };

  render() {
    return (
      <Container>
        <BookListContainer>
          {BOOKS.map((book, idx) => {
            return (
              <BookItem onClick={this.onBookItemClicked.bind(this, book)} key={idx}>
                <Avatar src={book.author.avatar} color="primary"/>
                <div className={"name"}>{book.name}</div>
              </BookItem>
            );
          })}
        </BookListContainer>
      </Container>
    );
  }
}

export default Books;
