import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Container, Content, CanvasContainer } from "./elements";
import Header from "../common/Header";
import Footer from "../Footer/index";

import _img from "./2013-11_C2P_2048px.jpg";
import Christmas from "./christmas";

const WIDTH = 320;
const HEIGHT = 320;

class Portal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.signals.loadPortalPage();
    this.ctx = this.canvasRef.getContext("2d");
    this.canvasRef.width = 320;
    this.canvasRef.height = 320;
    var canvas = this.canvasRef;
    var ctx = this.canvasRef.getContext("2d");
    var WIDTH = 320;
    var HEIGHT = 320;
    this.canvasRef.width = WIDTH;
    this.canvasRef.height = HEIGHT;
    clearCanvas();

    var particles = [];
    for (var i = 0; i < WIDTH; i++) {
      particles.push({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        r: Math.random() * 2 + 1
      })
    }

    function draw() {
      clearCanvas();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();

      for (let i = 0; i < WIDTH; i++) {
        let p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    }

    function update() {
      for (let i = 0; i < WIDTH; i++) {
        let p = particles[i];
        p.y += p.r;
        if (p.y > canvas.height) {
          particles[i] = {
            x: Math.random() * canvas.width,
            y: -10,
            r: p.r
          };
        }
      }
    }

    var timer = setInterval(draw, 50);

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render() {
    const { signals } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <CanvasContainer>
            <canvas ref={e => (this.canvasRef = e)} style={{
              borderRadius: '50%',
              position: 'relative',
              width: '310px',
              height: '290px',
              top: '10px',
              left: '0px',
            }}/>
          </CanvasContainer>
          <Christmas/>
        </Content>
      </Container>
    );
  }
}

export default inject("store", "signals")(observer(Portal));
