/**
 * Created by Programmer1 on 12/17/2017.
 */
import styled from 'styled-components';
import { getBorderColor } from './Statics';

const UploadWrapperStyled = styled.div`        
        border: 1px dashed ${(props) => getBorderColor(props)};
        border-radius: 5px;       
        padding: 20px;
        background-image: linear-gradient(135deg,rgba(0,0,0,.03)25%,transparent 25%,transparent 50%,rgba(0,0,0,.03)50%,rgba(0,0,0,.03)75%,transparent 75%,transparent);
        background-size: 100%;
        width: 300px;
        height: 60px;
        direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
      `;

export default UploadWrapperStyled;
