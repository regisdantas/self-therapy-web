import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const MenuBarContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  img {
    width: 60px;
    height: 64px;
    border-radius: 50%;
  }
  svg {
    cursor: pointer;
  }
`;

export const Disabled = styled.span`
  svg {
    color: lightgrey;
    cursor: default;
  }
`;
