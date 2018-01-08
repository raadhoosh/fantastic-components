
import styled from 'styled-components';

const LiStyled = styled.li`
          cursor: pointer;
          display: flex;
          list-style: none;
          margin: 0;
          box-sizing: border-box;
          padding: 0.2rem;
          &:hover.visited{
           background-color: #ebebeb;
           color: black;
          }
      `;

export default LiStyled;
