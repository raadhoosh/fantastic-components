import styled from 'styled-components';

const OlStyled = styled.ol` 
        font-family: ${(props) => props.theme.fontFamily};
        direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' }; 
        background:${props => props.theme.bgColor};
        color:${props => props.theme.fontColor};
`;

export default OlStyled;
