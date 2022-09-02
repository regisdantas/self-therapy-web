import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
  margin-top: 16px;

  strong {
    width: 100%;
  }

  p {
    width: 100%;
  }

  &:hover {
    transform: translateX(6px);
  }
`;
