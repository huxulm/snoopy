import React from "react"; 
import PropTypes from "prop-types";
import { Container, ItemContainer } from "./elements";

const getImageStyles = ( { url, delay }) => {
  return {
    backgroundImage: `url(${url})`,
    animationDelay: `${delay}`,
  }
}

class SlideImage extends React.Component {
  state = {
    imgs: [
      {
        url: 'http://snp-assets.oss-cn-shanghai.aliyuncs.com/blog_covers/home_page_1.jpg',
        delay: '0s',
      },
      {
        url: 'http://snp-assets.oss-cn-shanghai.aliyuncs.com/blog_covers/home_page_2.jpg',
        delay: '6s',
      },
      {
        url: 'http://snp-assets.oss-cn-shanghai.aliyuncs.com/blog_covers/home_page_3.jpg',
        delay: '12s',
      },
      {
        url: 'http://snp-assets.oss-cn-shanghai.aliyuncs.com/blog_covers/home_page_4.jpg',
        delay: '18s',
      },
      {
        url: 'https://snoopy-blog.oss-cn-shanghai.aliyuncs.com/space_imgs/space_imgs/03may15eclipse_ouellet_full.jpg',
        delay: '24s',
      },
      {
        url: 'https://snoopy-blog.oss-cn-shanghai.aliyuncs.com/space_imgs/space_imgs/040523cruxa_seip_full.jpg',
        delay: '30s',
      },
    ]
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {
          this.state.imgs.map((v, idx) => (
            <li key={idx}>
              <ItemContainer duration={'36s'} style={getImageStyles(v)}></ItemContainer>
            </li>
          ))
        }
      </Container>
    )
  }
}

export default SlideImage;