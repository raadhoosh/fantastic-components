import styled from 'styled-components';

const OlStyled = styled.ol` 
        font-family: ${(props) => props.theme.fontFamily};
        direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' }; 
      
`;

export default OlStyled;
