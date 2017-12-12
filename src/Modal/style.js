import styled from 'styled-components';

function getColor(props) {
  const {
    theme,
    foreColor,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else {
    ForeC = theme.primaryForeColor;
  }
  return ForeC;

};


function getBgColor(props) {
  const {
    theme,
    bgColor,
  } = props;

  let bgC;

  if (bgColor) {
    bgC = bgColor;
  } else {
    bgC = theme.primaryColor;
  }
  return bgC;
};


const Header = styled.header`
          color:${(props) => getColor(props)};
          padding:10px 20px 5px 10px;
          background-color:${(props) => getBgColor(props)};  
          
          label {
           display: inline-block;  
           margin-bottom: 5px;                         
          }
          
          i{
           padding: 0;
           margin: 3px;    
           float: ${(props) => (props.rtl || props.theme.rtl) ? 'left' : 'right' };          
          }
        `;

const Footer = styled.footer`
         border-bottom: 2px solid ${(props) => getBgColor(props)}; 
         border-top: 1px solid ${(props) => getBgColor(props)};         
         padding:10px 15px;
        `;

const Overlay = styled.div`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: 9998;
        background: rgba(0, 0, 0, 0.3);
        overflow-x: hidden;
        overflow-y: auto;
        padding: 30px;
        `;

const ModalBox = styled.div`
       position: relative;
        width: auto;
        margin: 10px auto;
        background: #fff;
        max-width: 800px;
        direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
        `;

const ModalBody = styled.div`
         padding: 20px;
        `;

export {Header, Footer, ModalBox, ModalBody, Overlay};
