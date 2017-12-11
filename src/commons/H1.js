import styled from 'styled-components';
export const fontFamily = 'Noto, Roboto, sans-serif';

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding: 24px 24px 0;
  margin: 0;
  font-family: ${fontFamily};
  color:${props => props.color ? props.color: props.theme.rhThemeDark.color};
  background-color: ${props => props.backgroundColor ? props.backgroundColor: props.theme.rhThemeDark.backgroundColor};
`;
