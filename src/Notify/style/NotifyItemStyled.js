/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';
import { getColor, getBgColor, getBorderColor  } from './Statics';

const NotifyItemStyled = styled.div`    
             width: 250px;      
              margin: 5px 10px;
              color:${(props) => getColor(props)};
              background-color:${(props) => getBgColor(props)};    
              border: 1px solid ${(props) => getBorderColor(props)};
              border-radius: 5px;
              &:hover{
                opacity: 0.8;
                box-shadow: 0 0 10px 0 #0f0f0f;
                cursor: pointer;
              };
              p{
               font-family: 'Lora', serif;
                margin: 10px;
                opacity: .8;
                direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
              }
             
              `;
export default NotifyItemStyled;
