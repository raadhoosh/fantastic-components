/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


function getColor(props) {
    const {
        primary,
        secondary,
        info,
        warning,
        danger,
        success,
        inverse,
        foreColor,
        theme,
    } = props;

    let ForeC;
    if (primary) {
        ForeC = theme.primary.foreColor;
    }
    else if (secondary) {
        ForeC = theme.secondary.foreColor;
    }
    else if (info) {
        ForeC = theme.info.foreColor;
    }
    else if (warning) {
        ForeC = theme.warning.foreColor;
    }
    else if (danger) {
        ForeC = theme.danger.foreColor;
    }
    else if (success) {
        ForeC = theme.success.foreColor;
    }
    else if (inverse) {
        ForeC = theme.inverse.foreColor;
    }

    if (foreColor) {
        ForeC = foreColor;
    }
    return ForeC;

};


function getSize(props) {
    const {
        xxsmall,
        xsmall,
        small,
        medium,
        larg,
        xlarg,
        xxlarg,
    } = props;

    let size = 16;
    if (xxsmall) size = 16;
    else if (xsmall) size = 24;
    else if (small) size = 32;
    else if (medium) size = 48;
    else if (larg) size = 64;
    else if (xlarg) size = 72;
    else if (xxlarg) size = 96;

    return size;
};


const I = styled.i`
         padding:5px;
         color:${(props) => getColor(props)};  
         font-size:${(props) => getSize(props)}px !important;          
         display: inline-block;  
         float: ${(props) => (props.rtl || props.theme.rtl) ? 'right' : 'left' };     
         
         ${
    props => props.devider ?
        ` border-${(props.theme.rtl) ? 'left' : 'right'}: 1px solid #fff;
          padding-${(props.theme.rtl) ? 'left' : 'right'}: 5px;
          margin-${(props.theme.rtl) ? 'left' : 'right'}: 10px;`
        : ``
    }         
        
     `;


export default I;
