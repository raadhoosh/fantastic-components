import React, {Component} from 'react';
import Check from './check';
import X from './x';
import {pointerCoord} from './util';
import InputStyled from './style/InputStyled';

import './style/style.css';


class ButtonToggle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.classesFunc = this.classesFunc.bind(this);
    this.previouslyChecked = !!(props.checked || props.defaultChecked);
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  handleClick(event) {
    const checkbox = this.input;
    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked;
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return
    }

    const checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked;

    this.setState({checked})
  }

  handleTouchStart(event) {
    this.startX = pointerCoord(event).x;
    this.activated = true
  }

  handleTouchMove(event) {
    if (!this.activated) return;
    this.moved = true;

    if (this.startX) {
      let currentX = pointerCoord(event).x;
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({checked: false});
        this.startX = currentX;
        this.activated = true
      } else if (currentX - 15 > this.startX) {
        this.setState({checked: true});
        this.startX = currentX;
        this.activated = (currentX < this.startX + 5)
      }
    }
  }

  handleTouchEnd(event) {
    if (!this.moved) return;
    const checkbox = this.input;
    event.preventDefault();

    if (this.startX) {
      let endX = pointerCoord(event).x;
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({checked: false});
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({checked: true});
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      }

      this.activated = false;
      this.startX = null;
      this.moved = false;
    }
  }

  handleFocus(event) {
    const {onFocus} = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.setState({hasFocus: true});
  }

  handleBlur(event) {
    const {onBlur} = this.props;

    if (onBlur) {
      onBlur(event);
    }

    this.setState({hasFocus: false});
  }

  getIcon(type) {
    const {icons} = this.props;
    if (!icons) {
      return null
    }
    return icons[type] === undefined
      ? ButtonToggle.defaultProps.icons[type]
      : icons[type]
  }

  classesFunc() {
    let classes
    if (this.state.checked) {
      classes = 'react-toggle--checked';
    } else if (this.state.hasFocus) {
      classes = 'react-toggle--focus';
    } else if (this.props.disabled) {
      classes = 'react-toggle--disabled';
    }
    return classes;
  }

  render() {
    const {className, icons: _icons} = this.props;
    return (
      <div className={this.classesFunc()}
           onClick={this.handleClick}
           onTouchStart={this.handleTouchStart}
           onTouchMove={this.handleTouchMove}
           onTouchEnd={this.handleTouchEnd}>
        <div className='react-toggle-track'>
          <div className='react-toggle-track-check'>
            {this.getIcon('checked')}
          </div>
          <div className='react-toggle-track-x'>
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className='react-toggle-thumb'/>

        <InputStyled
          {...this.props}
          innerRef={x => { this.input = x }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='react-toggle-screenreader-only'
          type='checkbox'/>
      </div>
    )
  }
}

ButtonToggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
};

ButtonToggle.defaultProps = {
  icons: {
    checked: <Check/>,
    unchecked: <X/>,
  },
};

export default ButtonToggle;
