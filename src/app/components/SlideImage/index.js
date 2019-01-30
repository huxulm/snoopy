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
        url: 'https://snoopy-blog.oss-cn-shanghai.aliyuncs.com/space_imgs/space_imgs/03may15eclipse_ouellet_full.jpg',
        delay: '0s',
      },
      {
        url: 'https://snoopy-blog.oss-cn-shanghai.aliyuncs.com/space_imgs/space_imgs/040523cruxa_seip_full.jpg',
        delay: '6s',
      },
      {
        url: 'https://24.media.tumblr.com/f87b54bbce49e59debf7606662f54862/tumblr_n0hpxxDOJ91st5lhmo1_1280.jpg',
        delay: '12s',
      },
      {
        url: 'https://24.media.tumblr.com/0df0b55a4615378cf593241bad80a7da/tumblr_n0hpwpZrVc1st5lhmo1_1280.jpg',
        delay: '18s',
      },
      {
        url: 'https://24.media.tumblr.com/b94dbb2a392198d5cc39c19959598229/tumblr_n0hpthN8VH1st5lhmo1_1280.jpg',
        delay: '24s',
      },
      {
        url: 'https://31.media.tumblr.com/67d222ee577fc35faca83f0e08efc48e/tumblr_mzzqt7wyEU1st5lhmo1_1280.jpg',
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