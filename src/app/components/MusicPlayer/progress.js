import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProgressBarWrapper = styled.div`
  border: 1px solid #000000;
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${props => {
    const { backgroundColor } = props;
    return backgroundColor || 'white';
  }};
`;

const ProgressInicator = styled.div`
  height: 4px;
  background: ${props => {
    const { indicatorColor } = props;
    return indicatorColor? indicatorColor : 'linear-gradient(#3ea357, #81f283)'
  }};
  transform: translateX(${props => parseFloat(-100 + props.value).toFixed(2)}%);
  transition: transform 100ms;
`;

class Progress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  onIndicatorClick = (e) => {
    const { clientWidth } = e.target;
    const { layerX } = e.nativeEvent;
    const { onSeek } = this.props;
    if (onSeek) {
      onSeek((layerX / clientWidth).toFixed(2));
    }
  }

  render() {
    const { indicatorColor, backgroundColor, style, value } = this.props;
    return (
      <ProgressBarWrapper backgroundColor={backgroundColor} style={style} onClick={this.onIndicatorClick}>
        <ProgressInicator value={value} indicatorColor={indicatorColor}/>
      </ProgressBarWrapper>
    );
  }
}

Progress.propTypes = {
  indicatorColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.number,
}

export default Progress; 