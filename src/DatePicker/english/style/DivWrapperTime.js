/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const DivWrapperTime = styled.div`
      box-sizing: border-box;
      min-height: 42px;
      text-align: center;
      padding: 8px 5px;
      border-bottom: 1px solid ${props => getBorderColor(props)};
      background: ${props => getBgColor(props)};
     
      
      i{
        color: ${props => getColor(props)};        
        &:hover{
          opacity: 0.7; 
        }
      }
      
      button{
        
        height: 22px;
        outline: none;       
        border:1px solid transparent;
        background: transparent;
        cursor: pointer;
        padding: 0; 
        margin: 0;       
        
        &:hover{
          opacity: 0.8; 
        }
      }
      
      input{
       height: 22px;
       box-shadow: none;
       text-align: center;
      }
      
      label{
      color: ${props => getColor(props)};
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      }
      
      `;

export default DivWrapperTime;
