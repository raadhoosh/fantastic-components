import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {getBgColor, getColor} from './Statics';

const LinkWrapper = styled(Link)`       
         color:${(props) => getColor(props)};
         background-color:${(props) => getBgColor(props)};
         text-decoration: none;
        `;

export default LinkWrapper;
