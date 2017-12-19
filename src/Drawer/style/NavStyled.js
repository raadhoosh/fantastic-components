/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';
import {getBorderColor  } from './Statics';

const NavStyled = styled.nav`    
 
        
        maxWidth: 300px;
        height: 100%;
        background: #FFF;
        box-shadow: 2px 0 12px rgba(0,0,0,0.4);
        display: flex;
        will-change: transform;
        flex-direction: column;
        float:${(props) => (props.theme.rtl || props.openFromRight) ? 'right' : 'left'} ;
         border: 1px solid ${(props) => getBorderColor(props)};
        
              `;
export default NavStyled;
