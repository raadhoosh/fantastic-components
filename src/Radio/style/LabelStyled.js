/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import getColor from './Statics';

const Label = styled.label` 
                position: relative;             
                box-sizing: border-box;  
                cursor: pointer;
                margin: 10px 5px 10px 5px;
                padding: 3px;
                display: inline-block;                                    
                font-family: ${(props) => props.theme.fontFamily};       
                direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
                ${props => props.inline && `display: inline-block;
                padding-left: 20px;
                padding-right: 20px;
                font-weight: normal;
                direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
                vertical-align: middle;`
  }
              
              input:checked + span:before {
                content: '';
                width: 5px;
                height: 5px;
                position: absolute;
                background: ${(props) => getColor(props)};   
                left: 5px;
                top: 6px;
                border-radius: 100%;   
                }           
                      
                    `;


export default Label;
