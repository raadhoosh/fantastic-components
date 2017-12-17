import React from 'react';
import Root from './RootStyled';
import Nav from './NavStyled';
import Title from './TitleStyled';
import Overly from './OverlyStyled';
class Drawer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showNav: props.showNav || false
    };
    this.hideNav = this.hideNav.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showNav !== this.props.showNav && nextProps.showNav !== this.state.showNav)
      nextProps.showNav ? this.showNav() : this.hideNav();
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (nextProps.showNav !== this.props.showNav && nextProps.showNav === this.state.showNav)
      return false;
    return true;
  }

  showNav() {
    this.nav.style.transition = 'transform 0.33s cubic-bezier(0,0,0.3,1)';
    this.setState({showNav: true}, this.props.onShowNav);
  }

  hideNav() {
    this.nav.style.transition = 'transform 0.13s cubic-bezier(0,0,0.3,1)';
    this.setState({showNav: false}, this.props.onHideNav);
  }

  onTouchStart(evt) {
    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;
    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  }

  onTouchMove(evt) {
    let {openFromRight} = this.props;
    if (!this.touchingSideNav) return;
    this.currentX = evt.touches[0].pageX;
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    if (!openFromRight && translateX < 0) evt.preventDefault();
    if (openFromRight && translateX > 0) evt.preventDefault();
  }

  onTouchEnd(evt) {
    let {openFromRight} = this.props;
    if (!this.touchingSideNav) return;
    this.touchingSideNav = false;
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    this.nav.style.transform = '';
    if (!openFromRight && translateX < 0) this.hideNav();
    if (openFromRight && translateX > 0) this.hideNav();
  }

  update() {
    let {openFromRight} = this.props;
    if (!this.touchingSideNav) return;
    requestAnimationFrame(this.update);
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    this.nav.style.transform = `translateX(${translateX}px)`;
  }




  getStyle() {
    let {showNav} = this.state;
    let {openFromRight} = this.props;
    let styles = {
      nav: {
        transform: showNav ? 'none' : `translateX(${openFromRight ? 102 : -102}%)`
      }
    };
    Object.assign(styles.nav, this.props.navStyle);
    return styles;
  }

  render() {
    const styles = this.getStyle();
    const { showNav } = this.state;

    return (
      <Root style={{ pointerEvents: showNav ? 'auto' : 'none' }}>
        <Overly style={{ opacity: showNav ? 1 : 0 }}
             onClick={this.hideNav}/>
        <Nav style={styles.nav}
             onTransitionEnd={(e) => { e.target.style.transition = 'none'}}
             onTouchStart={this.onTouchStart}
             onTouchMove={this.onTouchMove}
             onTouchEnd={this.onTouchEnd}
             innerRef={nav => { this.nav = nav }}>
          <Title {...this.props}>{ this.props.title || 'Navigation'}</Title>
          { this.props.children }
        </Nav>
      </Root>
    );
  }
}


export default Drawer;
