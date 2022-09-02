import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      width: 60px;
      height: 64px;
      flex: 1;
      margin-right: 45px;
      border-radius: 0%;
    }
  }
  p {
    font-size: 12px;
    margin-left: 200px;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }
`;

export const Disabled = styled.span`
  svg {
    color: lightgrey;
    cursor: default;
  }
`;
