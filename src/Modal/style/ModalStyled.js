import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

const ModalStyled = styled.div`
       position: relative;
        width: auto;
        margin: 10px auto;
        background: #fff;
        max-width: 800px;
        direction: ${(props) => (props.rtl || props.theme.rtl || defaultTheme.rtl) ? 'rtl' : 'ltr' };
        `;

export default ModalStyled;
