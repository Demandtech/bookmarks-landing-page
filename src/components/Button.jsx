import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import styled from 'styled-components';

const Button = ({label, type}) => {
 //console.log(type)
  return (
    <ButtonWrapper type={type}>{label}</ButtonWrapper>
  )
}
const ButtonWrapper = styled.button`
  padding: 10px 15px;
  text-transform: capitalize;
  border-radius: 4px;
  background: ${props => props.type === 'secondary' ? 'var(--softRed)' : 'var(--softBlue)'};
`

export default Button