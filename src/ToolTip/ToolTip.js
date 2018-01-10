import React, {Component} from 'react';
import ToolTipStyled from './style/ToolTipStyled';

class Tooltip extends Component {
  constructor () {
    super();
    this.state = {
      isVisible: false,
    };
    this.timer;
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  handleMouseEnter () {
    this.timer = setTimeout(() => {
      this.setState({
        isVisible: true
      });
    }, this.props.delayTime);
  }

  handleMouseLeave () {
    clearTimeout(this.timer);
    this.setState({
      isVisible: false
    });
  }

  render () {
    const isVisible = this.state.isVisible ? ' is-visible' : ' is-hidden';
    const className = ` ${isVisible}`;

    return (
      <ToolTipStyled
        className={className}
        {...this.props}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}>
        <span>{this.props.label}</span>
        {this.props.children}
      </ToolTipStyled>
    );
  }
}

export default Tooltip;
