import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components';
import {lighten, darken} from 'polished';
import './rhMenuStyle.css';

import {
    RhLink

} from '../../RhComponents';

import {
    Ul,
    Li,
    RhsButton
} from '../../RHSC'

class Item extends React.Component {
    render() {

        const {Right, link, title, subItems, language, bgColor, foreColor, theme, icon} = this.props;

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
                <RhLink
                    to={(linkUrl) ? linkUrl : '#'}
                    target={target}
                    bgColor={bgColor}
                    color={foreColor}
                    icon={(hasChild) ? icon : ''}
                >
                    {title}
                </RhLink>
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

class Menu extends React.Component {

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
            theme,
            mainItems,
            right,
            language,
            bgColor,
            foreColor,
            icon
        } = this.props;

        let Right;
        if (right) {
            Right = 'right';
        }
        else {
            Right = 'left';
        }


        let bgC;
        if (bgColor) {
            bgC = bgColor;
        } else {
            bgC = theme.primaryColor;
        }

        let C;
        if (foreColor) {
            C = foreColor;
        } else {
            C = theme.primaryForeColor;
        }

        let iconClass;
        if (icon) {
            iconClass = icon;
        } else {
            iconClass = 'angle-down';
        }


        /*---style-start--*/
        const Div = styled.div`           
             
            position:relative;       
                         
             ul {
                    a{
                      white-space: nowrap;
                     }
               }   
             
              li{
                position:relative;
                padding: 0;
                
                 > ul {
                    position: absolute;
                    display: none;
                    top: 100%;
                      ${
            theme.rtl
                ? 'right : 0'
                : 'left:0'
            };           
                    z-index: 99;
                    padding: 0;
                    margin: 0;
                    min-width: 12em;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
                    transition: all .3s ease-in-out;
                    background: transparent;                                 
                   } 
              
                 &:hover > ul {
                   display: block;
                   }  
                                                          
               }
             
             nav > ul > li {
               float: ${ (this.props.theme.rtl) ? 'right' : 'left' } !important;
             }
          
          	a {
               	padding:5px 10px;
               	color:${C} !important;
               	background-color:${bgC};
               	transition:all 0.2s ease-in;
               	
               	:hover{
                    background-color:${lighten(0.08, bgC)} !important;             	 
                    color:${C} !important;
               	}
               	
               	i{
               	${
            theme.rtl
                ? 'float : left'
                : 'float : right'
            }; 
               	color:${C} !important;          
               	}
               	} 
           `;

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
                                        bgColor={bgC}
                                        foreColor={C}
                                        icon={iconClass}
                                    />

                                )
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
