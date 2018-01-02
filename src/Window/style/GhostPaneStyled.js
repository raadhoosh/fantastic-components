/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

const GhostPaneStyled = styled.div`
      background: #999;
	    opacity: 0.2;
      width: 45%;
      height: 45%;
      top: 20%;
      left: 30%;      
      position: absolute;
      margin: 0;
      padding: 0;
      z-index: 98;
      transition: all 0.25s ease-in-out; 
      `;

export default GhostPaneStyled;
