/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import { getColor, getBgColor, getBorderColor } from './Statics';

const UlStyled = styled.ul`
      list-style:none;
             li{
          
          cursor:pointer;         
          border-radius: 3px;
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;
          margin: 1px 2px;
          padding: 5px 10px;
          display: inline-block;
          border-top: 1px solid #fff;
          text-decoration: none;
          color: #717171;        
          text-shadow: white 0 1px 0;
          background-color: #f5f5f5;
          background-image: -webkit-gradient(linear, left top, left bottom, from(#f9f9f9), to(#eaeaea));
          background-image: -webkit-linear-gradient(top, #f9f9f9, #eaeaea);
         }        
         .active{
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;
          border-top: 1px solid ${(props) => getBorderColor(props)};
          background-color: ${(props) => getBgColor(props)};
          color:${(props) => getColor(props)};
          background-image: -webkit-linear-gradient(top,${(props) => getBgColor(props)},${(props) => getBgColor(props)});
         }
    `;

export default UlStyled;
