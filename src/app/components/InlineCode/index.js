import React, { Children } from 'react';
import "./style.css";

class InlineCode extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render({ value } = this.props) {
    return (
      <code className="in-code">
        {value}
      </code>
    );
  }
}

export default InlineCode;