import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Title, Disabled } from './styles';
import { FiArrowLeft, FiLogOut } from 'react-icons/fi';
import logo from '../../assets/logo.png';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} />
        <Title>{title}</Title>
      </NavLink>
      <p>by Regis Dantas</p>
    </HeaderContainer>
  );
};

export default Header;
