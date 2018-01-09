import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Div, ButtonBox, Overlay, ButtonWrapper} from './style/MenuResponsiveStyle';
import LinkStyled from '../Link/Link';
import Icon from '../Icon/Icon';
import Ul from '../List/Ul';
import Li from '../List/Li';

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })

  }

  render() {
    const {Float, link, title, subItems, language, bgColor, foreColor, icon} = this.props;

    let target = '';
    let linkUrl = link;
    if (link.toLowerCase().startsWith(`http://${window.location.host}`)) {
      linkUrl = link.replace(`http://${window.location.host}`, '');
    }
    else if (link.toLowerCase().startsWith('http')) {
      target = '_blank';
    }


    let hasChild = false;
    if (subItems && subItems.length > 0) {
      hasChild = true;
    }
    if (link.includes(':language'))
      linkUrl = link.replace(':language', language);

    let iconArrow;
    if (icon) {
      iconArrow = icon;
    } else {
      iconArrow = 'angle-down';
    }

    return (
      <Li
        style={{float: {Float}}}
        color={foreColor}
      >
        {
          (hasChild) ? (<span
              onClick={this.handleClick}
            >
                     {title}
              <Icon
                iconClass={iconArrow}
                style={{padding: '2px 5px'}}
                color={foreColor}
              />
                      </span>)
            : (<LinkStyled
              to={(!hasChild) ? linkUrl : ''}
              target={target}
              bgcolor={bgColor}
              color={foreColor}
            >
              {title}
            </LinkStyled>)
        }
        {
          hasChild &&
          <Ul style={{display: (this.state.isToggleOn) ? 'block' : 'none'}}>
            {
              subItems.map((subItem, index) => {
                  return (
                    <MenuItem
                      key={index}
                      Right={Float}
                      title={subItem.title}
                      link={subItem.link}
                      subItems={subItem.subItems}
                      bgColor={bgColor}
                      language={language}
                      foreColor={foreColor}
                      icon={icon}
                    />

                  )
                }
              )
            }
          </Ul>
        }
      </Li>
    )

  }

}

class MenuResponsive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      width: ''
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const {
      mainItems,
      right,
      language,
      foreColor,
      icon
    } = this.props;

    let iconArrow;
    if (icon) {
      iconArrow = icon;
    } else {
      iconArrow = 'angle-down';
    }

    let iconClass;
    if (icon) {
      iconClass = icon;
    } else {
      iconClass = 'bars';
    }

    return (

      <div
        style={{position: 'relative'}}
      >
        <ButtonBox>
          <ButtonWrapper
            icon={this.state.isShow ? 'fa fa-window-close-o' : iconClass}
            onClick={this.toggleMenu}
            {...this.props}
          />
        </ButtonBox>
        <Div
          className="navigation-wrapper"
          {...this.props}
        >

          <nav className={`menuSimple ${!this.state.isShow ? 'sfHide' : 'sfShow' }`}>
            <Ul className="nav sf-menu sf-js-enabled" style={{float: right ? 'right' : 'left'}}>
              <Icon
                iconClass='sort-asc'
              />
              {
                mainItems.map((mainItem, i) => {
                  return (
                    <MenuItem
                      key={i}
                      Right={right ? 'right' : 'left'}
                      title={mainItem.title}
                      link={mainItem.link}
                      subItems={mainItem.subItems}
                      language={language}
                      icon={iconArrow}
                    />

                  )
                })
              }

            </Ul>
          </nav>
          <Overlay
            onClick={this.toggleMenu}
            style={{display: (this.state.isShow) ? 'block' : 'none'}}
          />
        </Div>
      </div>

    );
  }
}

MenuResponsive.propTypes = {
  mainItems: PropTypes.array.isRequired,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  iconClass: PropTypes.string,
  iconArrow: PropTypes.string,
  icon: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  rtl: PropTypes.bool,
  theme: PropTypes.object
};

export default MenuResponsive;
