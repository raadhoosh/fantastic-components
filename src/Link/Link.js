import React, {Component} from 'react';
import Icon from '../Icon/Icon';
import LinkStyled from './LinkStyled';

class LinkWrapper extends Component {
  render() {

    const {to, target, noUnderline, icon} = this.props;
    let Target = '';
    let linkUrl = to;
    if (to.toLowerCase().startsWith(`http://${window.location.host}`)) {
      linkUrl = to.replace(`http://${window.location.host}`, '');
    }
    else if (to.toLowerCase().startsWith('http')) {
      Target = '_blank';
    }
    if (target) {
      Target = '_blank';
    }

    let textDecoration = "underline";
    if (noUnderline) {
      textDecoration = "none !important";
    }

    return (
      <LinkStyled
        to={linkUrl} target={Target}
        onClick={this.props.onClick}
        {...this.props}
      >
        <Icon
          iconClass={icon}
          style={{padding: '2px 5px'}}
        />
        {this.props.children}
      </LinkStyled>
    );
  }
}


export default LinkWrapper;
