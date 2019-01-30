import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-plsql";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-flow";
import CopyButton from "./copy";
import ClipboardJS from "clipboard";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./style.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Lang = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: .6rem;
  color: gray;
  display: flex;
  align-items: center;
  margin-left: .5rem;
  span {
    margin-right: .2em;
    text-decoration: none;
    color: #E6E5E5;
  }
  span::before {
    content: '#';
  }
  span:hover::before {
    font-style: normal;
  }
`;

const StyledCopyButton = styled(CopyButton)`
  flex: end;
  border-radius: 5px;
  padding: 5px;
  background: #BBB9BD;
  transition: .2s all ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`;

/**
 * Plugin name which is used as a class name for <pre> which is activating the plugin
 * @type {String}
 */
const PLUGIN_NAME = 'line-numbers';

/**
 * Regular expression used for determining line breaks
 * @type {RegExp}
 */
const NEW_LINE_EXP = /\n(?!$)/g;

/**
 * Resizes line numbers spans according to height of line of code
 * @param {Element} element <pre> element
 */
const _resizeElement = function (element) {
  var codeStyles = getStyles(element);
  var whiteSpace = codeStyles['white-space'];

  if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
    var codeElement = element.querySelector('code');
    var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
    var lineNumberSizer = element.querySelector('.line-numbers-sizer');
    var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

    if (!lineNumberSizer) {
      lineNumberSizer = document.createElement('span');
      lineNumberSizer.className = 'line-numbers-sizer';

      codeElement.appendChild(lineNumberSizer);
    }

    lineNumberSizer.style.display = 'block';

    codeLines.forEach(function (line, lineNumber) {
      lineNumberSizer.textContent = line || '\n';
      var lineSize = lineNumberSizer.getBoundingClientRect().height;
      lineNumbersWrapper.children[lineNumber].style.height = lineSize + 'px';
    });

    lineNumberSizer.textContent = '';
    lineNumberSizer.style.display = 'none';
  }
};

/**
 * Returns style declarations for the element
 * @param {Element} element
 */
const getStyles = function (element) {
  if (!element) {
    return null;
  }

  return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
};

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  setRef = el => {
    this.codeEl = el;
  };

  componentDidMount() {
    this.setUpCodeCopy();
    window.addEventListener("resize", function() {
      Array.prototype.forEach.call(
        document.querySelectorAll("pre." + PLUGIN_NAME),
        _resizeElement
      );
    });

    Prism.hooks.add("complete", function(env) {
      if (!env.code) {
        return;
      }

      // works only for <code> wrapped inside <pre> (not inline)
      var pre = env.element.parentNode;
      var clsReg = /\s*\bline-numbers\b\s*/;
      if (
        !pre ||
        !/pre/i.test(pre.nodeName) ||
        // Abort only if nor the <pre> nor the <code> have the class
        (!clsReg.test(pre.className) && !clsReg.test(env.element.className))
      ) {
        return;
      }

      if (env.element.querySelector(".line-numbers-rows")) {
        // Abort if line numbers already exists
        return;
      }

      if (clsReg.test(env.element.className)) {
        // Remove the class 'line-numbers' from the <code>
        env.element.className = env.element.className.replace(clsReg, " ");
      }
      if (!clsReg.test(pre.className)) {
        // Add the class 'line-numbers' to the <pre>
        pre.className += " line-numbers";
      }

      var match = env.code.match(NEW_LINE_EXP);
      var linesNum = match ? match.length + 1 : 1;
      var lineNumbersWrapper;

      var lines = new Array(linesNum + 1);
      lines = lines.join("<span></span>");

      lineNumbersWrapper = document.createElement("span");
      lineNumbersWrapper.setAttribute("aria-hidden", "true");
      lineNumbersWrapper.className = "line-numbers-rows";
      lineNumbersWrapper.innerHTML = lines;

      if (pre.hasAttribute("data-start")) {
        pre.style.counterReset =
          "linenumber " + (parseInt(pre.getAttribute("data-start"), 10) - 1);
      }

      env.element.appendChild(lineNumbersWrapper);

      _resizeElement(pre);

      Prism.hooks.run("line-numbers", env);
    });

    Prism.hooks.add("line-numbers", function(env) {
      env.plugins = env.plugins || {};
      env.plugins.lineNumbers = true;
    });

    /**
     * Global exports
     */
    Prism.plugins.lineNumbers = {
      /**
       * Get node for provided line number
       * @param {Element} element pre element
       * @param {Number} number line number
       * @return {Element|undefined}
       */
      getLine: function(element, number) {
        if (
          element.tagName !== "PRE" ||
          !element.classList.contains(PLUGIN_NAME)
        ) {
          return;
        }

        var lineNumberRows = element.querySelector(".line-numbers-rows");
        var lineNumberStart =
          parseInt(element.getAttribute("data-start"), 10) || 1;
        var lineNumberEnd =
          lineNumberStart + (lineNumberRows.children.length - 1);

        if (number < lineNumberStart) {
          number = lineNumberStart;
        }
        if (number > lineNumberEnd) {
          number = lineNumberEnd;
        }

        var lineIndex = number - lineNumberStart;

        return lineNumberRows.children[lineIndex];
      }
    };

    this.highlightCode();
  }

  highlightCode = () => {
    Prism.highlightElement(this.codeEl);
  };

  setUpCodeCopy = () => {
    this.clipboard = new ClipboardJS("#btnCopy", {
      text: () => this.props.value
    });

    this.clipboard.on("success", function(e) {
      console.info("Text:\n", e.text);
    });
  };

  componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

  componentDidUpdate(prevProps) {
    this.highlightCode();
  }

  render() {
    const { hideTitle = false, style = {} } = this.props;
    return (
      <div className="code-wrapper" style={style}>
        {!hideTitle && (
          <div className="title-bar">
            <Lang>
              <span>{this.props.language}</span>
            </Lang>
            <div style={{ flex: 1 }} />
            <StyledCopyButton style={{ width: "1.5rem", height: "1.5rem" }} />
          </div>
        )}
        <pre>
          <code
            ref={this.setRef}
            className={`language-${this.props.language || "js"}`}
          >
            {this.props.value}
          </code>
        </pre>
      </div>
    );
  }
}

CodeBlock.defaultProps = {
  language: ""
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
  hideTitle: PropTypes.bool,
};

export default CodeBlock;
