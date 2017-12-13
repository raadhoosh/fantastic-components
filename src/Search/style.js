/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


const OutoCompelete = styled.div`        
     margin: 0;
     position: relative;
      `;
const OutoCompeleteMenu = styled.div`        
        background: white;
        box-shadow: 0.1rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
        display: block;
        line-height: 1.5em;
        max-height: 200px;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0.5em;
        position: absolute;
        text-decoration: none;
        width: 100%;
        visibility: visible;
        z-index: 100;
      `;

const OutoCompeleteWrap = styled.div`        
       background-color: white;
        width: 100%;
        margin-top: 0;
        padding: 0;
      `;
const OutoCompeleteItems = styled.ul`        
       margin: 0;
       padding: 0.1rem;
      `;

const OutoCompeleteItem = styled.li`        
          cursor: pointer;
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0.2rem;
          &:hover.visited{
           background-color: #ebebeb;
           color: black;
          }
      `;
export { OutoCompelete,
  OutoCompeleteMenu,
  OutoCompeleteWrap,
  OutoCompeleteItems,
  OutoCompeleteItem };
