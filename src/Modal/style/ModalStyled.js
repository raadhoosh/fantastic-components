import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

const ModalStyled = styled.div`
       position: relative;
        width: auto;
        margin: 10px auto;
        background: #fff;        
        max-width:${ props => props.maxWidth ? props.maxWidth : '100%'};
        direction: ${(props) => (props.rtl || props.theme.rtl || defaultTheme.rtl) ? 'rtl' : 'ltr' };
        `;

export default ModalStyled;
