import React from "react";
import ImageZoom from 'react-medium-image-zoom';
import styled from "styled-components";

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src = "", alt = "No Description", className } = this.props;
    return (
      <React.Fragment>
        <ImageZoom
          image={{
            src,
            alt,
            className,
            style: { width: "50em" }
          }}
          zoomImage={{
            src,
            alt
          }}
        />
      </React.Fragment>
    );
  }
}

export default ImageBlock;