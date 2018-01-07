import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeaderStyled from './style/HeaderStyled';
import CollapsibleStyled from './style/CollapsibleStyled';

class Collapsible extends Component {
  constructor(props, context) {
    super(props, context);
    let isClosed;
    let shouldSwitchAutoOnNextCycle;
    let height;
    let transition;
    let hasBeenOpened;
    let overflow;
    if (props.open) {
      isClosed = false;
      shouldSwitchAutoOnNextCycle = false;
      height = 'auto';
      transition = 'none';
      hasBeenOpened = true;
      overflow = props.overflowWhenOpen;

    }
    else {
      isClosed = true;
      shouldSwitchAutoOnNextCycle = false;
      height = 0;
      transition = 'height ' + props.transitionTime + 'ms ' + props.easing;
      hasBeenOpened = false;
      overflow = 'hidden';

    }
    this.state = {
      isClosed: isClosed,
      shouldSwitchAutoOnNextCycle: shouldSwitchAutoOnNextCycle,
      height: height,
      transition: transition,
      hasBeenOpened: hasBeenOpened,
      overflow: overflow
    };
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.closeCollapsible = this.closeCollapsible.bind(this);
    this.openCollapsible = this.openCollapsible.bind(this);
    this.makeResponsive = this.makeResponsive.bind(this);
    this.prepareToOpen = this.prepareToOpen.bind(this);
  }


  componentDidMount() {
    //Set up event listener to listen to transitionend so we can switch the height from fixed pixel to auto for much responsiveness;
    //TODO:  Once Synthetic transitionend events have been exposed in the next release of React move this funciton to a function handed to the onTransitionEnd prop

    this.refs.outer.addEventListener(this.whichTransitionEnd(this.refs.outer), (event) => {
      if (this.state.isClosed === false) {
        this.setState({
          shouldSwitchAutoOnNextCycle: true
        });
      }

    });
  }

  componentDidUpdate(prevProps) {

    if (this.state.shouldSwitchAutoOnNextCycle === true && this.state.isClosed === false) {
      //Set the height to auto to make compoenent re-render with the height set to auto.
      //This way the dropdown will be responsive and also change height if there is another dropdown within it.
      this.makeResponsive();
    }

    if (this.state.shouldSwitchAutoOnNextCycle === true && this.state.isClosed === true) {
      this.prepareToOpen();
    }

    //If there has been a change in the open prop (controlled by accordion)
    if (prevProps.open !== this.props.open) {
      if (this.props.open === true) {
        this.openCollapsible();
      }
      else {
        this.closeCollapsible();
      }
    }
  }

  whichTransitionEnd(element) {
    var transitions = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd otransitionend',
      'transition': 'transitionend'
    };

    for (var t in transitions) {
      if (element.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  handleTriggerClick(event) {

    event.preventDefault();

    if (this.props.triggerDisabled) {
      return
    }

    if (this.props.handleTriggerClick) {
      this.props.handleTriggerClick(this.props.accordionPosition);
    }
    else {

      if (this.state.isClosed === true) {
        this.openCollapsible();
        if (this.props.onClick) this.props.onClick();
      }
      else {
        this.closeCollapsible();
      }
    }

  }

  closeCollapsible() {
    this.setState({
      isClosed: true,
      shouldSwitchAutoOnNextCycle: true,
      height: this.refs.inner.offsetHeight,
      overflow: 'hidden'
    }, this.props.onClose);
  }

  openCollapsible() {
    this.setState({
      height: this.refs.inner.offsetHeight,
      transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing,
      isClosed: false,
      hasBeenOpened: true
    }, this.props.onOpen);
  }

  makeResponsive() {
    this.setState({
      height: 'auto',
      transition: 'none',
      shouldSwitchAutoOnNextCycle: false,
      overflow: this.props.overflowWhenOpen
    });
  }

  prepareToOpen() {
    //The height has been changes back to fixed pixel, we set a small timeout to force the CSS transition back to 0 on the next tick.
    window.setTimeout(() => {
      this.setState({
        height: 0,
        shouldSwitchAutoOnNextCycle: false,
        transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing
      });
    }, 50);
  }

  renderNonClickableTriggerElement() {
    if (this.props.triggerSibling) {
      return (
        <span className={this.props.classParentString + "__trigger-sibling"}>{this.props.triggerSibling}</span>
      )
    }

    return null;
  }

  render() {
    var dropdownStyle = {
      height: this.state.height,
      WebkitTransition: this.state.transition,
      msTransition: this.state.transition,
      transition: this.state.transition,
      overflow: this.state.overflow
    }

    var openClass = this.state.isClosed ? 'is-closed' : 'is-open';
    var disabledClass = this.props.triggerDisabled ? 'is-disabled' : '';

    //If user wants different text when tray is open
    var trigger = (this.state.isClosed === false) && (this.props.triggerWhenOpen !== undefined) ? this.props.triggerWhenOpen : this.props.trigger;

    // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
    var children = this.props.children;
    if (this.props.lazyRender)
      if (!this.state.hasBeenOpened)
        children = null;

    //let triggerClassName = this.props.classParentString + "__trigger" + ' ' + openClass + ' ' + disabledClass;
    let triggerClassName = `${this.props.classParentString }__trigger  ${openClass}  ${disabledClass}`;

    if (this.state.isClosed) {
      triggerClassName = triggerClassName + ' ' + this.props.triggerClassName;
    } else {
      triggerClassName = triggerClassName + ' ' + this.props.triggerOpenedClassName;
    }
    let innerClassName = `${this.props.classParentString } __contentInner   ${this.props.contentInnerClassName}`;
    let outerClassName = `${this.props.classParentString}  "__contentOuter"  ${this.props.contentOuterClassName}`;


    //------------

    return (
      <CollapsibleStyled
        className={this.props.classParentString + ' ' + (this.state.isClosed ? this.props.className : this.props.openedClassName)}>
        <HeaderStyled className={triggerClassName.trim()} onClick={this.handleTriggerClick}
                      {...this.props}
        >{trigger}
        </HeaderStyled>

        {this.renderNonClickableTriggerElement()}

        <div className={outerClassName}
             ref="outer" style={dropdownStyle}>
          <div className={innerClassName}
               ref="inner">
            {children}
          </div>
        </div>
      </CollapsibleStyled >
    );
  }
}

Collapsible.propTypes = {
  transitionTime: PropTypes.number,
  easing: PropTypes.string,
  open: PropTypes.bool,
  classParentString: PropTypes.string,
  openedClassName: PropTypes.string,
  triggerClassName: PropTypes.string,
  triggerOpenedClassName: PropTypes.string,
  contentOuterClassName: PropTypes.string,
  contentInnerClassName: PropTypes.string,
  accordionPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleTriggerClick: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  triggerWhenOpen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  triggerDisabled: PropTypes.bool,
  lazyRender: PropTypes.bool,
  overflowWhenOpen: PropTypes.oneOf([
    'hidden',
    'visible',
    'auto',
    'scroll',
    'inherit',
    'initial',
    'unset'
  ]),
  triggerSibling: PropTypes.element,

  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  theme: PropTypes.object,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func
};


Collapsible.defaultProps = {
  transitionTime: 400,
  easing: 'linear',
  open: false,
  classParentString: 'Collapsible',
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: 'hidden',
  openedClassName: '',
  triggerClassName: '',
  triggerOpenedClassName: '',
  contentOuterClassName: '',
  contentInnerClassName: '',
  className: '',
  triggerSibling: null,
  onOpen: () => {
  },
  onClose: () => {
  }

};

export default Collapsible;
