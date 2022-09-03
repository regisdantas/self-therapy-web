import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

interface CardProps {
  color: string;
}

export const CardContainer = styled.div<CardProps>`
  max-width: 700px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: #eee;
  border-radius: 5px;
  border-left: 3px dashed lightgray;
  ${props =>
    css`
      border-left-color: ${lighten(0.4, props.color)};
    `}

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    border-radius: 5px 5px 0px 0px;
    margin: 0;
    background: #fff;
    ${props =>
      css`
        color: ${shade(0.4, props.color)};
      `}

    header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      svg {
        margin: 10px;
        cursor: pointer;
      }
    }
    strong {
      width: 100%;
      padding: 10px;
    }

    span {
      border: 0px;
      padding: 10px;
      width: 100%;
      text-align: justify;

      max-height: 200px;
      overflow: hidden;
    }

    span:empty::before {
      content: attr(data-placeholder);
      display: inline-block;
      color: lightgray;
    }

    span:focus {
      outline: none;
    }

    .ActionContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 4px;
      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        * {
          margin-right: 5px;
        }
      }
    }
  }
`;
