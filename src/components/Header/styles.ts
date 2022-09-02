import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const HeaderContainer = styled.header`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 64px;
      flex: 1;
      margin-right: 45px;
      border-radius: 0%;
    }
  }
`;

export const Disabled = styled.span`
  svg {
    color: lightgrey;
    cursor: default;
  }
`;
