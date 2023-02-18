import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import styled from 'styled-components';

const Button = ({label, type}) => {
 //console.log(type)
  return (
    <ButtonWrapper className={type} type={type}>{label}</ButtonWrapper>
  )
}
const ButtonWrapper = styled.button`
  padding: 15px 20px;
  text-transform: capitalize;
  border-radius: 4px;
  font-size: 16px;
  background: ${(props) =>
    props.type === 'secondary' ? 'var(--softRed)' : 'var(--softBlue)'};
  color: var(--white);
  border-style: solid;
  border-size: 2px;
  border-color: ${(props) =>
    props.type === 'secondary' ? 'var(--softRed)' : 'var(--softBlue)'};
  transition: .5s;
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      props.type === 'secondary' ? 'var(--softRed)' : 'var(--softBlue)'};
   background: transparent;
  }
`

export default Button