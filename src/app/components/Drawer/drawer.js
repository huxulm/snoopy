import './drawer.css';
import React, { Fragment } from 'react';
import { Keyframes, animated, config } from 'react-spring';
import delay from "delay";
import styled, { keyframes } from "styled-components";
import MusicPlayer from '../MusicPlayer/player';
import { LIGHT_GREY } from "../../common/constants";
import Music from "../Icons/music";

const IconFrames = keyframes`
  0% {
    transform: scale(1.0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.0);
  }
  `;
const CtrlIcon = styled.div`
  height: 1em;
  width: 1em;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  border: .2em solid lightgray;
  border-radius: 50%;
  box-sizing: content-box;
  margin: 1em;
  cursor: pointer;
  animation: ${IconFrames} 2s linear infinite;

  &:hover {
    transform: scale(1.2);
    transition: transform 500ms;
  }
`;

const BottomContainer = styled(animated.div)`
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    background: transparent;
    font-size: 15px;
    top: 100%;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px -5px 10px 0px rgba(255, 255, 255, 0.12);
`;
const fast = { ...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01 }

const Bottombar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [
    { delay: 500, from: { y: -100 }, to: { y: 0 }, config: fast },
    { delay: 800, to: { y: -100 }, config: config.slow }
  ],
  // single items,
  open: { to: { y: -100 }, config: config.default },
  // or async functions with side-effects
  close: async call => {
    await delay(100)
    await call({ to: { y: 0 }, config: config.gentle })
  }
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [{ delay: 600, from: { x: 0, opacity: 1 }, to: { x: -100, opacity: 1 } }, { to: { x: 0, opacity: 1 } }],
  open: { delay: 100, to: { x: 0, opacity: 1 } },
  close: { to: { x: -100, opacity: 1 } }
})

const items = [
  <MusicPlayer/>
]

class Drawer extends React.Component {
  state = { open: false };
  toggle = () => this.setState(state => ({ open: !state.open }));
  componentDidMount() {
    window.document.body.addEventListener('click', this.closeDrawerOnClickOutside)
  }

  closeDrawerOnClickOutside = (e) => {
    const { innerHeight } = window;
    const { top, right, bottom, left,x,y, width, height } = this.element.getBoundingClientRect();
    if (e.y < y) {
      this.setState({ open: false});
    }
  }

  setInputRef = (e) => {
    this.element = e;
  }

  render() {
    const { height = 200 } = this.props;
    const state = this.state.open === undefined ? 'peek' : this.state.open ? 'open' : 'close'
    return (
      <div>
        <CtrlIcon onClick={this.toggle}>
          <Music/>
        </CtrlIcon>
        <Bottombar native state={state}>
          {({ y }) => (
            <BottomContainer ref={this.setInputRef} className={this.state.open? '' : 'dw-hide'} style={{ height: `${height}px`,transform: y.interpolate(y => `translate3d(0,${y}%,0)`) }}>
              <Content native keys={items.map((_, i) => i)} config={{ tension: 200, friction: 20 }} state={state}>
                {items.map((item, i) => ({ x, ...props }) => (
                  <animated.div
                    style={{
                      transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      ...props,
                      boxSizing: 'border-box',
                      height: '100%',
                      background: LIGHT_GREY,
                    }}>
                    {item}
                  </animated.div>
                ))}
              </Content>
            </BottomContainer>
          )}
        </Bottombar>
      </div>
    )
  }
}

export default Drawer;