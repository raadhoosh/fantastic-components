import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Ul from '../List/Ul';
import Li from '../List/Li';
import ReactLink from '../Link/Link';
import Div from './style/MenuStyled';

class MenuItem extends Component {
  render() {

    const {Right, link, title, subItems, language, bgColor, foreColor, icon} = this.props;

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

    return (
      <Li style={{float: {Right}}}>
        <ReactLink
          to={(linkUrl) ? linkUrl : '#'}
          target={target}
          bgcolor={bgColor}
          color={foreColor}
          icon={(hasChild) ? icon : ''}
        >
          {title}
        </ReactLink>
        {
          hasChild &&
          <Ul>
            {
              subItems.map((subItem, index) => {
                  return (
                    <MenuItem
                      key={index}
                      Right={Right}
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

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: false
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
      icon
    } = this.props;

    let Right;
    if (right) {
      Right = 'right';
    }
    else {
      Right = 'left';
    }

    let iconClass;
    if (icon) {
      iconClass = icon;
    } else {
      iconClass = 'angle-down';
    }

    return (

      <Div className="navigation-wrapper" {...this.props}>
        <nav>
          <Ul className="nav sf-menu sf-js-enabled" style={{float: {Right}}}>
            {
              mainItems.map((mainItem, i) => {
                return (
                  <MenuItem
                    key={i}
                    Right={Right}
                    title={mainItem.title}
                    link={mainItem.link}
                    subItems={mainItem.subItems}
                    language={language}
                    icon={iconClass}
                  />
                );
              })
            }

          </Ul>
        </nav>
      </Div>

    );
  }
}

Menu.propTypes = {
  mainItems: PropTypes.array.isRequired,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  iconClass: PropTypes.string,
  icon: PropTypes.string,
  language: PropTypes.string,
  rtl: PropTypes.bool,
  theme: PropTypes.object,
};

export default Menu;
