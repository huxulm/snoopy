import React from "react";
import { Container, Header } from "./elements";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import ImageComponent from "./ImageComponent";

const PHOTO_SET = [
  {
    src:
      "http://snp-assets.oss-cn-shanghai.aliyuncs.com/snoopy/P90112-203347.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "http://snp-assets.oss-cn-shanghai.aliyuncs.com/snoopy/P90112-211743.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "http://snp-assets.oss-cn-shanghai.aliyuncs.com/snoopy/P90112-193016.jpg",
    width: 4,
    height: 5
  },
  {
    src:
      "http://snp-assets.oss-cn-shanghai.aliyuncs.com/snoopy/P90113-085316.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "http://snp-assets.oss-cn-shanghai.aliyuncs.com/snoopy/P90113-091831.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "http://snp-assets.oss-cn-shanghai.aliyuncs.com/snoopy/P90113-120145.jpg",
    width: 1,
    height: 1
  }
];

class Record extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (
      <Container>
        <Header>2019-01-12 新疆-乌鲁木齐</Header>
        <Gallery
          photos={PHOTO_SET}
          onClick={this.openLightbox}
          // ImageComponent={ImageComponent}
        />
        <Lightbox
          images={PHOTO_SET}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage} // onClickThumbnail={}
          showThumbnails={true}
          isOpen={this.state.lightboxIsOpen}
        />
      </Container>
    );
  }
}

export default Record;
