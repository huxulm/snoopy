import React from "react";
import PropTypes from "prop-types";

class ValidatingInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container {...this.props}>
        
      </Container>
    )
  }
}

ValidatingInput.propTypes = {
  defaultTopMessage: PropTypes.string,
  isHideInput: PropTypes.bool,
}

export default ValidatingInput;
