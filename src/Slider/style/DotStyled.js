/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import { getBorderColor } from './Statics';

const DotStyled = styled.ul`        
  position: absolute;
  width: 100%;
  padding: 0;
  margin:0;
  bottom:0;
  list-style: none;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -20, -26);
  li{
   position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
  button{
    font-size: 0;
    line-height: 0;
    display: block;
    width: 8px;
    height: 8px;
    padding: 4px;
    cursor: pointer;
    color: transparent;
    border: 1px solid  ${(props) => getBorderColor(props)};  
    outline: none;
    background: white;
    border-radius: 50%; 
    &:hover{
     outline: none;
    };
    &:focus{
     outline: none;
    };
    &:before{
      font-size: 6px;
      line-height: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      content: '•';
      text-align: center;
      opacity: .25;
      color: black;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
   }
  }
  `;

export default DotStyled;
