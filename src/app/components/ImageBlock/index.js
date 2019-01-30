import React from "react";
import ImageZoom from 'react-medium-image-zoom';
import styled from "styled-components";

const Container = styled.div``;

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src = "", alt = "No Description", className } = this.props;
    return (<Container>
      <ImageZoom
        image={{
          src,
          alt,
          className,
          style: { width: '50em' }
        }}
        zoomImage={{
          src,
          alt,
        }}
      />
    </Container>)
  }
}

export default ImageBlock;