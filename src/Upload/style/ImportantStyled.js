/**
 * Created by Programmer1 on 12/17/2017.
 */
import styled from 'styled-components';

const ImportantStyled = styled.span`    
        color: ${(props) => (Object.keys(props.theme).length > 0 && props.theme) ? props.theme.fixColors.red : defaultTheme.fixColors.red};
              `;

export default ImportantStyled;
