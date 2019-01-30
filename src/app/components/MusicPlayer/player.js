import React from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from 'react-player';
import styled from "styled-components";
import Progress from "./progress";
import { Col, Center } from "../../common";
import Duration from "./duration";
import Volume from "../Icons/volume";
import FullScreen from "../Icons/fullscreen";
import Button from "@material-ui/core/Button"
import Waves from "./waves";
import screenfull from 'screenfull'

import './player.scss';
import { DEEP_GREY, LIGHT_GREY, DARK_GREY } from "../../common/constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* align-content: center;
  justify-content: center;
  justify-items: center; */
  width: 100%;
  height: 100%;
  position: absolute;
  /* border: 5px solid rgb(203, 203, 203); */
  @media (max-width: 700px) {
    height: 100%;
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
  }
`;

const Item = styled.div`
  flex: 1;
  @media screen and (max-width: 700px) {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;

const PlayList = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`;

const CtrlPane = styled(Col)`
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 30%;
  transform: translateY(-100%);
  background: rgba(255, 255, 255, .2);
  @media (max-width: 700px) {
    flex: 1;
    top: 100%;
    width: 100%;
    max-height: 30%;
    transform: translateY(-100%);
  }
  color: white;
  font-family: 'Consola', monospace;
  font-weight: 600;
`;

const Playing = styled(Center)`
  background: transparent;
  padding: 0;
`;

const Playing2 = styled(Playing)`
  width: 40%;
  height: 14px;
  margin-bottom: 2px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ListItem = styled.div`
  line-height: 3em;
  height: 3em;
  background: ${props => props.selected? LIGHT_GREY : DARK_GREY};
  padding-left: 1em;
  list-style: none;
  box-sizing: border-box;
  border-left: ${
    props => props.selected? '.5em solid #01A2F8' : ''
  };
  &:hover {
    background: ${DARK_GREY};
  }
  span {
    font-size: .8em;
    font-style: italic;
    margin-left: 1em;
  }
`;

const Player = styled(Col)`
  background: ${DEEP_GREY};
  height: 100%;
  position: relative;
  flex: 0 0 auto;
  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
    height: 100%;
    display: block;
  }
  /* border: 5px solid wheat; */
`;

const LyricToggle = styled.div`
  position: relative;
  top: -100%;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  right: -90%;
  margin-top: 1em;
  margin-right: 100%;
  line-height: 1.5em;
  color: white;
  cursor: pointer;
  border: .2em solid white;
  border-radius: 5px;
  font-size: 12px;
`;

const FullScreenToggle = styled.div`
  position: relative;
  top: -100%;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  align-content: center;
  right: -90%;
  margin-top: 1em;
  margin-right: 100%;
  line-height: 1em;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  font-size: 10px;
`;

const Lyric = styled.div`
  color: white;
  word-wrap:break-word;
  white-space: pre;
  position: inherit;
  text-align: center;
  padding: .2em;
  width: 100%;
  @media (max-width: 700px) {
    flex: 1;
    height: 100%;
  }
  background: ${LIGHT_GREY};
  box-sizing: border-box;
  /* overflow: scroll; */
  height: 100%;
`;

class MusicPlayer extends React.Component {
  state = {
    url: 'http://snoopy-blog.oss-cn-shanghai.aliyuncs.com/music/%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E/%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E-%E5%80%9F%E6%88%91%E4%B8%80%E7%94%9F.flac',
    albums: [{
      id: 1,
      url: 'https://snoopy-blog.oss-cn-shanghai.aliyuncs.com/music/%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E5%80%9F%E6%88%91_m0022z0gizd_4_0%20%5Bmqms%5D.mp4',
      album_name: '借我',
      author: '谢春花',
    }, {
      id: 2,
      url: 'http://snoopy-blog.oss-cn-shanghai.aliyuncs.com/music/%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E/%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E-%E5%80%9F%E6%88%91%E4%B8%80%E7%94%9F.flac',
      album_name: '借我一生',
      author: '水木年华',
    }, {
      id: 3,
      url: 'http://snoopy-blog.oss-cn-shanghai.aliyuncs.com/music/%E4%B8%A2%E7%81%AB%E8%BD%A6/%E4%B8%A2%E7%81%AB%E8%BD%A6%E4%B9%90%E9%98%9F%20-%20%E5%87%8B%E8%B0%A2%E4%B9%8B%E5%89%8D%20%28KTV%E7%89%88%29_j0025erjox8_3_0%20%5Bmqms%5D.mp4',
      album_name: '凋谢之前',
      author: '丢火车',
    }],
    playing: true,
    volume: 0.0,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    showLyric: false,
    selected: false,
    curMedia: null,
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  stop = () => {
    this.setState({ url: null, playing: false })
  }

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress = state => {
    // console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  onDuration = (duration) => {
    this.setState({ duration })
  }

  onProgressSeek = (value) => {
    this.onSeekChange({ target: { value } });
    this.player.seekTo(parseFloat(value));
  }

  onVolumeChange = (value) => {
    value = parseFloat(value);
    this.setState(
      { volume: value > 1? 1 : value < 0? 0 : value }
    )
  }

  ref = player => {
    this.player = player
  }

  volumeAdd = () => {
    this.onVolumeChange(this.state.volume + 0.1);
  }

  volumeSub = () => {
    this.onVolumeChange(this.state.volume - 0.1);
  }

  toggleLyric = () => {
    this.setState({
      showLyric: !this.state.showLyric,
    });
  }

  toggleFullScreen = () => {
    screenfull.request(findDOMNode(this.player));
  }

  toggleListItem = (item) => {
    this.setState({
      selected: !this.state.selected,
      curMedia: item,
    });
  }

  componentDidMount() {
    window.addEventListener('keypress', (event) => {
      const keyName = event.key;
      if (keyName === 'Enter') {
        this.playPause();
      }
    })
  }

  renderList = () => {
    const { albums } = this.state;
    return (
      <PlayList>
        {albums.map((al, idx) => {
          return (
            <ListItem selected={(this.state.curMedia || idx == 0)} onClick={this.toggleListItem.bind(this, al)}>
              {al.album_name}
              <span>{al.author}</span>
            </ListItem>
          );
        })}
      </PlayList>
    );
  }

  render() {
    const { url, curMedia, albums, playing, loop, playbackRate, volume, muted, played, duration} = this.state;
    let _isMv = isMv(curMedia? curMedia.url : albums[0].url);
    return (
      <Container>
        <Item>
          {this.renderList()}
        </Item>
        <Item>
          <Player ref={e => this.playerRef = e}>
            <ReactPlayer
                className="rt-player"
                width="100%"
                height="100%"
                ref={ this.ref }
                url={curMedia? curMedia.url : albums[0].url}
                playing={playing}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted} 
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={this.onPlay}
                onPause={this.onPause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.onEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.onProgress}
                onDuration={this.onDuration} volume={volume} />
            {_isMv? null : <Waves id="wave"/>}
            <CtrlPane>
              <Playing>
                <Duration className="play-dur" seconds={duration * played}></Duration>
                <Progress onSeek={this.onProgressSeek} value={this.state.played*100} backgroundColor={'#E9ECEF'} style={{height: '4px'}} indicatorColor="#868E96"/>
                <Duration className="play-dur-r" seconds={duration}></Duration>
              </Playing>
              <Playing2>
                <Volume/>
                <Button children={"-"} onClick={this.volumeSub}/>
                <Progress onSeek={this.onVolumeChange} value={this.state.volume*100} backgroundColor={'#E9ECEF'} style={{height: '4px'}} indicatorColor="#868E96"/>
                <Button children={"+"} onClick={this.volumeAdd}/>
              </Playing2>
            </CtrlPane>
          </Player>
          {!_isMv? <LyricToggle onClick={this.toggleLyric}>词</LyricToggle> : <FullScreenToggle onClick={this.toggleFullScreen}><FullScreen/></FullScreenToggle>}
          {!_isMv && this.state.showLyric? <Lyric>{lyricText}</Lyric> : null}
        </Item>
      </Container>
    );
  }
}

const isMv = (url) => {
  return /.mp4$/g.test(url);
}

const lyricText = "歌词：\n 借我一生\n 秋风吹过黄昏落叶飘起来\n 松开握紧的手转身要离开\n 你扑进我怀里突然哭出来\n 我忍不住想对你说出那份爱\n 是否只有分别之后的期待\n 我才能体会你是我的最爱\n 是否只有用尽一生的等待\n 我们才能明白生命中的真爱\n 借我你的一生\n 你说好不好\n 就算有一天\n 我动也动不了\n 我要靠在你身边\n 诉说爱恋不变\n 直到我不能再说\n 你也听不见\n 是否只有分别之后的期待\n 我才能体会你是我的最爱\n 是否只有用尽一生的等待\n 我们才能明白生命中的真爱\n 借我你的一生\n 你说好不好\n 就算有一天\n 我动也动不了\n 我要靠在你身边\n 诉说爱恋不变\n 直到我不能再说\n 你也听不见\n 借我你的一生\n 你说好不好\n 就算有一天\n 我动也动不了\n 我要靠在你身边\n 诉说爱恋不变\n 直到我不能再说\n 你也听不见\n 直到我不能再说\n 你也听不见\n ";
export default MusicPlayer;