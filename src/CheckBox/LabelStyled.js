/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import { getColor  } from './statics';

const Label = styled.label` 
              box-sizing: border-box;  
              padding: .2em .6em .3em;
              font-size: 75%;
              font-weight: bold;
              line-height: 1;
              color:  ${(props) => getColor(props)};             
              white-space: nowrap;
              vertical-align: baseline;
              border-radius: .25em;
               cursor: pointer;
              `;


export default Label;
