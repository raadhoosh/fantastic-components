/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import getColor from './Statics';

const WrapperStyled = styled.div` 
             margin: 10px 5px 10px 5px;
             padding: 5px;
             display: block;
             color: ${(props) => getColor(props)};             
          
              `;


export default WrapperStyled;
