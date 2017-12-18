/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getBorderC} from './Statics';

const Image = styled.img`            
          display: block;
          max-width: 100%;
          height: auto;
          border:  1px solid ${(props) => getBorderC(props)}; 
                     
          ${(props) => props.ImageType === 'rounded' ? 'border-radius: 6px;'
  : (props.ImageType === 'circle' ? 'border-radius: 50%;' : props.ImageType === 'thumbnail' ? `            display: inline-block;
            padding: 4px;           
            background-color:${getBgColor(props)};     
            border:  1px solid ${getBorderC(props)};            
            border-radius: 4px;
            transition: all .2s ease-in-out;` : '')
  }
     `;

export default Image;
