import styled, { css } from 'styled-components';

export const Steps = styled.div`
  max-width: 700px;

  div {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    margin-top: 16px;

    &:hover {
      transform: translateX(6px);
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
      cursor: pointer;
    }

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8d3;
      margin-top: 4px;
    }
  }
`;
