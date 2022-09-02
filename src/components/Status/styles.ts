import styled, { css } from 'styled-components';

interface StatusViewProps {
  type: string;
}

export const StatusView = styled.span<StatusViewProps>`
  display: block;
  margin-top: 8px;
  color: #04d361;
  ${props =>
    props.type === 'error' &&
    css`
      color: #c53030;
    `}
`;
