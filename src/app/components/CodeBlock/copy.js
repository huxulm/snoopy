import React from "react";
import CopyIcon from "app/components/Icons/copy";
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import PropTypes from 'prop-types';
import styled from "styled-components";

const Tip = styled.div`
  background: transparent;
  text-align: center;
  align-content: center;
`;
class CopyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    visible: false,
  };
  onVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  }
  onDestroy = () => {
    this.setState({
      destroy: true,
    });
  }

  render = ({ id, style } = this.props) => {
    if (this.state.destroy) {
      return null;
    }
    return (
      <Tooltip
        visible={this.state.visible}
        animation="zoom"
        onVisibleChange={this.onVisibleChange}
        trigger="click"
        mouseEnterDelay={0}
        mouseLeaveDelay={2}
        overlay={<Tip>已复制</Tip>}
      >
        <CopyIcon id={id} aria-label="Copy" style={style} />
      </Tooltip>
    );
  };
}

CopyButton.defaultProps = {
  size: 120
}

CopyButton.propTypes = {
  size: PropTypes.number.isRequired
}

export default CopyButton;

