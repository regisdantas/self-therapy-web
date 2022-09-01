import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

interface InputProps {
  hasError: boolean;
}

export const Form = styled.form`
  margin-top: 40px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input,
  button {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    height: 50px;
    margin: 12px;
  }

  button {
    background: #04d361;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Input = styled.input<InputProps>`
  border: 2px solid #fff;
  color: #3a3a3a;

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
