/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


const TableStyled = styled.table` 
      
       width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
        border-collapse: collapse;
        min-width:${(props) => props.minWidth}px; 
        ${(props) => props.hover && ` tr {&:hover{ cursor: pointer; background-color: #eceeef; } }`}; 
         ${(props) => props.striped && ` tr:nth-child(even) {background-color: #f2f2f2;`};     
        td{
        border-top: 1px solid #eceeef;
        border:1px solid #eee !important;
        }
              `;


export default TableStyled;
