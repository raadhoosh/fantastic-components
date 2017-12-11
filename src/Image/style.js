/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

function getBorderC(props) {
    const {
        primary,
        secondary,
        info,
        warning,
        danger,
        success,
        inverse,
        borderColor,
        theme,
    } = props;

    let BorderC;
    if (primary) {
        BorderC = theme.primary.borderColor;
    }
    else if (secondary) {
        BorderC = theme.secondary.borderColor;
    }
    else if (info) {
        BorderC = theme.info.borderColor;
    }
    else if (warning) {
        BorderC = theme.warning.borderColor;
    }
    else if (danger) {
        BorderC = theme.danger.borderColor;
    }
    else if (success) {
        BorderC = theme.success.borderColor;
    }
    else if (inverse) {
        BorderC = theme.inverse.borderColor;
    }

    if (borderColor) {
        BorderC = borderColor;
    }
    return BorderC;
};

function getBgColor(props) {
    const {
        primary,
        secondary,
        info,
        warning,
        danger,
        success,
        inverse,
        bgColor,
        theme
    } = props;

    let bgC;
    if (primary) {
        bgC = theme.primary.bgColor;
    }
    else if (secondary) {
        bgC = theme.secondary.bgColor;
    }
    else if (info) {
        bgC = theme.info.bgColor;
    }
    else if (warning) {
        bgC = theme.warning.bgColor;
    }
    else if (danger) {
        bgC = theme.danger.bgColor;
    }
    else if (success) {
        bgC = theme.success.bgColor;
    }
    else if (inverse) {
        bgC = theme.inverse.bgColor;
    }

    if (bgColor) {
        bgC = bgColor;
    }

    return bgC;
};


const Image = styled.img`            
          display: block;
          max-width: 100%;
          height: auto;
          border:  1px solid ${(props) => getBorderC(props)}; 
                     
          ${(props) => props.ImageType === 'rounded' ? 'border-radius: 6px;'
    : (props.ImageType === 'circle' ? 'border-radius: 50%;' : props.ImageType === 'thumbnail' ? `            display: inline-block;
            padding: 4px;           
            background-color:${getBgColor(props)};     
            border:  1px solid ${getBorderC(props)};            
            border-radius: 4px;
            transition: all .2s ease-in-out;` : '' )
    }
     `;

export default Image;