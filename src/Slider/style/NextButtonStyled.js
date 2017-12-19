/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

const NextButton = styled.button`
        position:absolute;
        top: calc(50% - 30px);        
        right :0;
        height:60px;
        width:60px;
        background:transparent;
        color:white;
        border:none;
        cursor:pointer;
        z-index:2;
        &:focus {
          outline:0;
        }
`;
export default NextButton;
