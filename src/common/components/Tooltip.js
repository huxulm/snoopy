import { createGlobalStyle } from 'styled-components';
import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';
// import theme from 'common/theme';

// eslint-disable-next-line
createGlobalStyle`
  .tippy-popper {
    position: absolute;
  }

  .tippy-popper,
  .tippy-popper * {
    pointer-events: none;
  }
  .tippy-tooltip-content.update-theme {
    background: transparent;
  }

  .tippy-tooltip [x-circle] {
    background-color: rgb(21, 24, 25) !important;
  }

  .tippy-tooltip.update-theme {
    .arrow-regular {
      border-bottom: 7px solid ${'#5da700'} !important;
    }

    background-color: ${'#5da700'};
    border-radius: 2px;
    padding: 0 !important;
  }

`;

export default Tooltip;
export { withTooltip };
