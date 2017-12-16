import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components';
import {lighten, darken} from 'polished';


import {
    RhLink,
    RhIcon
} from '../../RhComponents';

import {
    Ul,
    Li,
    RhsButton
} from '../../RHSC'

class RhMenuItem extends Component {
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
        const {Float, link, title, subItems, language, bgColor, foreColor, theme, icon} = this.props;

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
        console.log('this.state.isToggleOn', this.state.isToggleOn)
        console.log('hasChild', hasChild)

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
                            <RhIcon
                                iconClass={iconArrow}
                                style={{padding: '2px 5px'}}
                                color={foreColor}
                            />
                      </span>)
                        : (<RhLink
                            to={(!hasChild) ? linkUrl : ''}
                            target={target}
                            bgColor={bgColor}
                            color={foreColor}
                        >
                            {title}
                        </RhLink>)
                }
                {
                    hasChild &&
                    <Ul style={{display: (this.state.isToggleOn) ? 'block' : 'none'}}>
                        {
                            subItems.map((subItem, index) => {
                                    return (
                                        <RhMenuItem
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

class RhMenuResponsive extends Component {

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
            theme,
            ColorTitle,
            ColorText,
            mainItems,
            right,
            left,
            language,
            bgColor,
            foreColor,
            icon
        } = this.props;

        let Float = `${
            theme.rtl
                ? 'right'
                : 'left'
            }
             `;
        if (right) {
            Float = 'right';
        }

        if (left) {
            Float = 'left';
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


        /*---style-start--*/
        const Div = styled.div` 
          z-index: 9;
          float: ${Float};
          
                         
                 
         /* ----menu------  */   
            
           nav.menuSimple{             
     @media (max-width: 768px) {  
             width:100%;
             transition: all 0.5s ease-in;
             position:absolute;
             top:70px;
             left:0; 
             overflow-y: auto;  
             max-height: 90vh;               
             z-index: 99;                              
             
           ul{           
            width:100%;  
            transition:all 0.4s ease-in;                 
            overflow: hidden;
            padding-top:20px;                                  
                     
                  i.fa-sort-asc {
                        display:block;
                        ${
            left
                ? 'left : 10px;'
                : 'right:10px'
            };                       
                        font-size: 40px;
                        position: absolute;                        
                        color: ${theme.primaryColor};
                        top: 0;
                               }       
             }                         
         
         
     	    li   {
               	 width:100%;                	           	 
               	 display:block;   
               	 padding:0; 
               	 
               	  ul{
               	      position:relative;
                      padding-top:0;
                      border-bottom:0;
                      box-shadow: 0 0 6px 12px rgba(0, 0, 0, 0.1) inset; 
                      
                      a{
                       background-color:${darken(0.05, theme.primaryColor)}; 
                      }                      
               	    }                              	 
               	   
               	a, span{
               	display: block;
               	white-space: nowrap;
               	padding:15px 30px;
               	color:${theme.primaryForeColor};
               	background-color:${theme.primaryColor};
               	
               	transition:all 0.2s ease-in;
               	border-bottom:1px solid ${darken(0.02, theme.primaryColor)};               	            	
               	
               	&:hover{               	 
               	 background-color:${lighten(0.06, theme.primaryColor)};               	 
               	 color:${theme.primaryForeColor};
                    }
               	}
                }            	          
        	      
        	              	          	
        }    
           }   
              
         /* ---responsive-menu------  */   
         @media (max-width: 768px) {  
             .sfHide{
                visibility: hidden;
                opacity: 0;                
             }
             
            .sfShow {
                visibility: visible;
                opacity: 1;
                transition: all 0.5s ease-in;
              };
             } 
               	
         `;


        const Button = styled.div`       
         display:none;      
       
        @media (max-width: 768px) {  
           display:block;
           overflow:hidden;
           width: 28px;
           height: 28px;
           
           button{
           background:transparent;
           padding:1px; 
           border-color:transparent;
           padding: 0;           
                }
       }         
     `;

        const Overlay = styled.div`
         position: fixed;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         background-color: rgba(0, 0, 0, 0.23);
         z-index: 9;

`;

        return (

            <Div
                className="navigation-wrapper"
                {...this.props}
            >
                <Button>
                    <RhsButton
                        icon={this.state.isShow ? 'fa fa-window-close-o' : iconClass}
                        onClick={this.toggleMenu}
                        foreColor={foreColor}
                    />
                </Button>
                <nav className={`menuSimple ${!this.state.isShow ? 'sfHide' : 'sfShow' }`}>
                    <Ul className="nav sf-menu sf-js-enabled" style={{float: {Float}}}>
                        <RhIcon
                            iconClass='sort-asc'
                        />
                        {
                            mainItems.map((mainItem, i) => {
                                return (
                                    <RhMenuItem
                                        key={i}
                                        Right={Float}
                                        title={mainItem.title}
                                        link={mainItem.link}
                                        subItems={mainItem.subItems}
                                        language={language}
                                        bgColor={bgC}
                                        foreColor={C}
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

        );
    }
}

RhMenuResponsive.propTypes = {
    mainItems: PropTypes.array.isRequired,
    bgColor: PropTypes.string,
    foreColor: PropTypes.string,
    iconClass: PropTypes.string,
    iconArrow: PropTypes.string,
    icon: PropTypes.string,
    right: PropTypes.string,
    left: PropTypes.string,
    rtl: PropTypes.bool,
    theme: PropTypes.object,
};

export default withTheme(RhMenuResponsive);
