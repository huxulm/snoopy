import React from "react";
import { inject, observer } from "mobx-react";
import { NotificationContainer, GlobalStyle } from "./elements";
import { Transition } from "react-spring";
import Notification from "./Notification";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.interval = setInterval(() => {

    }, 3000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  hoverEnter = () => {
    this.setState({
      hovering: true
    });
  };

  hoverOff = () => {
    this.setState({
      hovering: false
    });
  };

  render() {
    const notifications = [{ n: 'Apples' }, { n: 'Oranges' }, { n: 'Bananas' }];
    return (
      <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverOff}>
        <GlobalStyle />
        <Transition
          items={notifications.map((notif, i) => ({
            i, ...notif, close: () => {
              console.log(`Closing: ${i}-${JSON.stringify(notif)}`);
            }
          }))}
          from={{
            bottom: -150,
            opacity: 1
          }}
          enter={item => ({
            bottom: 24 + 60 * (notifications.length - 1 - item.i),
            opacity: 1
          })}
          leave={item => ({
            bottom: 24 + 60 * (notifications.length - 1 - item.i),
            opacity: 0
          })}
        />
        {notif => styles => (
          <NotificationContainer key={notif.i} style={styles}>
            <Notification type={notif.type} title={notif.n} close={notif.close} buttons={[]}/>
          </NotificationContainer>
        )}
      </div>
    );
  }
}

export default inject("store", "signals")(observer(Notifications));
