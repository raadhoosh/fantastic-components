import React, {Component} from 'react';
import NotifyContainer from './style/NotifyContainerStyled';
import NotifyItem from './style/NotifyItemStyled';
import NotifyTitle from './style/NotifyTitleStyled';

class Notify extends Component {
  constructor() {
    super();
    this.wasMounted = true;
    this.key = 0;
    this.state = {};
  }

  componentWillMount() {
    const {title, msg, time} = this.props;
    this.addNotify(title, msg, time);
    this.style = this._setStyle();
  }

  componentWillUpdate() {

    this.style = this._setStyle();

  }

  componentWillUnmount() {
    this.wasMounted = false;
  }

  show(title, msg, time) {
    this.addNotify(title, msg, time);
  }

  addNotify(title, msg, time) {
    const key = this.key++;
    const state = Object.assign(this.state, {[key]: {title, msg, time}});

    this.setState(state, () => this.countToHide(time, key));
  }

  countToHide(duration, key) {
    setTimeout(() => {
      this.hideNotification(key);
    }, duration);
  }

  hideNotification(key) {
    if (!this.wasMounted) {
      return;
    }

    this.setState((state) => {
      delete state[key];
      return state;
    });
  }

  _setStyle() {
    let position = {};
    switch (this.props.position) {
      case 'top left':
        position = {
          top: 0,
          right: 'auto',
          bottom: 'auto',
          left: 0,
          zIndex: 1000
        };
        break;
      case 'top right':
        position = {
          top: 0,
          right: 0,
          bottom: 'auto',
          left: 'auto',
          zIndex: 1000
        };
        break;
      case 'top center':
        position = {
          top: 0,
          right: '50%',
          left: '50%',
          zIndex: 1000
        };
        break;
      case 'bottom left':
        position = {
          top: 'auto',
          right: 'auto',
          bottom: 0,
          left: 0,
          zIndex: 1000
        };
        break;
      case 'bottom right':
        position = {
          top: 'auto',
          right: 0,
          bottom: 0,
          left: 'auto',
          zIndex: 1000
        };
        break;
      case 'bottom center':
        position = {
          right: '50%',
          left: '50%',
          bottom: 0,
          zIndex: 1000
        };
        break;
      case 'middle center':
        position = {
          top: '50%',
          right: '50%',
          left: '50%',
          zIndex: 1000
        };
        break;
      case 'middle left':
        position = {
          top: '50%',
          left: 0,
          zIndex: 1000
        };
        break;
      case 'middle right':
        position = {
          top: '50%',
          right: 0,
          zIndex: 1000
        };
        break;
      default:
        position = {
          top: 'auto',
          right: 0,
          bottom: 0,
          left: 'auto',
          zIndex: 1000
        };
        break;
    }

    return {
      margin: this.props.offset + 'px',
      top: position.top,
      right: position.right,
      bottom: position.bottom,
      left: position.left,
      zIndex: position.zIndex
    };
  }

  componentDidUpdate() {
    this.style = this._setStyle();
  }

  item(key) {
    const {title, msg} = this.state[key];
    return (
      <NotifyItem key={key} onClick={() => this.hideNotification(key)}  {...this.props}>
        <NotifyTitle  {...this.props}>{title}</NotifyTitle>
        <p>{msg}</p>
      </NotifyItem>
    );
  }

  render() {
    const {state} = this;
    const keys = Object.keys(state);
    const el = keys.map((key) => this.item(key));

    return <NotifyContainer style={this.style} {...this.props}   >{el}</NotifyContainer>;
  }
}

export default Notify;
