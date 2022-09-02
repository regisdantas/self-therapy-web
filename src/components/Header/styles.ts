import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const HeaderContainer = styled.header`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 60px;
    height: 64px;
    border-radius: 50%;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  svg {
    cursor: pointer;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      margin-right: 20px;
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
