import React from 'react';
import styled from 'styled-components';
import style from './style';

const InputWrapper=styled.input`${style}`;

const Input = (props) => {
  return <InputWrapper style={{color:`${props.color}`, backgroundColor:`${props.backgroundColor}`}}/>
};

export default Input;
