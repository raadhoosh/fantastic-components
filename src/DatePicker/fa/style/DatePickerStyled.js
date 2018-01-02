/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import defaultTheme from '../../../defaultTheme';

const DatePickerStyled = styled.div`
      width:250px;
      position: absolute;
      z-index: 10;  
      margin-top: 5px;      
      border-radius: 3px;      
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
      background:${props => (Object.keys(props.theme).length > 0 && props.theme) ? props.theme.bgWindowLight : defaultTheme.bgWindowLight };           
      `;

export default DatePickerStyled;



